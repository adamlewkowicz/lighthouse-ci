var github = require('@actions/github');
var lighthouse = require('lighthouse');
var chromeLauncher = require('chrome-launcher');
var core = require('@actions/core');
var exec = require('@actions/exec');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

function _interopNamespace(e) {
  if (e && e.__esModule) return e;
  var n = Object.create(null);
  if (e) {
    Object.keys(e).forEach(function (k) {
      if (k !== 'default') {
        var d = Object.getOwnPropertyDescriptor(e, k);
        Object.defineProperty(n, k, d.get ? d : {
          enumerable: true,
          get: function () {
            return e[k];
          }
        });
      }
    });
  }
  n['default'] = e;
  return n;
}

var lighthouse__default = /*#__PURE__*/_interopDefaultLegacy(lighthouse);
var chromeLauncher__namespace = /*#__PURE__*/_interopNamespace(chromeLauncher);

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

const pullRequest = github.context.payload.pull_request;

if (!pullRequest) {
  throw new Error('No pull request found');
}

async function getLighthouseResult(url) {
  const chrome = await chromeLauncher__namespace.launch({
    chromeFlags: ['--headless']
  });
  const {
    lhr: lighthouseResult
  } = await lighthouse__default['default'](url, {
    port: chrome.port
  });
  console.log({
    lighthouseResult
  });
  await chrome.kill();
  return lighthouseResult;
}
const getActionInputs = () => ({
  urls: core.getInput('urls', {
    required: true
  }).split(','),
  token: core.getInput('repo-token', {
    required: true
  })
});
const installDependencies = () => exec.exec('npm install');
const buildAndServe = () => exec.exec('npm run build:serve');
const checkoutBaseBranch = async () => {
  let baseRef;

  try {
    baseRef = github.context.payload.base.ref;
    if (!baseRef) throw Error('missing context.payload.pull_request.base.ref');
    await exec.exec(`git fetch -n origin ${pullRequest.base.ref}`);
    console.log('successfully fetched base.ref');
  } catch (e) {
    console.log('fetching base.ref failed', e.message);

    try {
      await exec.exec(`git fetch -n origin ${pullRequest.base.sha}`);
      console.log('successfully fetched base.sha');
    } catch (e) {
      console.log('fetching base.sha failed', e.message);

      try {
        await exec.exec(`git fetch -n`);
      } catch (e) {
        console.log('fetch failed', e.message);
      }
    }
  }

  console.log('checking out and building base commit');

  try {
    if (!baseRef) throw Error('missing context.payload.base.ref');
    await exec.exec(`git reset --hard ${baseRef}`);
  } catch (e) {
    await exec.exec(`git reset --hard ${pullRequest.base.sha}`);
  }
};
const createComment = async (octokit, content) => {
  await octokit.issues.createComment(_extends({}, github.context.repo, {
    issue_number: pullRequest.number,
    body: content
  }));
};

async function run() {
  const {
    urls,
    token
  } = getActionInputs();
  const octokit = github.getOctokit(token);
  await installDependencies();
  await buildAndServe();
  await getLighthouseResult(urls[0]);
  await checkoutBaseBranch();
  await installDependencies();
  await buildAndServe();
  await getLighthouseResult(urls[0]);
  await createComment(octokit, `Lighthouse CI Result`);
}

run();

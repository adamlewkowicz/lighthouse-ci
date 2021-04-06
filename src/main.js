const { getInput } = require('@actions/core');
const { exec } = require('@actions/exec');
const { getOctokit, context } = require('@actions/github');

async function run() {
  const { urls, token } = getActionInputs();
  console.log({ urls, token });
  const octokit = getOctokit(token);
  console.log('COMMENT');
  await createComment(octokit, `Lighthouse CI Result`);
  // await installDependencies();
  // await buildAndServe();
  // // const lighthouseResultCurrent = await getLighthouseResult(urls[0])
  // await checkoutBaseBranch();
  // await installDependencies();
  // await buildAndServe();
  // const lighthouseResultBase = await getLighthouseResult(urls[0])
}

const getActionInputs = () => ({
  urls: getInput('urls', { required: true }).split(','),
  token: getInput('repo-token', { required: true }),
});

const installDependencies = () => {
  console.log('Install Dependencies');
  return exec('npm install');
};

const buildAndServe = () => exec('npm run build:serve');

const pullRequest = context.payload.pull_request;

const checkoutBaseBranch = async () => {
  let baseRef;
  try {
    baseRef = context.payload.base.ref;
    if (!baseRef) throw Error('missing context.payload.pull_request.base.ref');
    await exec(`git fetch -n origin ${pullRequest.base.ref}`);
    console.log('successfully fetched base.ref');
  } catch (e) {
    console.log('fetching base.ref failed', e.message);
    try {
      await exec(`git fetch -n origin ${pullRequest.base.sha}`);
      console.log('successfully fetched base.sha');
    } catch (e) {
      console.log('fetching base.sha failed', e.message);
      try {
        await exec(`git fetch -n`);
      } catch (e) {
        console.log('fetch failed', e.message);
      }
    }
  }

  console.log('checking out and building base commit');
  try {
    if (!baseRef) throw Error('missing context.payload.base.ref');
    await exec(`git reset --hard ${baseRef}`);
  } catch (e) {
    await exec(`git reset --hard ${pullRequest.base.sha}`);
  }
};

const createComment = async (octokit, content) => {
  console.log('Creating comment');
  await octokit.issues.createComment({
    ...context.repo,
    issue_number: pullRequest.number,
    body: content,
  });
};

run();

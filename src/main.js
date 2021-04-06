const { getInput } = require('@actions/core');
const { exec } = require('@actions/exec');
const { getOctokit } = require('@actions/github');

async function run() {
  const { urls, token } = getActionInputs();
  console.log({ urls, token });
  const octokit = getOctokit(token);
  await installDependencies();
  // await buildAndServe()
  // const lighthouseResultCurrent = await getLighthouseResult(urls[0])
  // await checkoutBaseBranch()
  // await installDependencies()
  // await buildAndServe()
  // const lighthouseResultBase = await getLighthouseResult(urls[0])
  // await createComment(octokit, `Lighthouse CI Result`)
}

const getActionInputs = () => ({
  urls: getInput('urls', { required: true }).split(','),
  token: getInput('repo-token', { required: true }),
});

const installDependencies = () => exec('npm install');

run();

import { getInput } from '@actions/core';

async function run() {
  console.log({ token: getInput('repo-token', { required: true }) });

  // const octokit = getOctokit(token)
  // await installDependencies()
  // await buildAndServe()
  // const lighthouseResultCurrent = await getLighthouseResult(urls[0])
  // await checkoutBaseBranch()
  // await installDependencies()
  // await buildAndServe()
  // const lighthouseResultBase = await getLighthouseResult(urls[0])
  // await createComment(octokit, `Lighthouse CI Result`)
}

run();

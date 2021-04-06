import { getOctokit } from '@actions/github';
import {
  buildAndServe,
  checkoutBaseBranch,
  createComment,
  getActionInputs,
  getLighthouseResult,
  installDependencies,
} from './utils';

async function run() {
  const { urls, token } = await getActionInputs();
  console.log({ urls, token });

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

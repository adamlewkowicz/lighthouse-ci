import { setFailed } from '@actions/core';
import { getOctokit } from '@actions/github';
import killPort from 'kill-port';
import { getLighthouseResults, getMarkdownResults } from './utils/lighthouse';
import {
  buildAndServe,
  checkoutBaseBranch,
  createComment,
  getActionInputs,
  installDependencies,
} from './utils/main';

async function run() {
  const {
    urls,
    token,
    maxPercentageThreshold,
    minPerformanceScore,
  } = getActionInputs();

  const octokit = getOctokit(token);

  const lighthouseResults = await getLighthouseResults([urls[0]]);

  const markdownResult = getMarkdownResults(
    [urls[0]],
    lighthouseResults,
    lighthouseResults,
  );
  await createComment(octokit, markdownResult);

  // lighthouseResults.forEach(result => {
  //   if (result.categories.performance.score < minPerformanceScore) {
  //     throw new Error('')
  //   }
  // });
  // lighthouseResults[0].categories.performance.score;
  // if () {
  // }
}

run().catch((error) => {
  setFailed(error.message);
});

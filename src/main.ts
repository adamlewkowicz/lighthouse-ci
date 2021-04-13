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
  const { urls: _urls, token, maxPercentageThreshold } = getActionInputs();
  const urls = [_urls[0]];

  const octokit = getOctokit(token);

  const killServer = () => killPort(3000, 'tcp');

  await installDependencies();
  await buildAndServe();
  const lighthouseResultsBase = await getLighthouseResults(urls);

  await killServer();
  await checkoutBaseBranch();

  await installDependencies();
  await buildAndServe();
  const lighthouseResultsCurrent = await getLighthouseResults(urls);

  const markdownResult = getMarkdownResults(
    urls,
    lighthouseResultsBase,
    lighthouseResultsCurrent,
  );
  await createComment(octokit, markdownResult);

  await killServer();
}

run().catch((error) => {
  setFailed(error.message);
});

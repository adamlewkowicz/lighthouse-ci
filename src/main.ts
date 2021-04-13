import { setFailed } from '@actions/core';
import { getOctokit } from '@actions/github';
import {
  buildAndServe,
  checkoutBaseBranch,
  createComment,
  getActionInputs,
  installDependencies,
} from './utils';
import {
  getLhrComparison,
  getLighthouseResultsTable,
  getLighthouseResults,
} from './utils/lighthouse';
import killPort from 'kill-port';

async function run() {
  const { urls: _urls, token, maxPercentageThreshold } = getActionInputs();
  const urls = [_urls[0]];

  const octokit = getOctokit(token);

  const killServer = () => killPort(3000, 'tcp');

  await installDependencies();
  await buildAndServe();
  const lighthouseResultsBase = await getLighthouseResults(urls);

  console.log({ lighthouseResultsBase });

  await killServer();
  await checkoutBaseBranch();

  await installDependencies();
  await buildAndServe();
  const lighthouseResultsCurrent = await getLighthouseResults(urls);

  const markdownResult = urls.reduce((markdown, url, index) => {
    const reports = getLhrComparison(
      lighthouseResultsBase[index],
      lighthouseResultsCurrent[index],
    );
    const table = getLighthouseResultsTable(reports);

    markdown += `Lighthouse result for *${url}*
    ${table}
    \n\n
    `.trim();

    return markdown;
  }, '');

  await createComment(octokit, markdownResult);

  await killServer();
}

run().catch((error) => {
  setFailed(error.message);
});

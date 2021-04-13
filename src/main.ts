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
  getLighthouseResult,
  getLhrComparison,
  getLighthouseResultsTable,
} from './utils/lighthouse';
import killPort from 'kill-port';

async function run() {
  const { urls, token, maxPercentageThreshold } = getActionInputs();

  const octokit = getOctokit(token);

  const killServer = () => killPort(3000, 'tcp');

  await installDependencies();
  await buildAndServe();
  const lighthouseResultBase = await getLighthouseResult(
    'http://localhost:3000/',
  );

  await killServer();
  await checkoutBaseBranch();

  await installDependencies();
  await buildAndServe();
  const lighthouseResultCurrent = await getLighthouseResult(
    'http://localhost:3000/',
  );

  const reports = getLhrComparison(
    lighthouseResultBase,
    lighthouseResultCurrent,
  );
  const table = getLighthouseResultsTable(reports);
  await createComment(octokit, table);

  await killServer();
}

run().catch((error) => {
  setFailed(error.message);
});

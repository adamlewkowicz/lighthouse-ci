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

async function run() {
  const { urls, token } = getActionInputs();
  console.log({ urls, token });

  const octokit = getOctokit(token);
  // await installDependencies();
  // await buildAndServe();
  // const lighthouseResultCurrent = await getLighthouseResult(urls[0]);
  // const lighthouseResultCurrent = await getLighthouseResult(
  //   'https://amaro.com/br/pt/',
  // );

  // const reports = getLhrComparison(
  //   lighthouseResultCurrent,
  //   lighthouseResultCurrent,
  // );

  // const table = getLighthouseResultsTable(reports);

  // await createComment(octokit, table);

  //
  await installDependencies();
  await buildAndServe();
  const lighthouseResultBase = await getLighthouseResult(
    'http://localhost:3000/',
  );
  console.log(lighthouseResultBase);

  await checkoutBaseBranch();

  await installDependencies();
  await buildAndServe();
  const lighthouseResultCurrent = await getLighthouseResult(
    'http://localhost:3000/',
  );

  const reports = getLhrComparison(
    lighthouseResultCurrent,
    lighthouseResultCurrent,
  );
  const table = getLighthouseResultsTable(reports);
  await createComment(octokit, table);

  // await createComment(
  //   octokit,
  //   `
  //   \`\`\`json
  //     ${JSON.stringify(
  //       lighthouseResultCurrent.audits['largest-contentful-paint'],
  //     )}
  //   \`\`\`
  // `,
  // );
}

run().catch((error) => {
  setFailed(error.message);
});

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
  const lighthouseResultCurrent = await getLighthouseResult(
    'https://amaro.com/br/pt/',
  );
  //
  console.log(
    Object.keys(lighthouseResultCurrent),
    lighthouseResultCurrent.categories.performance.auditRefs,
    lighthouseResultCurrent,
  );

  const reports = getLhrComparison(
    lighthouseResultCurrent.audits,
    lighthouseResultCurrent.audits,
  );

  const table = getLighthouseResultsTable(reports);

  await createComment(octokit, table);

  // await checkoutBaseBranch()
  // await installDependencies()
  // await buildAndServe()
  // const lighthouseResultBase = await getLighthouseResult(urls[0])
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

run();

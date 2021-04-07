"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const github_1 = require("@actions/github");
const utils_1 = require("./utils");
const lighthouse_1 = require("./utils/lighthouse");
async function run() {
    const { urls, token } = utils_1.getActionInputs();
    console.log({ urls, token });
    const octokit = github_1.getOctokit(token);
    // await installDependencies();
    // await buildAndServe();
    // const lighthouseResultCurrent = await getLighthouseResult(urls[0]);
    const lighthouseResultCurrent = await lighthouse_1.getLighthouseResult('https://amaro.com/br/pt/');
    //
    console.log(Object.keys(lighthouseResultCurrent), lighthouseResultCurrent.categories.performance.auditRefs, lighthouseResultCurrent);
    // await checkoutBaseBranch()
    // await installDependencies()
    // await buildAndServe()
    // const lighthouseResultBase = await getLighthouseResult(urls[0])
    await utils_1.createComment(octokit, `
    \`\`\`json
      ${JSON.stringify(lighthouseResultCurrent.audits['largest-contentful-paint'])}
    \`\`\`
  `);
}
run();

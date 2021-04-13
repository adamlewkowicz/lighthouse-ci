"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@actions/core");
const github_1 = require("@actions/github");
const utils_1 = require("./utils");
const lighthouse_1 = require("./utils/lighthouse");
const kill_port_1 = __importDefault(require("kill-port"));
async function run() {
    const { urls, token } = utils_1.getActionInputs();
    console.log({ urls, token });
    const octokit = github_1.getOctokit(token);
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
    await utils_1.installDependencies();
    await utils_1.buildAndServe();
    const lighthouseResultBase = await lighthouse_1.getLighthouseResult('http://localhost:3000/');
    console.log(lighthouseResultBase);
    await kill_port_1.default(3000, 'tcp');
    await utils_1.checkoutBaseBranch();
    await utils_1.installDependencies();
    await utils_1.buildAndServe();
    const lighthouseResultCurrent = await lighthouse_1.getLighthouseResult('http://localhost:3000/');
    const reports = lighthouse_1.getLhrComparison(lighthouseResultCurrent, lighthouseResultCurrent);
    const table = lighthouse_1.getLighthouseResultsTable(reports);
    await utils_1.createComment(octokit, table);
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
    core_1.setFailed(error.message);
});

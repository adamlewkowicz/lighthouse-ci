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
    const { urls, token, maxPercentageThreshold } = utils_1.getActionInputs();
    const octokit = github_1.getOctokit(token);
    const killServer = () => kill_port_1.default(3000, 'tcp');
    await utils_1.installDependencies();
    await utils_1.buildAndServe();
    const lighthouseResultsBase = await lighthouse_1.getLighthouseResults(urls);
    console.log({ lighthouseResultsBase });
    await killServer();
    await utils_1.checkoutBaseBranch();
    await utils_1.installDependencies();
    await utils_1.buildAndServe();
    const lighthouseResultsCurrent = await lighthouse_1.getLighthouseResults(urls);
    const markdownResult = urls.reduce((markdown, url, index) => {
        const reports = lighthouse_1.getLhrComparison(lighthouseResultsBase[index], lighthouseResultsCurrent[index]);
        const table = lighthouse_1.getLighthouseResultsTable(reports);
        markdown += `Lighthouse result for *${url}*
    ${table}
    \n\n
    `.trim();
        return markdown;
    }, '');
    await utils_1.createComment(octokit, markdownResult);
    await killServer();
}
run().catch((error) => {
    core_1.setFailed(error.message);
});

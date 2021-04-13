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
    const lighthouseResultBase = await lighthouse_1.getLighthouseResult('http://localhost:3000/');
    await killServer();
    await utils_1.checkoutBaseBranch();
    await utils_1.installDependencies();
    await utils_1.buildAndServe();
    const lighthouseResultCurrent = await lighthouse_1.getLighthouseResult('http://localhost:3000/');
    const reports = lighthouse_1.getLhrComparison(lighthouseResultBase, lighthouseResultCurrent);
    const table = lighthouse_1.getLighthouseResultsTable(reports);
    await utils_1.createComment(octokit, table);
    await killServer();
}
run().catch((error) => {
    core_1.setFailed(error.message);
});

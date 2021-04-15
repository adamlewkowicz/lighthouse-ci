"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@actions/core");
const github_1 = require("@actions/github");
const kill_port_1 = __importDefault(require("kill-port"));
const lighthouse_1 = require("./utils/lighthouse");
const main_1 = require("./utils/main");
async function run() {
    const { urls, token, maxPercentageThreshold } = main_1.getActionInputs();
    const octokit = github_1.getOctokit(token);
    const killServer = () => kill_port_1.default(3000, 'tcp');
    await main_1.installDependencies();
    await main_1.buildAndServe();
    const lighthouseResultsBase = await lighthouse_1.getLighthouseResults(urls);
    await killServer();
    await main_1.checkoutBaseBranch();
    await main_1.installDependencies();
    await main_1.buildAndServe();
    const lighthouseResultsCurrent = await lighthouse_1.getLighthouseResults(urls);
    const markdownResult = lighthouse_1.getMarkdownResults(urls, lighthouseResultsBase, lighthouseResultsCurrent);
    await main_1.createComment(octokit, markdownResult);
    await killServer();
}
run().catch((error) => {
    core_1.setFailed(error.message);
});

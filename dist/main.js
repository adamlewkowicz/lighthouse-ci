"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@actions/core");
const github_1 = require("@actions/github");
const lighthouse_1 = require("./utils/lighthouse");
const main_1 = require("./utils/main");
async function run() {
    const { urls, token, maxPercentageThreshold, minPerformanceScore, } = main_1.getActionInputs();
    const octokit = github_1.getOctokit(token);
    const lighthouseResults = await lighthouse_1.getLighthouseResults(urls);
    const markdownResult = lighthouse_1.getMarkdownResults(urls, lighthouseResults, lighthouseResults);
    await main_1.createComment(octokit, markdownResult);
    // lighthouseResults.forEach(result => {
    //   if (result.categories.performance.score < minPerformanceScore) {
    //     throw new Error('')
    //   }
    // });
    // lighthouseResults[0].categories.performance.score;
    // if () {
    // }
}
run().catch((error) => {
    core_1.setFailed(error.message);
});

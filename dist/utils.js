"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@actions/core");
const exec_1 = require("@actions/exec");
const github_1 = require("@actions/github");
exports.pullRequest = github_1.context.payload.pull_request;
if (!exports.pullRequest) {
    throw new Error('No pull request found');
}
async function getLighthouseResult(url) {
    const lighthouseResult = {};
    // const chrome = await chromeLauncher.launch({ chromeFlags: ['--headless'] });
    // const { lhr: lighthouseResult } = await lighthouse(url, {
    //   port: chrome.port,
    // });
    // console.log({ lighthouseResult });
    // await chrome.kill();
    return lighthouseResult;
}
exports.getLighthouseResult = getLighthouseResult;
exports.getActionInputs = () => ({
    urls: core_1.getInput('urls', { required: true }).split(','),
    token: core_1.getInput('repo-token', { required: true }),
});
exports.installDependencies = () => exec_1.exec('npm install');
exports.buildAndServe = () => exec_1.exec('npm run build:serve');
exports.checkoutBaseBranch = async () => {
    let baseRef;
    try {
        baseRef = github_1.context.payload.base.ref;
        if (!baseRef)
            throw Error('missing context.payload.pull_request.base.ref');
        await exec_1.exec(`git fetch -n origin ${exports.pullRequest.base.ref}`);
        console.log('successfully fetched base.ref');
    }
    catch (e) {
        console.log('fetching base.ref failed', e.message);
        try {
            await exec_1.exec(`git fetch -n origin ${exports.pullRequest.base.sha}`);
            console.log('successfully fetched base.sha');
        }
        catch (e) {
            console.log('fetching base.sha failed', e.message);
            try {
                await exec_1.exec(`git fetch -n`);
            }
            catch (e) {
                console.log('fetch failed', e.message);
            }
        }
    }
    console.log('checking out and building base commit');
    try {
        if (!baseRef)
            throw Error('missing context.payload.base.ref');
        await exec_1.exec(`git reset --hard ${baseRef}`);
    }
    catch (e) {
        await exec_1.exec(`git reset --hard ${exports.pullRequest.base.sha}`);
    }
};
exports.createComment = async (octokit, content) => {
    await octokit.issues.createComment({
        ...github_1.context.repo,
        issue_number: exports.pullRequest.number,
        body: content,
    });
};

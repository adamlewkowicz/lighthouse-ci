"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createComment = exports.checkoutBaseBranch = exports.buildAndServe = exports.installDependencies = exports.getActionInputs = exports.getLighthouseResult = exports.pullRequest = void 0;
const lighthouse_1 = __importDefault(require("lighthouse"));
const chromeLauncher = __importStar(require("chrome-launcher"));
const core_1 = require("@actions/core");
const exec_1 = require("@actions/exec");
const github_1 = require("@actions/github");
exports.pullRequest = github_1.context.payload.pull_request;
if (!exports.pullRequest) {
    throw new Error('No pull request found');
}
async function getLighthouseResult(url) {
    const chrome = await chromeLauncher.launch({ chromeFlags: ['--headless'] });
    const { lhr: lighthouseResult } = await lighthouse_1.default(url, {
        port: chrome.port,
    });
    await chrome.kill();
    return lighthouseResult;
}
exports.getLighthouseResult = getLighthouseResult;
const getActionInputs = () => ({
    urls: core_1.getInput('urls', { required: true }).split(','),
    token: core_1.getInput('repo-token', { required: true }),
});
exports.getActionInputs = getActionInputs;
const installDependencies = () => exec_1.exec('npm install');
exports.installDependencies = installDependencies;
const buildAndServe = () => exec_1.exec('npm run build:serve');
exports.buildAndServe = buildAndServe;
const checkoutBaseBranch = async () => {
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
exports.checkoutBaseBranch = checkoutBaseBranch;
const createComment = async (octokit, content) => {
    await octokit.issues.createComment({
        ...github_1.context.repo,
        issue_number: exports.pullRequest.number,
        body: content,
    });
};
exports.createComment = createComment;

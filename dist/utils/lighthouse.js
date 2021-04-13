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
exports.getPercentageDiff = exports.getMarkdownResults = exports.getLighthouseResults = void 0;
const lighthouse_1 = __importDefault(require("lighthouse"));
const chromeLauncher = __importStar(require("chrome-launcher"));
async function getLighthouseResult(url) {
    const chrome = await chromeLauncher.launch({ chromeFlags: ['--headless'] });
    const { lhr: lighthouseResult } = await lighthouse_1.default(url, {
        port: chrome.port,
        onlyCategories: ['performance'],
    });
    await chrome.kill();
    return lighthouseResult;
}
const getLighthouseResults = async (urls) => {
    const results = [];
    for (const url of urls) {
        const result = await getLighthouseResult(url);
        results.push(result);
    }
    return results;
};
exports.getLighthouseResults = getLighthouseResults;
const getMarkdownResults = (urls, resultsBase, resultsCurrent) => {
    const markdownResult = urls.reduce((markdown, url, index) => {
        const reports = getLhrComparison(resultsBase[index], resultsCurrent[index]);
        const table = getLighthouseResultsTable(reports);
        markdown += `Lighthouse result for *${url}*
    ${table}
    \n\n
    `.trim();
        return markdown;
    }, '');
    return markdownResult;
};
exports.getMarkdownResults = getMarkdownResults;
const getPercentageDiff = (previous, next) => {
    const increase = next - previous;
    return (increase / previous) * 100;
};
exports.getPercentageDiff = getPercentageDiff;
const MAX_DIFFERENCE_THRESHOLD = 5;
const getLhrComparison = (previousResult, nextResult) => {
    const fields = [
        'first-contentful-paint',
        'interactive',
        'speed-index',
        'total-blocking-time',
        'largest-contentful-paint',
        'cumulative-layout-shift',
    ];
    const normalizedResult = fields.map((field) => {
        const prevAudit = previousResult.audits[field];
        const nextAudit = nextResult.audits[field];
        console.log({ prevAudit, nextAudit });
        const percentageDiff = exports.getPercentageDiff(prevAudit.numericValue, nextAudit.numericValue);
        return {
            title: prevAudit.title,
            previousScore: prevAudit.displayValue,
            nextScore: nextAudit.displayValue,
            difference: percentageDiff,
            isAboveThreshold: percentageDiff > MAX_DIFFERENCE_THRESHOLD,
        };
    });
    const performancePercentageDiff = exports.getPercentageDiff(nextResult.categories.performance.score, previousResult.categories.performance.score);
    const performanceResult = {
        title: 'Performance',
        previousScore: previousResult.categories.performance.score,
        nextScore: nextResult.categories.performance.score,
        difference: performancePercentageDiff,
        isAboveThreshold: performancePercentageDiff > MAX_DIFFERENCE_THRESHOLD,
    };
    normalizedResult.unshift(performanceResult);
    return normalizedResult;
};
const tableHeaderTitles = ['Metric', 'Base', 'Current', '+/- %', ''];
const getLighthouseResultsTable = (reports) => `
  | ${tableHeaderTitles.join(' | ')} |
  | ${tableHeaderTitles.map(() => '---').join(' | ')} |
  ${reports
    .map((report) => {
    let formattedResult;
    if (report.difference === 0) {
        formattedResult = '--';
    }
    else {
        const formattedDifference = `${report.difference > 0 ? '+' : ''}${report.difference}`;
        if (report.isAboveThreshold) {
            formattedResult = `**${formattedDifference}**`;
        }
        else {
            formattedResult = formattedDifference;
        }
    }
    return [
        report.title,
        report.previousScore,
        report.nextScore,
        formattedResult,
        report.isAboveThreshold ? '🚫' : '✅',
    ];
})
    .map((columns) => `| ${columns.join(' | ')} |`)
    .join('\n')}
`;

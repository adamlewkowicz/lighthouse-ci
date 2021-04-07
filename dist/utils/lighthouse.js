"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const lighthouse_1 = __importDefault(require("lighthouse"));
const chromeLauncher = __importStar(require("chrome-launcher"));
exports.compareResults = () => { };
async function getLighthouseResult(url) {
    const chrome = await chromeLauncher.launch({ chromeFlags: ['--headless'] });
    const { lhr: lighthouseResult } = await lighthouse_1.default(url, {
        port: chrome.port,
        onlyCategories: ['performance'],
    });
    await chrome.kill();
    return lighthouseResult;
}
exports.getLighthouseResult = getLighthouseResult;
exports.getPercentageDiff = (previous, next) => Math.floor((previous / next) * 100);
exports.getLhrComparison = (previousResult, nextResult) => {
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
        return {
            title: prevAudit.title,
            previousScore: prevAudit.displayValue,
            nextScore: nextAudit.displayValue,
            difference: exports.getPercentageDiff(prevAudit.score, nextAudit.score),
        };
    });
    const performanceResult = {
        title: 'Performance',
        previousScore: previousResult.categories.performance.score,
        nextScore: nextResult.categories.performance.score,
        difference: exports.getPercentageDiff(nextResult.categories.performance.score, previousResult.categories.performance.score),
    };
    normalizedResult.unshift(performanceResult);
    return normalizedResult;
};
const tableHeaderTitles = ['Metric', 'Base', 'Current', '+/- %'];
exports.getLighthouseResultsTable = (reports) => `
  | ${tableHeaderTitles.join(' | ')} |
  | ${tableHeaderTitles.map(() => '---').join(' | ')} |
  ${reports
    .map((report) => [
    report.title,
    report.previousScore,
    report.nextScore,
    `${report.difference} %`,
])
    .map((columns) => `| ${columns.join(' | ')} |`)
    .join('\n')}
`;
const getLighthouseReport = async (url) => {
    // const table = getLighthouseResultsTable(reports);
};
const getLighthouseReportForUrls = (urls) => { };
const normalizeLighthouseResults = () => { };

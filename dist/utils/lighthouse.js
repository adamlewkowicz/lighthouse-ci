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
        logLevel: 'info',
    });
    await chrome.kill();
    return lighthouseResult;
}
exports.getLighthouseResult = getLighthouseResult;
exports.getLhrComparison = (previousResult, nextResult) => {
    const fields = [
        'first-contentful-paint',
        'interactive',
        'speed-index',
        'total-blocking-time',
        'largest-contentful-paint',
        'cumulative-layout-shift',
    ];
    return fields.map((field) => ({
        title: previousResult[field].title,
        previousScore: previousResult[field].displayValue,
        nextScore: nextResult[field].displayValue,
        difference: previousResult[field].score - nextResult[field].score,
    }));
};
const tableHeaderTitles = ['Metric', 'Base', 'Current', '+/-'];
exports.getLighthouseResultsTable = (reports) => `
  | ${reports.map((report) => report.title).join(' | ')} |
  | ${tableHeaderTitles.map(() => '---').join(' | ')} |
  ${reports
    .map((report) => [
    report.previousScore,
    report.nextScore,
    report.difference,
])
    .map((columns) => `| ${columns.join(' | ')} |`)
    .join('\n')}
`;
const normalizeLighthouseResults = () => { };

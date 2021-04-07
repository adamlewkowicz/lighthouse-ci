import lighthouse from 'lighthouse';
import * as chromeLauncher from 'chrome-launcher';
import { LighthouseResult } from './types';

export const compareResults = () => {};

export async function getLighthouseResult(url: string) {
  const chrome = await chromeLauncher.launch({ chromeFlags: ['--headless'] });
  const { lhr: lighthouseResult } = await lighthouse(url, {
    port: chrome.port,
    onlyCategories: ['performance'],
    logLevel: 'info',
  });
  await chrome.kill();

  return lighthouseResult as LighthouseResult;
}

export const getLhrComparison = (
  previousResult: LighthouseResult['audits'],
  nextResult: LighthouseResult['audits'],
): Item[] => {
  const fields = [
    'first-contentful-paint',
    'interactive',
    'speed-index',
    'total-blocking-time',
    'largest-contentful-paint',
    'cumulative-layout-shift',
  ] as const;

  return fields.map((field) => ({
    title: previousResult[field].title,
    previousScore: previousResult[field].displayValue,
    nextScore: nextResult[field].displayValue,
    difference: previousResult[field].score - nextResult[field].score,
  }));
};

const tableHeaderTitles = ['Metric', 'Base', 'Current', '+/-'];

export const getLighthouseResultsTable = (reports: Item[]) => `
  | ${tableHeaderTitles.join(' | ')} |
  | ${tableHeaderTitles.map(() => '---').join(' | ')} |
  ${reports
    .map((report) => [
      report.title,
      report.previousScore,
      report.nextScore,
      report.difference,
    ])
    .map((columns) => `| ${columns.join(' | ')} |`)
    .join('\n')}
`;

interface Item {
  title: string;
  previousScore: string;
  nextScore: string;
  difference: string | number;
}

const normalizeLighthouseResults = () => {};

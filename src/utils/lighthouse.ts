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
  previousResult: LighthouseResult,
  nextResult: LighthouseResult,
): Item[] => {
  const fields = [
    'first-contentful-paint',
    'interactive',
    'speed-index',
    'total-blocking-time',
    'largest-contentful-paint',
    'cumulative-layout-shift',
  ] as const;

  const normalizedResult = fields.map<Item>((field) => {
    const prevAudit = previousResult.audits[field];
    const nextAudit = nextResult.audits[field];

    return {
      title: prevAudit.title,
      previousScore: prevAudit.displayValue,
      nextScore: nextAudit.displayValue,
      difference: prevAudit.score - nextAudit.score,
    };
  });

  const performanceResult = {
    title: 'Performance',
    previousScore: previousResult.categories.performance.score,
    nextScore: nextResult.categories.performance.score,
    difference:
      nextResult.categories.performance.score -
      previousResult.categories.performance.score,
  };

  normalizedResult.unshift(performanceResult);

  return normalizedResult;
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
  previousScore: string | number;
  nextScore: string | number;
  difference: string | number;
}

const normalizeLighthouseResults = () => {};

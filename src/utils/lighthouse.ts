import lighthouse from 'lighthouse';
import * as chromeLauncher from 'chrome-launcher';
import { LighthouseResult } from './types';
import { getActionInputs } from './main';

async function getLighthouseResult(url: string) {
  const chrome = await chromeLauncher.launch({ chromeFlags: ['--headless'] });
  const { lhr: lighthouseResult } = await lighthouse(url, {
    port: chrome.port,
    onlyCategories: ['performance'],
  });
  await chrome.kill();

  return lighthouseResult as LighthouseResult;
}

export const getLighthouseResults = async (
  urls: string[],
): Promise<LighthouseResult[]> => {
  const results: LighthouseResult[] = [];

  for (const url of urls) {
    const result = await getLighthouseResult(url);
    results.push(result);
  }
  return results;
};

export const getMarkdownResults = (
  urls: string[],
  resultsBase: LighthouseResult[],
  resultsCurrent: LighthouseResult[],
): string => {
  const markdownResult = urls.reduce((markdown, url, index) => {
    const reports = getLhrComparison(resultsBase[index], resultsCurrent[index]);
    const table = getLighthouseResultsTable(reports);

    markdown += `\n<details>
    <summary>Lighthouse result for ${url}</summary>
    \n${table}
    \n</details>`;

    return markdown;
  }, '');

  return markdownResult;
};

export const getPercentageDiff = (previous: number, next: number) => {
  const increase = next - previous;
  return (increase / previous) * 100;
};

const getLhrComparison = (
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
  const { minPerformanceScore } = getActionInputs();

  const normalizedResult = fields.map<Item>((field) => {
    const prevAudit = previousResult.audits[field];
    const nextAudit = nextResult.audits[field];
    console.log({ prevAudit, nextAudit });

    const percentageDiff = Math.round(
      getPercentageDiff(prevAudit.numericValue, nextAudit.numericValue),
    );

    return {
      title: prevAudit.title,
      previousScore: prevAudit.displayValue,
      nextScore: nextAudit.displayValue,
      difference: percentageDiff,
      isAboveThreshold: null,
    };
  });

  const performancePercentageDiff = Math.round(
    getPercentageDiff(
      nextResult.categories.performance.score,
      previousResult.categories.performance.score,
    ),
  );

  const performanceResult: Item = {
    title: 'Performance',
    previousScore: previousResult.categories.performance.score,
    nextScore: nextResult.categories.performance.score,
    difference: performancePercentageDiff,
    isAboveThreshold:
      nextResult.categories.performance.score < minPerformanceScore,
  };

  normalizedResult.unshift(performanceResult);

  return normalizedResult;
};

const tableHeaderTitles = ['Metric', 'Score', ''];

const getLighthouseResultsTable = (reports: Item[]) => `
  | ${tableHeaderTitles.join(' | ')} |
  | ${tableHeaderTitles.map(() => '---').join(' | ')} |
  ${reports
    .map((report) => {
      let formattedResult: string;
      let reportCheck = '';

      if (report.isAboveThreshold !== null) {
        if (report.isAboveThreshold) {
          reportCheck = '🚫';
        } else {
          reportCheck = '✅';
        }
      }

      if (report.difference === 0) {
        formattedResult = '--';
      } else {
        const formattedDifference = `${report.difference > 0 ? '+' : ''}${
          report.difference
        }%`;

        if (report.isAboveThreshold) {
          formattedResult = `**${formattedDifference}**`;
        } else {
          formattedResult = formattedDifference;
        }
      }

      return [report.title, report.previousScore, reportCheck];
    })
    .map((columns) => `| ${columns.join(' | ')} |`)
    .join('\n')}
`;

interface Item {
  title: string;
  previousScore: string | number;
  nextScore: string | number;
  difference: string | number;
  isAboveThreshold: boolean | null;
}

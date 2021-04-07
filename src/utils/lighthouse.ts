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
    'total-blocking-time',
    'largest-contentful-paint',
    'speed-index',
  ] as const;

  return fields.map((field) => ({
    title: previousResult[field].title,
    previousScore: previousResult[field].displayValue,
    nextScore: nextResult[field].displayValue,
    difference: previousResult[field].score - nextResult[field].score,
  }));
  // const item = [
  //   {
  //   title: previousResult['first-contentful-paint'].title,
  //   previousScore: previousResult['first-contentful-paint'].displayValue,
  //   nextScore: nextResult['first-contentful-paint'].displayValue,
  //   difference:
  //     previousResult['first-contentful-paint'].score -
  //     nextResult['first-contentful-paint'].score,
  // },
  //   {
  //     title: 'Time to Interactive	',
  //   },
  // ];
  // return {};
};

interface Item {
  title: string;
  previousScore: string;
  nextScore: string;
  difference: string | number;
}

const normalizeLighthouseResults = () => {};

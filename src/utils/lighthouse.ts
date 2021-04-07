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

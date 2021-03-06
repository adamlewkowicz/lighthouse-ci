import { getInput } from '@actions/core';
import { exec } from '@actions/exec';
import { context, getOctokit } from '@actions/github';

export const pullRequest = context.payload.pull_request;

if (!pullRequest) {
  throw new Error('No pull request found');
}

export const getActionInputs = () => ({
  urls: getInput('urls', { required: true })
    .split(',')
    .map((url) => url.trim()),
  token: getInput('repo-token', { required: true }),
  maxPercentageThreshold: Number(
    getInput('max-percentage-threshold', {
      // required: true,
    }),
  ),
});

export const installDependencies = () => exec('npm ci');

export const buildAndServe = async () => {
  await exec('npm run build');
  exec('npm run serve');
  // exec('npm run build:serve')
};

export const checkoutBaseBranch = async () => {
  let baseRef: any;
  try {
    baseRef = context.payload.base.ref;
    if (!baseRef) throw Error('missing context.payload.pull_request.base.ref');
    await exec(`git fetch -n origin ${pullRequest.base.ref}`);
    console.log('successfully fetched base.ref');
  } catch (e) {
    console.log('fetching base.ref failed', e.message);
    try {
      await exec(`git fetch -n origin ${pullRequest.base.sha}`);
      console.log('successfully fetched base.sha');
    } catch (e) {
      console.log('fetching base.sha failed', e.message);
      try {
        await exec(`git fetch -n`);
      } catch (e) {
        console.log('fetch failed', e.message);
      }
    }
  }

  console.log('checking out and building base commit');
  try {
    if (!baseRef) throw Error('missing context.payload.base.ref');
    await exec(`git reset --hard ${baseRef}`);
  } catch (e) {
    await exec(`git reset --hard ${pullRequest.base.sha}`);
  }
};

export const createComment = async (octokit: Octokit, content: string) => {
  await octokit.issues.createComment({
    ...context.repo,
    issue_number: pullRequest.number,
    body: content,
  });
};

type Octokit = ReturnType<typeof getOctokit>;

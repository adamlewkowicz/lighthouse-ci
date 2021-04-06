import { getOctokit } from '@actions/github';
export declare const pullRequest: {
    [key: string]: any;
    number: number;
    html_url?: string;
    body?: string;
};
export declare function getLighthouseResult(url: string): Promise<any>;
export declare const getActionInputs: () => {
    urls: string[];
    token: string;
};
export declare const installDependencies: () => Promise<number>;
export declare const buildAndServe: () => Promise<number>;
export declare const checkoutBaseBranch: () => Promise<void>;
export declare const createComment: (octokit: Octokit, content: string) => Promise<void>;
declare type Octokit = ReturnType<typeof getOctokit>;
export {};

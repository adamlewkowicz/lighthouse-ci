"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("./utils");
async function run() {
    const { urls, token } = utils_1.getActionInputs();
    console.log({ urls, token });
    // const octokit = getOctokit(token)
    // await installDependencies();
    // await buildAndServe();
    // const lighthouseResultCurrent = await getLighthouseResult(urls[0]);
    const lighthouseResultCurrent = await utils_1.getLighthouseResult('https://amaro.com/br/pt/');
    //
    console.log(Object.keys(lighthouseResultCurrent), lighthouseResultCurrent.lhr);
    // await checkoutBaseBranch()
    // await installDependencies()
    // await buildAndServe()
    // const lighthouseResultBase = await getLighthouseResult(urls[0])
    // await createComment(octokit, `Lighthouse CI Result`)
}
run();

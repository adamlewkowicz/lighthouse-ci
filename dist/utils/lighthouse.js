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

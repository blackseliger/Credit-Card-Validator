import puppetteer from 'puppeteer';
import { fork } from 'child_process';

jest.setTimeout(30000); // default puppeteer timeout

describe('Credit Card Validator form', () => {
  let browser = null;
  let page = null;
  let server = null;
  const baseUrl = 'http://localhost:9000';

  beforeAll(async () => {
    server = fork(`${__dirname}/e2e.server.js`);
    await new Promise((resolve, reject) => {
      server.on('error', reject);
      server.on('message', (message) => {
        if (message === 'ok') {
          resolve();
        }
      });
    });

    browser = await puppetteer.launch({
      // headless: false, // show gui
      // slowMo: 250,
      // devtools: true, // show devTools
    });
    page = await browser.newPage();
  });

  afterAll(async () => {
    await browser.close();
    server.kill();
  });

  test('should be valid', async () => {
    await page.goto(baseUrl);
    const form = await page.$('[data-id="form-validation"]');
    const input = await form.$('[data-id="card-input"]');
    await input.type('4111111111111111');
    const button = await page.$('[data-id="form-button"]');
    button.click();
    await page.waitForSelector('[data-id="valid"]');
  });
  test('should be Invalid', async () => {
    await page.goto(baseUrl);
    const form = await page.$('[data-id="form-validation"]');
    const input = await form.$('[data-id="card-input"]');
    await input.type('4286550011117820');
    const button = await page.$('[data-id="form-button"]');
    button.click();
    await page.waitForSelector('[data-id="invalid"]');
  });
});

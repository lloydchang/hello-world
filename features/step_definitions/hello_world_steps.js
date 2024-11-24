const { Given, When, Then } = require('@cucumber/cucumber');
const { chromium } = require('playwright');

let browser;
let page;

Given('I am on the home page', async function () {
  browser = await chromium.launch();
  page = await browser.newPage();
  await page.goto('http://localhost:3000'); // **REPLACE with your application URL**
});

When('I click the "Hello World" button', async function () {
  await page.click('#hello-world-button'); // **REPLACE with your button selector**
});

Then('I should see "Hello, World!"', async function () {
  const text = await page.textContent('#hello-world-display'); // **REPLACE with your display selector**
  expect(text).toBe('Hello, World!');
});

After(async function () {
  await browser.close();
});

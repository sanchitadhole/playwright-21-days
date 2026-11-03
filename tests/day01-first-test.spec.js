// what is playwright-
// In technology and software development, 
// Playwright is a free, open-source automation framework created by Microsoft.

//Project setup

// npm init playwright@latest
const { test, expect } = require('@playwright/test');

test('My first Playwright test', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await expect(page).toHaveTitle(/Playwright/);
});

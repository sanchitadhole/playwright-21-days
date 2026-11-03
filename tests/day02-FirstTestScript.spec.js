// @ts-check
import { test, expect } from '@playwright/test';
test("My first playwright test", async ({ page }) => {
  await page.goto("https://playwright.dev/");
  await expect(page).toHaveTitle(
    "Fast and reliable end-to-end testing for modern web apps | Playwright",
  );
});

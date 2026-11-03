// Locators are the central piece of Playwright's auto-waiting and retry-ability.
// In a nutshell,
// locators represent a way to find element(s) on the page at any moment.

// Locators

import { test, expect } from "@playwright/test";

test("Playwright special locators", async ({ page }) => {
  await page.goto("https://rahulshettyacademy.com/angularpractice/");

  // toHaveTitle()
  await expect(page).toHaveTitle("ProtoCommerce");

  //   getByLabel() ---text is in lable tag
  await page.getByLabel("Check me out if you Love IceCreams!").click();
  await page.getByLabel("Employed").check();
  await page.getByLabel("Gender").selectOption("Female");

  // getByPlaceholder()
  await page.getByPlaceholder("Password").fill("abc123");

  //getByRole()
  await page.getByRole("button", { name: "Submit" }).click();
  await page.getByRole("link", { name: "Shop" }).click();

  //getByText()
  await page
    .getByText("Success! The Form has been submitted successfully!.")
    .isVisible();

  getByTitle();
});

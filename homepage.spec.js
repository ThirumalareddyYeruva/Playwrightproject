const { test, expect } = require('@playwright/test');

test('homepage title', async ({ page }) => {
  await page.goto('https://www.opencart.com/index.php?route=cms/demo');

  // option A: get title and log it
  const title = await page.title();
  console.log('the page title is', title);

  // option B: assert title using Playwright's expect
  //await expect(page).toHaveTitle(/OpenCart/i);
});

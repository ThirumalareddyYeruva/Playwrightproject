import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  // Login
  await page.goto('https://demoblaze.com/');

  await page.locator('#login2').click();
  await page.locator('#loginusername').fill('Thirumala');
  await page.locator('#loginpassword').fill('Swaraj7352');
  await page.locator("//button[@onclick='logIn()']").click();

  // wait until login completes
  //await page.waitForSelector('#logout2');
});

test('hooks1', async ({ page }) => {
  const phones = await page.$$("//div[@class='col-lg-4 col-md-6 mb-4']");
  await expect(phones).toHaveLength(9);
});

test('hooks2', async ({ page }) => {

  // Dialog handler MUST be before the action
  page.on('dialog', async dialog => {
    await dialog.accept();
  });

  await page.locator("//a[normalize-space()='Samsung galaxy s6']").click();
  await page.locator("//a[@class='btn btn-success btn-lg']").click();
});

test.afterEach(async ({ page }) => {
  await page.locator('#logout2').click();
  await page.waitForTimeout(3000);
});

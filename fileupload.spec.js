import { test, expect } from '@playwright/test';

test.skip('single file uploading', async ({ page }) => {
  await page.goto('https://practice-automation.com/file-upload/');

  const fileInput = page.locator('#file-upload');

  await fileInput.setInputFiles('tests/uploadingfiles/file1.txt');

  await page.waitForTimeout(5000);
});

test('Mutiple file uploading', async ({ page }) => {
  await page.goto('https://testautomationpractice.blogspot.com/');

  const fileInput = page.locator('#multipleFilesInput');

  await fileInput.setInputFiles(['tests/uploadingfiles/file1.txt','tests/uploadingfiles/file2.txt']);

  await page.waitForTimeout(5000);
  //remmoving the files
  await fileInput.setInputFiles([]);
  await page.waitForTimeout(6000);
});
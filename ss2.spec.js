import{test,expect} from '@playwright/test'
test("ss2",async ({ page }) => {

  await page.goto('https://demoblaze.com/');

  await page.locator('#login2').click();
  await page.locator('#loginusername').fill('Thirumala');
  await page.locator('#loginpassword').fill('Swaraj7352');
  await page.locator("//button[@onclick='logIn()']").click();


});
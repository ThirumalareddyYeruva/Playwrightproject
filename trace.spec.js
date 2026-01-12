import{test,expect} from '@playwright/test'
test("ss2",async ({ page }) => {

  await page.goto('https://demoblaze.com/');

  await page.locator('#login2').click();
  await page.locator('#loginusername').fill('mine');
  await page.locator('#loginpasswordll').fill('Swaraj7352ww');
  await page.locator("//button[@onclick='logIn()']").click();


});
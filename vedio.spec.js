import{test,expect} from '@playwright/test'
import { HomePage } from '../pages/HomePage';
test("ss2",async ({ page }) => {

  await page.goto('https://demoblaze.com/');

  await page.locator('#login2').click();
  await page.locator('#loginusername').fill('ns200');
  await page.locator('#loginpassword').fill('ns200child');
  await page.locator("//button[@onclick='logIn()']").click();
  await page.waitForTimeout(5000)
  const addproduct=new HomePage(page);
    await addproduct.adding('Nexus 6');
    await page.waitForTimeout(5000)

    await addproduct.gotocaart();


});
//const {tests, expect}= require('@playwright/tests');
import{test, expect} from '@playwright/test';

test('Locators',async({page})=>{
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    const user_name= page.locator("//input[@name='username']");
    await user_name.fill("Admin");
    const password=page.locator("//input[@placeholder='Password']");
    await password.fill('admin123');
    const login_btn=page.locator("//button[@type='submit']");
    await login_btn.click();
    const pim=page.locator("//li[1]//a[1]//span[1]");
    await expect(pim).toBeVisible();


})

import{test , expect} from '@playwright/test';
test("builtin_locators",async({page})=>{
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    const logo= await page.getByAltText('company-branding');
    await expect(logo).toBeVisible();
    const username= page.getByPlaceholder('Username');
    await username.fill("Admin");
    const password=page.getByPlaceholder('Password');
    await password.fill("admin123");


})
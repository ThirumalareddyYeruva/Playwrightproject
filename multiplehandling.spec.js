import{test,expect, chromium} from '@playwright/test'
test("hanling the multiple pages",async()=>{
    const browser=await chromium.launch();
    const context=await browser.newContext();
    //creating single page
    const page1=await context.newPage();
    await page1.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    //before going to click create a event 
    const pagePromise=context.waitForEvent('page')
    await page1.locator("//a[normalize-space()='OrangeHRM, Inc']").click()
    const newpage=await pagePromise;
    await expect(newpage).toHaveTitle("Human Resources Management Software | HRMS | OrangeHRM")
})
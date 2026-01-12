import{test , expect} from '@playwright/test'
test("hidden dropdown",async({page})=>{
   
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    await page.locator("//input[@placeholder='Username']").fill("Admin")
    await page.locator("//input[@placeholder='Password']").fill('admin123')
    await page.locator("//button[@type='submit']").click()
    await page.locator("//a[normalize-space()='']").click()
    await page.locator("//div[@class='oxd-select-text oxd-select-text--focus']//div[@class='oxd-select-text-input'][normalize-space()='-- Select --']").click()
    await page.waitForTimeout(5000)
    const options= await page.$$("//div[@role='listbox']//span")
    for(const option of options){
        const title=await option.textContent()
        console.log(title)
        if(titile.includes('QA Engineer')){

            await option.click();
            break;
        }

    }




})
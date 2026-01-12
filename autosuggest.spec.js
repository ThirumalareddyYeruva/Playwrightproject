import{test,expect} from '@playwright/test'
test("auto suggest dropdown",async({page})=>{
    await page.goto("https://www.redbus.in/")
    const inputbox=await page.locator('#srcinput')
    await inputbox.fill("kan")
    await page.waitForTimeout(5000)
    const autooptions=await page.$$("//div[@role='option']//div[contains(@aria-label,'Kan')]")
    for(const option of autooptions){
        const value=option.textContent()
        if(value.includes('Kanigiri')){
            await option.click()
            break;
        }
    }




})
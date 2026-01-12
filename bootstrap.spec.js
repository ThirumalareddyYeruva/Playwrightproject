import{test,expect} from '@playwright/test'
test("bootstrapdropdown",async({page})=>{

    await page.goto("https://seleniumpractise.blogspot.com/2016/08/bootstrap-dropdown-example-for-selenium.html")
    const bootstaps= await page.locator("#menu1")
    await bootstaps.click()
     await page.waitForTimeout(5000)
    const options=await page.locator("//a[@role='menuitem']")
    const count= options.count()

    for(let i=0;i<=count;i++){
        const option=options.nth(i)
        const value=option.textContent()
        if(value.includes("HTML")){
            await option.click()
        }


    }
    //await page.waitForTimeout(5000)


})
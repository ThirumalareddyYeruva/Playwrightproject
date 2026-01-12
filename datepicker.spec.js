import{test,expect} from '@playwright/test'
test("Datepickers",async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/")
    const year=2027
    const month='May'
    const date=20
    await page.locator("//input[@id='datepicker']").click()
    while(true){
        const currentmonth=await page.locator("//span[@class='ui-datepicker-month']").textContent()
        const currentyear=await page.locator("//span[@class='ui-datepicker-year']").textContent()
        if(currentmonth==month && currentyear==year){
            break;
        }
        await page.locator("//span[@class='ui-icon ui-icon-circle-triangle-e']").click()
    }
    await page.waitForTimeout(5000)
    const alldates=await page.$$("a.ui-state-default")
    for(const mydate of alldates){
        if(await mydate.textContent()==date){
            await mydate.click()
            break;
        }
    }
    await page.waitForTimeout(5000)
   
})
import{test,expect} from '@playwright/test'
test("mouseoveractions",async({page})=>{

    await page.goto("https://vinothqaacademy.com/mouse-event/")
    const maindrop=await page.locator("//div[@class='collapse navbar-collapse pull-right']//a[contains(text(),'Free Complete QA Video Courses')]")
    const subdrop=await page.locator("//div[@class='collapse navbar-collapse pull-right']//a[normalize-space()='Cypress Automation']")

    //mouse over
    await maindrop.hover()
    await subdrop.hover()
    await page.waitForTimeout(5000)
})
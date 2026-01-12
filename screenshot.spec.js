import{test,expect} from '@playwright/test'
test("pageScreensho",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");
    await page.waitForTimeout(5000)
    await page.screenshot({path:'tests/screenshots/'+Date.now()+'homepage.png'})

})
test("fullScreenshot",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")
    await page.waitForTimeout(5000)
    await page.screenshot({path:'tests/screenshots/'+Date.now()+'fullpage.png',fullPage:true})

})
test("seperate elemrnt",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")
    await page.waitForTimeout(5000)
    await page.locator(".form-check-label").screenshot({path:'tests/screenshots/'+Date.now()+'element.png'})
})
test.only("mutlple Elemnets",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")
    await page.waitForTimeout(5000)
    const multiple=await page.locator(".form-check-label")
    const count=await multiple.count()
    for(let i=0;i<count;i++){
        const element =await multiple.nth(i)
        await element.screenshot({path:`tests/screenshots/element${i+1}.png`})
    }
})
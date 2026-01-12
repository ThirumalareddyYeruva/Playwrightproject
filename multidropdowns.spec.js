import{test,expect} from '@playwright/test'
test("mutlpledropdownsselecting",async({page})=>{


    await page.goto("https://testautomationpractice.blogspot.com/")
    const options=await page.$("#colors")
    await options.selectOption(['Red','Blue','Green'])
    await page.waitForTimeout(5000)
})

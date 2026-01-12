import{test ,expect} from '@playwright/test'
test("handlng iframes",async({page})=>{

    await page.goto("https://demo.automationtesting.in/Frames.html")
    
    //Using the name of the frame
    //const frame=await page.frame({ name: 'SingleFrame' })
    await frame.locator("//input[@type='text']").fill("thrimalala")
    await page.waitForTimeout(5000)


})
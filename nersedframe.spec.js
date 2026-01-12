import{test ,expect} from '@playwright/test'
test("handlng iframes",async({page})=>{

    await page.goto("http://demo.automationtesting.in/Frames.html")
    const mainframe= await page.frame({url:'https://demo.automationtesting.in/MultipleFrames.html'})
    const Childframe=mainframe.childFrames();
    const text =await Childframe[0].locator("//input[@type='text']")
    await text.fill("thirumalalla")
    await page.waitForTimeout(5000)

})
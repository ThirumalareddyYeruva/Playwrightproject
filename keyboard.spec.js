import{test,expect} from '@playwright/test'
test("keybord actions",async({page})=>{

    await page.goto("https://gotranscript.com/text-compare")
    const firstbox=await page.locator("//textarea[@placeholder='Paste one version of the text here.']")
    firstbox.fill("this is the case")
    //selscting the text
    await page.keyboard.press('Control+A')
    //coping the test cntrl+c
    await page.keyboard.press('Control+C')
    //switching the box
    await page.keyboard.down('Tab')
    await page.keyboard.up('Tab')
    // pasting the text
    await page.keyboard.press('Control+P')
    await page.waitForTimeout(5000)

})
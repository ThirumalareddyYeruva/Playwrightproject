import{test ,expect} from '@playwright/test'
test.skip("handling alerts",async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/');
    //const simplealert= await page.locator("//button[@id='alertBtn']");
    //await simplealert.click()
    //enabling the alret window
    page.on('dialog',async dialog=>{
        expect(dialog.type()).toContain('alert');
        await dialog.accept()

    })
    const simplealert= await page.locator("//button[@id='alertBtn']");
    await simplealert.click()
    await page.waitForTimeout(5000)

})
test.skip("handling conformation alert",async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/');
    
    page.on('dialog',async dialog=>{
        expect(dialog.type()).toContain('confirm');
        expect(dialog.message()).toContain('Press a button!')
        await dialog.dismiss()

    })
    await page.click("//button[@id='confirmBtn']")
    await expect(page.locator("//p[@id='demo']")).toHaveText("You pressed Cancel!")
    await page.waitForTimeout(5000)

})

test("handling promt alert",async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/');
     await page.click("//button[@id='promptBtn']")
    
    const dialog=await page.waitForEvent('dialog')
    await expect(dialog.type()).toContain('prompt')
    await expect(dialog.defaultValue()).toContain('Harry Potter')
    await dialog.accept('Harry Potter')


    //await page.click("//button[@id='promptBtn']")
    await page.waitForTimeout(5000)
    await expect(page.locator("//p[@id='demo']")).toHaveText("Hello Harry Potter! How are you today?")
    //await page.waitForTimeout(5000)

})



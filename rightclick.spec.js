import{test,expect} from '@playwright/test'
test.skip("rightclick",async({page})=>{
    await page.goto("https://vinothqaacademy.com/mouse-event/")
    const rightclicking=await page.locator("#rightclick")
    await rightclicking.click({button:'right'})
    await page.waitForTimeout(5000)
})

test.skip("doubleclick",async({page})=>{
    await page.goto("https://vinothqaacademy.com/mouse-event/")
    const rightclicking=await page.locator("//button[@id='dblclick']")
    await rightclicking.dblclick()
    await page.waitForTimeout(5000)
})

test("drand and drop ",async({page})=>{
    await page.goto("https://vinothqaacademy.com/mouse-event/")
    const source=await page.locator("//div[@id='draggableElement']")
    const target=await page.locator("//div[@id='droppableElement']")
    //aproch1
   /* await source.hover()
    await page.mouse.down()
    await target.hover()
    await page.mouse.up()
    await page.waitForTimeout(5000)*/
    //approch2
    await source.dragTo(target)

   
})


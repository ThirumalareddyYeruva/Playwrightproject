import{test , expect} from '@playwright/test'
test("dropsdowns",async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/')
   // const dropdowns=await page.locator("//select[@id='country']")
   // await dropdowns.selectOption("Canada")
    //assertions
    const options= await page.$$('#country option')
    /*const nooptions=await options.count();
    console.log("no of options",nooptions)
    await expect(options).toHaveCount(10)*/
    for(const eachoption of options){
        const value=await eachoption.getAttribute("value");
        if(value=="china"){
            await page.selectOption('#country', value);
            break;
        }
    }


   await page.waitForTimeout(5000)
})
import{test , expect} from '@playwright/test';

test("softassetiond",async({page})=>{
    //hard assertions

    page.goto("https://demoblaze.com/")
    await expect(page).toHaveTitle('STORE');
   await expect(page).toHaveURL('https://demoblaze.com/')
   //soft assertions
   
   /* page.goto("https://demoblaze.com/")
    await expect.soft(page).toHaveTitle('STOefrw');
   await expect(page).toHaveURL('https://demoblaze.com/')*/


})

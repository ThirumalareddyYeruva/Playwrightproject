import{test, expect} from '@playwright/test';
test("locatingmutlipleelements",async({page})=>{
    await page.goto("https://demoblaze.com/");
    const links= await page.$$('//a');
    for(const eachlink of links){
    
        const linktext= await eachlink.textContent();
        console.log(linktext);

    }


})
import{test , expect} from '@playwright/test';
test("checkboxs",async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/")
    //Selecting single checkboxes
    /*const singlecheckbox =await page.locator("//input[@type='checkbox' and @id='sunday']")
    await singlecheckbox.click();
    await  page.waitForTimeout(5000);*/

    //selecting the multiple checkboxs
   const multipleCheckboxes = await page.$$("//input[@type='checkbox' and @class='form-check-input']");

for (const checkbox of multipleCheckboxes) {
   
    const id=await checkbox.getAttribute("id")
    if(id=="sunday"){
        continue;
    }
     await checkbox.click();

    
}
    await page.waitForTimeout(5000)

        

})
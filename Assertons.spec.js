import{test,expect} from '@playwright/test';
test("assertions",async({page})=>{

   await page.goto('https://practice.expandtesting.com/');
   //checking the url 
   await expect(page).toHaveURL('https://practice.expandtesting.com/');
   //
   await page.goto('https://practice.expandtesting.com/checkboxes');
   const checkbox=page.locator("//input[@id='checkbox1']");
    await checkbox.waitFor();    
   await  checkbox.click();
   await expect(checkbox).toBeChecked();
   //toHaveAttribute    
   await expect(checkbox).toHaveAttribute('type','checkbox');
   //toHavetect
   const textbox=await page.locator("//label[@for='checkbox2']");
   await textbox.textContent();
   await textbox.toHaveText('Checkbox 2');       

})

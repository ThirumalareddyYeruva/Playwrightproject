import{test , expect} from "@playwright/test"
import { LoginPage } from "../pages/LoginPage";
import { HomePage } from "../pages/HomePage";
import { cartPage } from "../pages/cart";

test("loginpagewithpom",async({page})=>{
    //login
    //first of for using the class we need to create a object
    const login =new LoginPage(page);
    await login.openwebsite();
    await login.login('ns200','ns200child');
    await page.waitForTimeout(5000)
    //Add to cart
    const addproduct=new HomePage(page);
    await addproduct.adding('Nexus 6');
    await page.waitForTimeout(5000)

    await addproduct.gotocaart();
    //deleting the cart
    await page.waitForTimeout(5000)
    const cartitem=new cartPage(page);
    await cartitem.viewproduct("Nexus 6")
    


})
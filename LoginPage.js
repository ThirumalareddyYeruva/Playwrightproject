exports.LoginPage=
class LoginPage{
    constructor(page){
        this.page=page;
        this.loginelement="#login2"
        this.username="#loginusername"
        this.password="#loginpassword"
        this.loginbutton="//button[@class='btn btn-primary' and @onclick='logIn()']"
    }
    //methods with actions
    async openwebsite(){
        await this.page.goto("https://www.demoblaze.com/")

    }

    async login(username,password){
        await this.page.locator(this.loginelement).click()
        await this.page.locator(this.username).fill(username)
        await this.page.locator(this.password).fill(password)
        await this.page.locator(this.loginbutton).click()
        
        //await this.page.locator("#logInModal").waitFor({ state: "hidden" });
    }
}
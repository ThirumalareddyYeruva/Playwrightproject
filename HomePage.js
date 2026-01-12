exports.HomePage =
class HomePage {

    constructor(page) {
        this.page = page;
        this.allproducts = "//a[@class='hrefch']";
        this.addtocart = "//a[@class='btn btn-success btn-lg']";
        this.addcart = "#cartur";
    }

    async adding(productName) {

        // handle alert only once
        this.page.once("dialog", async dialog => {
            if (dialog.message().includes("added")) {
                await dialog.accept();
            }
        });

        const products = await this.page.$$(this.allproducts);

        for (const product of products) {
            const text = await product.textContent();
            if (text === productName) {
                await product.click();
                break;
            }
        }

        // wait until product details page is opened
        //await this.page.waitForURL("**/prod.html**");

        // now add to cart button will exist
        //await this.page.locator(this.addtocart).waitFor({ state: "visible" });
        await this.page.locator(this.addtocart).click();
    }

    async gotocaart() {
        await this.page.locator(this.addcart).click();
    }
};

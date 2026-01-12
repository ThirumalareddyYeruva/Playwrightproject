exports.cartPage=
class cartPage{
    constructor(page){
        this.page=page;
        this.noofproducts='.success'
    }
    async viewproduct(productName){
        const list=await this.page.$$(".success")
        for(const item of list){
            const name=await item.textContent();
            if(name===productName){
                return true
                break;
            }
        }
    }
}
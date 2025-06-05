import { LoginPage } from "./LoginPage";
import { CartPage} from "./CartPage";
import { ProductsPage} from "./ProductsPage";
import { CheckOutPage} from "./CheckOutPage.page";
import { Page } from "@playwright/test";

export class POManager{
    page:Page;
    loginPage:LoginPage;
    cartPage:CartPage;
    productPage:ProductsPage;
    checkOutPage:CheckOutPage;

    constructor(page:Page){
        this.page=page;
        this.loginPage=new LoginPage(this.page);
        this.cartPage=new CartPage(this.page);
        this.productPage=new ProductsPage(this.page);
        this.checkOutPage=new CheckOutPage(this.page);
    }

    getLoginPage(){
        return this.loginPage;
    }

    getCartPage(){
        return this.cartPage;
    }

    getProductPage(){
        return this.productPage;
    }

    getCheckoutPage(){
        return this.checkOutPage;
    }

}
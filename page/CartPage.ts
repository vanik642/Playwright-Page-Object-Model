import {Page,Locator} from '@playwright/test';

export class CartPage{
     page:Page;
     pageTitle:Locator;
     itemName:Locator;
     itemPrice:Locator;
     checkoutButton:Locator;
     firstName:Locator;
     lastName:Locator;
     zipCode:Locator;
     continueButton:Locator;
    constructor(page: Page) {
        this.page = page;
        this.pageTitle=page.locator('#user-name')
        this.itemName=page.locator('.inventory_item_name')
        this.itemPrice=page.locator('.inventory_item_price')
        this.checkoutButton=page.locator('#checkout')
        this.firstName=page.getByPlaceholder('First Name')
        this.lastName=page.getByPlaceholder('Last Name')
        this.zipCode=page.getByPlaceholder('Zip/Postal Code')
        this.continueButton=page.locator('#continue')

    
      }
      get getPageTitle(){
        return this.pageTitle.textContent();
      }

      get getItemName() {
        return this.itemName.textContent();
    }


    get getItemPrice() {
        return this.itemPrice.textContent();
    }

    async removeItem(product: String) {
        await this.page.locator("button[data-test*='" + product + "']").click();
    }

    async navigateToCheckoutPage(){
        await this.checkoutButton.click();
    }
    async fillCheckoutInformation(firstName:string,lastName:string,pincode:number){
            await this.firstName.fill(firstName);
            await this.lastName.fill(lastName);
            await this.zipCode.fill(pincode.toString());
            await this.continueButton.click();
           
        }
    

}
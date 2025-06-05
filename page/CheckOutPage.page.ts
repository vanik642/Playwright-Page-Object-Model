import {Page,Locator, expect} from '@playwright/test';

export class CheckOutPage{

 page:Page;
 pageTitle:Locator;
 orderConfirmationText:Locator;
 inventeryTimePrice:Locator;
 finishButton:Locator;

    constructor(page: Page) {
        this.page = page;
        this.orderConfirmationText=page.locator(".complete-header");
        this.pageTitle=page.locator(".title");
        this.inventeryTimePrice=page.locator(".inventory_item_price")
        this.finishButton=page.locator("#finish")
      }

      get getPageTitle(){
        return this.pageTitle.textContent();
      }

      get getItemPrice(){
        return this.inventeryTimePrice.first().textContent();
      }
      
      async FinishAndGetOrderSuccessfulmsg(){
       await this.finishButton.click();
        await this.orderConfirmationText.textContent();
        await expect(this.orderConfirmationText).toHaveText("Thank you for your order!");
      }

       
}
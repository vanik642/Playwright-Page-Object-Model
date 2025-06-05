import { test, expect } from '@playwright/test';
import { POManager } from '../page/POManager';
import usersData from '../utils/credentials.json';
test.describe('Login Feature Test for All User Types and Add Item to Cart', () => {
  const credentials = Object.entries(usersData);
  let pomManager: POManager;
  for (const [userType, creds] of credentials) {
    test(`Login and E2E functionality ${userType}`, async ({ browser }) => {

      const context = await browser.newContext();
      const page = await context.newPage();
      pomManager = new POManager(page); const loginPage = pomManager.getLoginPage();
      await loginPage.goTo();
      await loginPage.validLogin(creds.username, creds.password);

      const productPage = pomManager.getProductPage();
      expect(await productPage.getPageTitle).toBe("Swag Labs");
      const itemPrice = await productPage.addtoCartandgetItemPrice('Sauce Labs Bolt T-Shirt');
      await productPage.navigateToCart();

      const cartPage = pomManager.getCartPage();
      await cartPage.navigateToCheckoutPage();
      await cartPage.fillCheckoutInformation("Tom", "Harry", 76788)

      const checkoutPage = pomManager.getCheckoutPage();
      const checkOutItemPrice = await checkoutPage.getItemPrice;
      expect(itemPrice).toBe(checkOutItemPrice)
      if (itemPrice == checkOutItemPrice) {
        await checkoutPage.FinishAndGetOrderSuccessfulmsg();
      }
      await pomManager.page.close();
      });
 }
});
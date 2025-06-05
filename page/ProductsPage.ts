import { Page, Locator } from '@playwright/test'

export class ProductsPage {

  page: Page;
  cartInventeryDescription: Locator;
  cart: Locator;
  cartBadge:Locator;

  constructor(page: Page) {
    this.page = page;
    this.cartInventeryDescription = page.locator('[data-test="inventory-item-description"]');
    this.cart = page.locator("#shopping_cart_container");
    this.cartBadge=page.locator(".shopping_cart_badge");
  }

  get getPageTitle() {
    return this.page.title();
  }


  async addtoCartandgetItemPrice(productName: string): Promise<string | null> {
    const countOfProducts = await this.cartInventeryDescription.count();
    for (let i = 0; i < countOfProducts; i++) {
      const name = await this.cartInventeryDescription.nth(i).locator('[data-test="inventory-item-name"]').textContent();
      const price = await this.cartInventeryDescription.nth(i).locator('[data-test="inventory-item-price"]').textContent();
      if (name == productName) {
        await this.cartInventeryDescription.nth(i).locator('[data-test*="add-to-cart-"]').click();
        return price || null;
      }

    }
    return null;

  }

  async navigateToCart() {
    await this.cart.click();
  }
  async isAddedToCart() {
    return this.cartBadge.isEnabled();
  }

  async getCartItemsAmount() {
    return this.cartBadge.textContent();
  }
}
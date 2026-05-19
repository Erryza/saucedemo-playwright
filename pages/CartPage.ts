import { Locator, Page, expect } from '@playwright/test';

export class CartPage {
    // * locators
    readonly productNames: Locator;
    readonly checkoutButton: Locator;

    constructor(private readonly page: Page) {
        this.productNames = page.locator('.inventory_item_name');
        this.checkoutButton = page.locator('#checkout');
    }

    // * verify product exists in cart
    async verifyProduct(product: string) {
        await expect(this.productNames).toContainText(product);
    }

    // * proceed checkout
    async checkout() {
        await this.checkoutButton.click();
    }
}
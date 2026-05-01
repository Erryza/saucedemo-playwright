import { Page, expect } from '@playwright/test';

export class CartPage {
    constructor(private page: Page) {}

    async verifyProduct(product: string) {
        await expect(this.page.locator('.inventory_item_name'))
        .toContainText(product);
    }

    async checkout() {
        await this.page.click('#checkout');
    }
}
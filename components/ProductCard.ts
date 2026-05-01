import { Page } from '@playwright/test';

export class ProductCard {
    constructor(private page: Page) {}

    async addToCart(productName: string) {
        const locator = this.page.locator(`.inventory_item:has-text("${productName}")`);
        await locator.locator('button').click();
    }
}
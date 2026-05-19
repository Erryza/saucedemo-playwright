import { Locator, Page } from '@playwright/test';

export class ProductCard {
    constructor(private readonly page: Page) {}

    // * get product card locator
    getProductCard(productName: string): Locator {
        return this.page
            .locator('.inventory_item')
            .filter({hasText: productName});
    }

    // * add product to cart
    async addToCart(productName: string) {
        const locator = this.page
            .locator(`.inventory_item:has-text("${productName}")`);
        await locator.locator('button').click();
    }

    // * remove product from cart
    async removeFromCart(productName: string) {
        const product = this.getProductCard(productName);

        await product.locator('button').click();
    }

    // * get product price
    async getProductPrice(productName: string) {
        const product = this.getProductCard(productName);

        return await product
            .locator('.inventory_item_price')
            .textContent();
    }

    // * get product description
    async getProductDescription(productName: string) {
        const product = this.getProductCard(productName);

        return await product
            .locator('.inventory_item_desc')
            .textContent();
    }
}
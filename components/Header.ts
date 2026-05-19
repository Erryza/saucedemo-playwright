import { Locator, Page } from '@playwright/test';

export class Header {
    // *  locators
    readonly cartIcon: Locator;

    constructor(private readonly page: Page) {
        this.cartIcon = page.locator('.shopping_cart_link');
    }

    // * navigate to cartt page
    async goToCart() {
        await this.cartIcon.click();
    }
}
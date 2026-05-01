import { Page } from '@playwright/test';

export class Header {
    constructor(private page: Page) {}

    cartIcon = '.shopping_cart_link';

    async goToCart() {
        await this.page.click(this.cartIcon);
    }
}
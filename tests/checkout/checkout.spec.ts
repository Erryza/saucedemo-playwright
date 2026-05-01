import { expect } from '@playwright/test';
import { test } from '../../fixtures/userFixture.js';
import { InventoryPage } from '../../pages/InventoryPage.js';
import { CartPage } from '../../pages/CartPage.js';
import { CheckoutPage } from '../../pages/CheckoutPage.js';

test('Complete checkout flow', async ({ loggedInPage }) => {
    const inventory = new InventoryPage(loggedInPage);
    const product = 'Sauce Labs Backpack';

    await inventory.product.addToCart(product);
    await inventory.header.goToCart();

    const cart = new CartPage(loggedInPage);
    await cart.verifyProduct(product);
    await cart.checkout();

    const checkout = new CheckoutPage(loggedInPage);
    await checkout.fillInformation('John', 'Doe', '12345');
    await checkout.finish();

    await expect(loggedInPage).toHaveURL(/checkout-complete/);
});
import { test } from '../../fixtures/userFixture.js';
import { CartPage } from '../../pages/CartPage.js';
import { InventoryPage } from '../../pages/InventoryPage.js';
import { CheckoutPage } from '../../pages/CheckoutPage.js';

test.describe('Checkout Feature', () => {
    test('@smoke @checkout Complete checkout flow', async ({loggedInPage}) => {
        const inventoryPage = new InventoryPage(loggedInPage);
        const cartPage = new CartPage(loggedInPage);
        const checkoutPage = new CheckoutPage(loggedInPage);
        const productName = 'Sauce Labs Backpack';
        await test.step('Add product to cart', async () => {
            await inventoryPage.product.addToCart(productName);
        });

        await test.step('Navigate to cart', async () => {
            await inventoryPage.header.goToCart();
        });

        await test.step('Verify product inside cart', async () => {
            await cartPage.verifyProduct(productName);
        });

        await test.step('Proceed checkout', async () => {
            await cartPage.checkout();
        });

        await test.step('Fill checkout information', async () => {
            await checkoutPage.fillInformation({
                firstName: 'John',
                lastName: 'Doe',
                postalCode: '12345'
            });
        });

        await test.step('Finish checkout', async () => {
            await checkoutPage.finish();
        });

        await test.step('Verify checkout success', async () => {
            await checkoutPage.verifyCheckoutSuccess();
        });
    });
});


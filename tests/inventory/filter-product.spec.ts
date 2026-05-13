import { test } from '../../fixtures/userFixture.js';
import { InventoryPage } from '../../pages/InventoryPage.js';

test.describe('Product Filter', () => {

test('Sort product A-Z', async ({ loggedInPage }) => {
    const inventory = new InventoryPage(loggedInPage);

    await inventory.filter.selectFilter(
        inventory.filter.filterOptions.AZ
    );

    await inventory.filter.verifyAscendingSort();
});

test('Sort product Z-A', async ({ loggedInPage }) => {
    const inventory = new InventoryPage(loggedInPage);

    await inventory.filter.selectFilter(
        inventory.filter.filterOptions.ZA
    );

    await inventory.filter.verifyDescendingSort();
});

test('Sort price low-high', async ({ loggedInPage }) => {
    const inventory = new InventoryPage(loggedInPage);

    await inventory.filter.selectFilter(
        inventory.filter.filterOptions.LOW_HIGH
    );

    await inventory.filter.verifyLowToHigh();
});

test('Sort price high-low', async ({ loggedInPage }) => {
    const inventory = new InventoryPage(loggedInPage);

    await inventory.filter.selectFilter(
        inventory.filter.filterOptions.HIGH_LOW
    );

    await inventory.filter.verifyHighToLow();
});
});
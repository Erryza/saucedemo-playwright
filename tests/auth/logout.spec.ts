import { test } from '../../fixtures/userFixture.js';
import { InventoryPage } from '../../pages/InventoryPage.js';

test.describe('Logout Feature', () => {

    test('User successfully logout', async ({ loggedInPage }) => {
        const inventoryPage = new InventoryPage(loggedInPage);
        await inventoryPage.logout.logout();
        await inventoryPage.logout.verifyLogoutSuccess();
    });

});
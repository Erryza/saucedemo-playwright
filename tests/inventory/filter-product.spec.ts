import { test } from '../../fixtures/userFixture.js';
import { InventoryPage } from '../../pages/InventoryPage.js';
import { filterScenarios } from '../../fixtures/filterData.js';

test.describe('Product Filter', () => {
    for (const scenario of filterScenarios) {
        test(scenario.title, async ({loggedInPage}) => {
            const inventoryPage =new InventoryPage(loggedInPage);
            await test.step('Select filter option', async () => {
                await inventoryPage.filter.selectFilter(
                    inventoryPage.filter.filterOptions[scenario.option]
                    );
                }
            );

            await test.step('Verify filter result', async () => {
                await inventoryPage.filter[
                    scenario.verification
                    ]();
                }
            );
        });
    }
});
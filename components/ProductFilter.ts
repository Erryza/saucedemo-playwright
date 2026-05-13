import { Page, expect } from "@playwright/test";

export class ProductFilter {
    constructor(private page: Page) {}
        // * locator dropdown filter
        filterDropdown = '.product_sort_container';

        // * enum option
        filterOptions = {
            AZ: 'az',
            ZA: 'za',
            LOW_HIGH: 'lohi',
            HIGH_LOW: 'hilo'
        };

        // * select filter
        async selectFilter(option: string) {
            await this.page.selectOption(this.filterDropdown, option);
        }
        
        
        async getProductNames(): Promise<string[]> {
            return await this.page
            .locator('.inventory_item_name')
            .allTextContents();
        }

        // * verify ascending sort
        async verifyAscendingSort() {
            const actual = await this.getProductNames();

            const expected = [...actual].sort((a,b) => a.localeCompare(b));

            expect(actual).toEqual(expected);
        }

        // * verify descending sort
        async verifyDescendingSort() {
            const actual = await this.getProductNames();

            const expected = [...actual].sort((a,b) => b.localeCompare(a));

            expect(actual).toEqual(expected);
        }

        // * get all prices
        async getPrices(): Promise<number[]> {
            const prices = await this.page
            .locator('.inventory _item_price')
            .allTextContents();

            return prices.map(price =>
                Number(price.replace('$', ''))
            );
        }

        // * verify low to high
        async verifyLowToHigh() {
            const actual = await this.getPrices();

            const expected = [...actual]. sort((a, b) => a - b);

            expect(actual).toEqual(expected);
        }

        // * verify high to low
        async verifyHighToLow() {
            const actual = await this.getPrices();

            const expected = [...actual].sort((a, b) => b - a);

            expect(actual).toEqual(expected);
        }
}
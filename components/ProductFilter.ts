import { Locator, Page, expect } from "@playwright/test";

export class ProductFilter {
    // * locators
    readonly filterDropdown: Locator;
    readonly productNames: Locator;
    readonly productPrices: Locator;

    // * enum-like readonly object
    readonly filterOptions = {
        AZ: 'az',
        ZA: 'za',
        LOW_HIGH: 'lohi',
        HIGH_LOW: 'hilo'
    } as const;

    constructor(private readonly page: Page) {
        this.filterDropdown = page.locator('.product_sort_container');
        this.productNames = page.locator('.inventory_item_name');
        this.productPrices = page.locator('.inventory_item_price');
    }

        // * select filter option
        async selectFilter(option: string) {
            await this.filterDropdown.selectOption(option);
        }
        
        // * get all product names
        async getProductNames(): Promise<string[]> {
            return await this.productNames.allTextContents();
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
            const prices = await this.productPrices.allTextContents();

            return prices.map(price =>
                Number(price.replace('$', ''))
            );
        }

        // * verify price low to high
        async verifyLowToHigh() {
            const actual = await this.getPrices();

            const expected = [...actual]. sort((a, b) => a - b);

            expect(actual).toEqual(expected);
        }

        // * verify price high to low
        async verifyHighToLow() {
            const actual = await this.getPrices();

            const expected = [...actual].sort((a, b) => b - a);

            expect(actual).toEqual(expected);
        }
}
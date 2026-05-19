import { Locator, Page, expect } from '@playwright/test';
export class BasePage {
    constructor(protected readonly page: Page) {}
    // * navigate to route
    async visit(path: string) {
        await this.page.goto(path);
    }

    // * click element
    async click(locator: Locator) {
        await locator.click();
    }

    // * fill input field
    async fill(locator: Locator, value: string) {
        await locator.fill(value);
    }

    // * get text content
    async getText(locator: Locator) {
        return await locator.textContent();
    }

    // * wait element visible
    async waitVisible(locator: Locator) {
        await expect(locator).toBeVisible();
    }

    // * wait element hidden
    async waitHidden(locator: Locator) {
        await expect(locator).toBeHidden();
    }

    // *  check element visible
    async isVisible(locator: Locator) {
        return await locator.isVisible();
    }

    // * get current url
    async getCurrentUrl() {
        return this.page.url();
    }

    // * press keyboard key
    async pressKey(locator: Locator, key: string) {
        await locator.press(key);
    }

    // * select dropdown option
    async selectOption(locator: Locator, value: string) {
        await locator.selectOption(value);
    }

    // * hover element
    async hover(locator: Locator) {
        await locator.hover();
    }

    // * double click element
    async doubleClick(locator: Locator) {
        await locator.dblclick();
    }

    // * wait page fully loaded
    async waitPageLoaded() {
        await this.page.waitForLoadState('networkidle');
    }
}
import { Locator, Page, expect } from '@playwright/test';

type CheckoutInformation = {
    firstName: string;
    lastName: string;
    postalCode: string;
};
export class CheckoutPage {
    // * locators
    readonly firstNameInput: Locator;
    readonly lastNameInput: Locator;
    readonly postalCodeInput: Locator;
    readonly continueButton: Locator;
    readonly finishButton: Locator;
    readonly successMessage: Locator;

    constructor(private readonly page: Page) {
        this.firstNameInput = page.locator('#first-name');
        this.lastNameInput = page.locator('#last-name');
        this.postalCodeInput = page.locator('#postal-code');
        this.continueButton = page.locator('#continue');
        this.finishButton = page.locator('#finish');
        this.successMessage = page.locator('.complete-header');
    }

    // * fill checkout information
    async fillInformation(data: CheckoutInformation) {
        await this.firstNameInput.fill(data.firstName);
        await this.lastNameInput.fill(data.lastName);
        await this.postalCodeInput.fill(data.postalCode);
        await this.continueButton.click();
    }

    // * finish checkout
    async finish() {
        await this.finishButton.click();
    }

    // * verify checkout success
    async verifyCheckoutSuccess() {
        await expect(this.successMessage).toContainText('Thank you for your order');
    }
}
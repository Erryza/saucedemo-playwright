import { expect, Locator, Page } from '@playwright/test';
import { BasePage } from './BasePage.js';
import { ROUTES } from '../constants/routes.js';
export class LoginPage extends BasePage {
    // * locators
    readonly usernameInput: Locator;
    readonly passwordInput: Locator;
    readonly loginButton: Locator;
    readonly errorMessage: Locator;

    constructor(page: Page) {
        super(page);

        this.usernameInput = page.locator('#user-name');
        this.passwordInput = page.locator('#password');
        this.loginButton = page.locator('#login-button');
        this.errorMessage = page.locator('[data-test="error"]');
    }

    // * open login page
    async open(){
        await this.visit(ROUTES.LOGIN);
        await this.waitPageLoaded();
    }

    // * perform login
    async login(username: string, password: string) {
        await this.fill(this.usernameInput, username);
        await this.fill(this.passwordInput, password);
        await this.click(this.loginButton);
    }

    // * login as user
    async loginAs(user: {username: string; password: string;}) {
        await this.login(user.username, user.password);
    }

    // * verify login success
    async verifyLoginSuccess(){
        await expect(this.page).toHaveURL(/inventory/);
    }

    // * verify login failed
    async verifyLoginFailed() {
        await expect(this.errorMessage).toBeVisible();
    }
    
    // * get error message text
    async getErrorMessage():Promise<string> {
        return (await this.errorMessage.textContent()) ?? '';
    }
}
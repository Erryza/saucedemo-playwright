import { test as base, Page } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage.js';
import { USERS } from '../constants/user.js';

type MyFixtures = {
    loggedInPage: Page; 
    loginPage: LoginPage;
};

export const test = base.extend<MyFixtures>({
    //  * reusable login page fixture
    loginPage: async ({ page }, use) => {
        const loginPage = new LoginPage(page);
        await use(loginPage);
    },

    // * authenticated page fixture
    loggedInPage: async ({ page }, use) => {
        const loginPage = new LoginPage(page);
        await loginPage.open();
        await loginPage.login(
            USERS.STANDARD.username,
            USERS.STANDARD.password
        );
        await loginPage.verifyLoginSuccess();
        await use(page);
    }
});

export { expect } from '@playwright/test';
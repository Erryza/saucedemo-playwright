import { test as base, Page } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage.js';
import { ENV } from '../utils/env.js';

type MyFixtures = {
    loggedInPage: Page;
};

export const test = base.extend<MyFixtures>({
    loggedInPage: async ({ page }, use) => {
        const login = new LoginPage(page);

        await login.goto(ENV.BASE_URL);
        await login.login(ENV.USER, ENV.PASSWORD);

        await use(page);
    }
});
import { test } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage.js';
import { loginScenarios } from '../../fixtures/auth/loginData.js';

test.describe('Login Feature', () => {
    for (const scenario of loginScenarios) {

    test(scenario.title, async ({ page }) => {
        const loginPage = new LoginPage(page);

        await test.step('Open login page', async () => {
            await loginPage.open();
            }
        );

        await test.step('Perform login', async () => {
            await loginPage.login(
                scenario.username,
                scenario.password
                );
            }
        );

        await test.step('Verify login result', async () => {
            if (scenario.expected === 'success') {
                await loginPage.verifyLoginSuccess();
                return;
            }
                await loginPage.verifyLoginFailed();
            }
        );
    });
    }
});
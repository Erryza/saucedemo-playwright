import { Page, expect } from '@playwright/test';
import { Sidebar } from './Sidebar.js';

export class Logout {
    readonly sidebar: Sidebar;

    constructor(private readonly page: Page) {
        this.sidebar = new Sidebar(page);
    }

    // * perfome logout
    async logout() {
        await this.sidebar.openMenu();
        await this.sidebar.clickLogout();
    }

    // * verify user redirected to login page
    async verifyLogoutSuccess() {
        await expect(this.page).toHaveURL('/');
        await expect(this.page.locator('#login-button')).toBeVisible();
    }
}
import { Locator, Page } from "@playwright/test";

export class Sidebar {
    // * locators
    readonly menuButton: Locator;
    readonly logoutLink: Locator;
    readonly allItemsLink: Locator;
    readonly aboutLink: Locator;
    readonly resetAppStateLink: Locator;

    constructor(private readonly page: Page){
        this.menuButton = page.locator('#react-burger-menu-btn');
        this.logoutLink = page.locator('#logout_sidebar_link');
        this.allItemsLink = page.locator('#inventory_sidebar_link');
        this.aboutLink = page.locator('#about_sidebar_link');
        this.resetAppStateLink =page.locator('#reset_sidebar_link');
    } 

    // * open sidebar menu
    async openMenu(){
        await this.menuButton.click();
    }

    // * click logout
    async clickLogout() {
        await this.logoutLink.click();
    }

    // * click all items
    async clickAllItems() {
        await this.allItemsLink.click();
    }

    // * click about
    async clickAbout() {
        await this.aboutLink.click();
    }

    // * reset app state
    async resetAppState() {
        await this.resetAppStateLink.click();
    }
}
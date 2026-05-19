import { Page } from '@playwright/test';
import { Header } from '../components/Header.js';
import { Logout } from '../components/Logout.js';
import { ProductCard } from '../components/ProductCard.js';
import { ProductFilter } from '../components/ProductFilter.js';

export class InventoryPage {
    readonly product: ProductCard;  
    readonly header: Header;
    readonly filter: ProductFilter;
    readonly logout: Logout;

    constructor(private readonly page: Page) {
        this.product = new ProductCard(page);
        this.header = new Header(page);
        this.filter = new ProductFilter(page);
        this.logout = new Logout(page);
    }
}
import { Page } from '@playwright/test';
import { ProductCard } from '../components/ProductCard.js';
import { Header } from '../components/Header.js';

export class InventoryPage {
    product: ProductCard;
    header: Header;

    constructor(private page: Page) {
        this.product = new ProductCard(page);
        this.header = new Header(page);
    }
}
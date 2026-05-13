import { Page } from '@playwright/test';
import { ProductCard } from '../components/ProductCard.js';
import { Header } from '../components/Header.js';
import { ProductFilter } from '../components/ProductFilter.js';

export class InventoryPage {
    product: ProductCard;
    header: Header;
    filter: ProductFilter;

    constructor(private page: Page) {
        this.product = new ProductCard(page);
        this.header = new Header(page);
        this.filter = new ProductFilter(page);
    }
}
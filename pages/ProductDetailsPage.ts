import { Page, Locator } from '@playwright/test';

export class ProductDetailsPage {
    readonly page: Page;
    readonly addToCartButton: Locator;
    readonly productName: Locator;
    readonly price: Locator;

    constructor(page: Page) {
        this.page = page;
        this.addToCartButton = page.locator('button[id^="add-to-cart-button"]');
        this.productName = page.locator('h1');
        this.price = page.locator('span[itemprop="price"]');
    }

    async addToCart() {
        await this.addToCartButton.click();
    }

    async getProductName() {
        return await this.productName.textContent();
    }

    async getPrice() {
        return await this.price.textContent();
    }
}

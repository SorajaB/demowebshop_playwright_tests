import { Page, Locator } from '@playwright/test';

export class CategoryPage {
    readonly page: Page;
    readonly productLinks: Locator;

    constructor(page: Page) {
        this.page = page;
        this.productLinks = page.locator('.product-title a');
    }

    async gotoCategory(categoryName: string) {
        await this.page.locator(`a:has-text("${categoryName}")`).click();
    }

    async openProduct(productName: string) {
        const product = this.page.locator('.product-item', { hasText: productName });
        await product.locator('a').first().click();
    }
}

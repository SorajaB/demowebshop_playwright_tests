import { Page, Locator } from '@playwright/test';

export class HomePage {
    readonly page: Page;
    readonly searchInput: Locator;
    readonly searchButton: Locator;
    readonly registerLink: Locator;
    readonly loginLink: Locator;
    readonly cartLink: Locator;

    constructor(page: Page) {
        this.page = page;
        this.searchInput = page.locator('input[id="small-searchterms"]');
        this.searchButton = page.locator('input[type="submit"][value="Search"]');
        this.registerLink = page.locator('a[href="/register"]');
        this.loginLink = page.locator('a[href="/login"]');
        this.cartLink = page.locator('a[href="/cart"]');
    }

    async goto() {
        await this.page.goto('https://demowebshop.tricentis.com/');
    }

    async searchProduct(productName: string) {
        await this.searchInput.fill(productName);
        await this.searchButton.click();
    }

    async goToRegister() {
        await this.registerLink.click();
    }

    async goToLogin() {
        await this.loginLink.click();
    }

    async goToCart() {
        await this.cartLink.click();
    }
}

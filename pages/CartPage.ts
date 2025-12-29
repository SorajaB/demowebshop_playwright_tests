import { Page, Locator } from '@playwright/test';

export class CartPage {
    readonly page: Page;
    readonly productRows: Locator;
    readonly quantityInputs: Locator;
    readonly updateCartButton: Locator;
    readonly removeCheckboxes: Locator;
    readonly cartTotal: Locator;

    constructor(page: Page) {
        this.page = page;
        this.productRows = page.locator('table.cart tbody tr');
        this.quantityInputs = page.locator('input.qty-input');
        this.updateCartButton = page.locator('input[name="updatecart"]');
        this.removeCheckboxes = page.locator('input[name^="removefromcart"]');
        this.cartTotal = page.locator('.cart-total-right');
    }

    async updateQuantity(row: number, qty: number) {
        await this.quantityInputs.nth(row).fill(qty.toString());
        await this.updateCartButton.click();
    }

    async removeItem(row: number) {
        await this.removeCheckboxes.nth(row).check();
        await this.updateCartButton.click();
    }

    async getCartTotal() {
        return await this.cartTotal.textContent();
    }
}

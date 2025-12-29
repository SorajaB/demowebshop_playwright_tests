import { Page, Locator } from '@playwright/test';

export class CheckoutPage {
    readonly page: Page;
    readonly billingContinue: Locator;
    readonly shippingContinue: Locator;
    readonly paymentContinue: Locator;
    readonly confirmOrderButton: Locator;
    readonly orderConfirmation: Locator;

    constructor(page: Page) {
        this.page = page;
        this.billingContinue = page.locator('input.button-1.new-address-next-step-button');
        this.shippingContinue = page.locator('input.button-1.shipping-method-next-step-button');
        this.paymentContinue = page.locator('input.button-1.payment-method-next-step-button');
        this.confirmOrderButton = page.locator('input.button-1.confirm-order-next-step-button');
        this.orderConfirmation = page.locator('.section.order-completed');
    }

    async completeCheckout() {
        await this.billingContinue.click();
        await this.shippingContinue.click();
        await this.paymentContinue.click();
        await this.confirmOrderButton.click();
    }

    async isOrderConfirmed() {
        return await this.orderConfirmation.isVisible();
    }
}

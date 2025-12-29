import { Page, Locator } from '@playwright/test';

export class RegisterPage {
    readonly page: Page;
    readonly genderMale: Locator;
    readonly genderFemale: Locator;
    readonly firstNameInput: Locator;
    readonly lastNameInput: Locator;
    readonly emailInput: Locator;
    readonly passwordInput: Locator;
    readonly confirmPasswordInput: Locator;
    readonly registerButton: Locator;
    readonly errorMessages: Locator;

    constructor(page: Page) {
        this.page = page;
        this.genderMale = page.locator('#gender-male');
        this.genderFemale = page.locator('#gender-female');
        this.firstNameInput = page.locator('#FirstName');
        this.lastNameInput = page.locator('#LastName');
        this.emailInput = page.locator('#Email');
        this.passwordInput = page.locator('#Password');
        this.confirmPasswordInput = page.locator('#ConfirmPassword');
        this.registerButton = page.locator('#register-button');
        this.errorMessages = page.locator('.field-validation-error');
    }

    async register(user: { firstName: string, lastName: string, email: string, password: string }) {
        await this.firstNameInput.fill(user.firstName);
        await this.lastNameInput.fill(user.lastName);
        await this.emailInput.fill(user.email);
        await this.passwordInput.fill(user.password);
        await this.confirmPasswordInput.fill(user.password);
        await this.registerButton.click();
    }
}

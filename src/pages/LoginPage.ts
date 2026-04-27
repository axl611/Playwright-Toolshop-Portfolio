import {Page, Locator} from '@playwright/test';
import { BaseComponent } from './components/BaseComponent';

export class LoginPage extends BaseComponent {
    private readonly emailInput: Locator;
    private readonly passwordInput: Locator;
    private readonly loginButton: Locator;
    private readonly errorMessageEmail: Locator;
    private readonly errorMessagePassword: Locator;

    constructor(page: Page) {
        super(page);
        this.emailInput = page.getByTestId('email');
        this.passwordInput = page.getByTestId('password');
        this.loginButton = page.getByTestId('login-submit');
        this.errorMessageEmail = page.getByTestId('email-error');
        this.errorMessagePassword = page.getByTestId('password-error');

    }

protected async goto(page: Page): Promise<void>{
    await this.page.goto('/auth/login')

}

protected async login(page: Page): Promise<void>{
    await this.page.emailInput.fill('axl611@gmail.com');
    await this.page.passwordInput.fill('password');
    await this.page.loginButton.click();

}

}
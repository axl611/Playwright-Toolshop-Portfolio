import { Page, Locator } from '@playwright/test';
import { BaseComponent } from './components/BaseComponent';

export class LoginPage extends BaseComponent {
    private readonly emailInput: Locator;
    private readonly passwordInput: Locator;
    private readonly loginButton: Locator;
    private readonly errorMessageEmail: Locator;
    private readonly errorMessagePassword: Locator;
    private readonly errorMessageLogin: Locator;

    constructor(page: Page) {
        super(page);
        this.emailInput = page.getByTestId('email');
        this.passwordInput = page.getByTestId('password');
        this.loginButton = page.getByTestId('login-submit');
        this.errorMessageEmail = page.getByTestId('email-error');
        this.errorMessagePassword = page.getByTestId('password-error');
        this.errorMessageLogin = page.getByTestId('login-error');

    }

async goto(): Promise<void>{
    await this.navigate('/auth/login');
    await this.waitForElement(this.emailInput);
   

}

async login(email: string, password: string): Promise<void>{
    await this.fillField(this.emailInput, email);
    await this.fillField(this.passwordInput, password);
    await this.clickElement(this.loginButton);

}


async getErrorMessageEmail(): Promise<string> {
    return await this.getText(this.errorMessageEmail);
}

async getErrorMessagePassword(): Promise<string> {
    return await this.getText(this.errorMessagePassword);
}

async getErrorMessageLogin(): Promise<string> {
    return await this.getText(this.errorMessageLogin)
}

async isEmailErrorVisible(): Promise<boolean> {
    return await this.isVisible(this.errorMessageEmail);
}

async isPasswordErrorVisible(): Promise<boolean> {
    return await this.isVisible(this.errorMessagePassword);
}

async isLoginErrorVisible(): Promise<boolean> {
    await this.waitForElement(this.errorMessageLogin);
    return await this.isVisible(this.errorMessageLogin);
    
}
}
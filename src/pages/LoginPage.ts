import { Page, Locator } from '@playwright/test';
import { BaseComponent } from './components/BaseComponent';

export class LoginPage extends BaseComponent {
    // Store page reference in constructor for lazy locator evaluation
    constructor(page: Page) {
        super(page);
    }

    // ── Locators ───────────────────────────────────────────
    // Form fields: Use getByLabel for label association (exact match to avoid ambiguous matches)
    get emailInput(): Locator {
        return this.page.getByLabel('Email', { exact: true });
    }

    get passwordInput(): Locator {
        // Use getByTestId for stability - avoids ambiguous label matches
        return this.page.getByTestId('password');
    }

    // Action buttons: Use getByRole for semantic targeting (matches accessibility tree)
    get loginButton(): Locator {
        return this.page.getByRole('button', { name: /login/i });
    }

    // Error messages: Use alert role for accessibility-first error targeting
    get emailError(): Locator {
        return this.page.getByRole('alert');
    }

    get passwordError(): Locator {
        return this.page.getByRole('alert');
    }

    get loginError(): Locator {
        return this.page.getByRole('alert');
    }

    // ── Actions ───────────────────────────────────────────
    // Navigation: Uses base navigate() + explicit wait for element stability
    async goto(): Promise<void> {
        await this.navigate('/auth/login');
        await this.emailInput.waitFor({ state: 'visible' });
    }

    // User action: Direct fill + click (no wrapper methods - uses Playwright directly)
    async login(email: string, password: string): Promise<void> {
        await this.emailInput.fill(email);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
    }
}
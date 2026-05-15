import { test as base, expect } from '@playwright/test';
import { LoginPage } from '@pages/LoginPage';
import { users } from '@data/users';

// ── Fixtures ─────────────────────────────────────────────
// Extend base test with reusable page objects
// Each test gets a fresh LoginPage instance, automatically navigated to login page
const test = base.extend<{ loginPage: LoginPage }>({
    loginPage: async ({ page }, use) => {
        const loginPage = new LoginPage(page);
        await loginPage.goto();
        await use(loginPage);
    },
});

// Re-export expect for assertions
export { expect };

// ── Tests ───────────────────────────────────────────────
test.describe('Login', () => {
    // Test 1: Verify successful login redirects to account page
    // Tags: @smoke - run in quick test suites, @happy-path - primary user flow
    test('successful login redirects to account', 
        { tag: ['@smoke', '@happy-path'] }, 
        async ({ loginPage, page }) => {
            await loginPage.login(users.customer.email, users.customer.password);
            await expect(page).toHaveURL(/account/);
        }
    );

    // Test 2: Verify empty form fields show validation errors
    // Tags: @smoke - quick validation, @negative - error path testing
    test('empty fields show validation errors', 
        { tag: ['@smoke', '@negative'] }, 
        async ({ loginPage }) => {
            await loginPage.login('', '');
            await expect(loginPage.emailError).toBeVisible();
            await expect(loginPage.passwordError).toBeVisible();
        }
    );

    // Test 3: Verify invalid credentials show error message
    // Tags: @smoke - quick validation, @negative - error path testing
    test('invalid credentials show error', 
        { tag: ['@smoke', '@negative'] }, 
        async ({ loginPage }) => {
            await loginPage.login(users.invalid.email, users.invalid.password);
            await expect(loginPage.loginError).toBeVisible();
        }
    );
});
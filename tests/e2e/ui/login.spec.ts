import { test, expect } from '@playwright/test';
import { LoginPage } from '@pages/LoginPage';
import { users } from '@data/users';


test.describe('Login Page Happy path', () => {
    let loginPage: LoginPage;


    test.beforeEach(async ({ page }) => {
        loginPage = new LoginPage(page);
        await loginPage.goto();

    });

    test('Successful login with valid credentials',{tag: ['@smoke', '@happy-path']},  async ({ page }) => {

        await loginPage.login(users.customer.email, users.customer.password)
        await expect(page).toHaveURL('/account');


    });

    test('Login with empty email and password fields', {tag: ['@smoke', '@negative']}, async ({ page }) => {

        await loginPage.login('', '')
        expect(await loginPage.isEmailErrorVisible()).toBe(true)
        expect(await loginPage.isPasswordErrorVisible()).toBe(true)
    });

    test('Login with incorrect credentials', {tag: ['@smoke', '@negative']}, async ({ page }) => {

        await loginPage.login(users.invalid.email, users.invalid.password)
        expect(await loginPage.isLoginErrorVisible()).toBe(true)

    });
});

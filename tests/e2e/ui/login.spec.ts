import { test, expect } from '@playwright/test';
import { LoginPage } from '@pages/LoginPage';
import { users } from '@data/users';


test.describe('Login Page Happy path', () => {

    test('Successful login with valid credentials', async ({ page }) => {
        
        const loginPage = new LoginPage(page);
        console.log('Base URL:', process.env.BASE_URL);
        await loginPage.goto();
        await loginPage.login(users.customer.email, users.customer.password)
        await expect(page).toHaveURL('/account');
    
    
    });



});

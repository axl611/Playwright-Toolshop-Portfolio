import { createBdd } from 'playwright-bdd';
import { LoginPage } from '@pages/LoginPage';
import { users } from '@data/users';
import { expect } from '@playwright/test';

const { Given, When, Then } = createBdd();
let loginPage: LoginPage;

Given('The user is in the login page', async ({ page }) => {
    loginPage = new LoginPage(page);
    await loginPage.goto();
});

When('They input valid credentials', async ({ page }) => {
    await loginPage.login(users.customer.email, users.customer.password)
});

Then('User is logged and redirected to the dashboard', async ({ page }) => {
    await expect(page).toHaveURL('/account');

});



When('They dont input any credentials', async ({ page }) => {
    await loginPage.login('', '')
});

Then('The system displays an error message', async ({ page }) => {
  await expect(page).toHaveURL('/auth/login');
    
});


When('They input invalid credentials', async ({ page }) => {
    await loginPage.login(users.invalid.email, users.invalid.password)
});
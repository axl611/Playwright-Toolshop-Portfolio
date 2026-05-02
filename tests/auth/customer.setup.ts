import { users } from '@data/users';
import { LoginPage } from '@pages/LoginPage';
import {test as setup} from '@playwright/test';

let loginPage: LoginPage;

setup('authenticate as customer', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login(users.customer.email, users.customer.password);
    
    // wait until we're actually on the account page
    await page.waitForURL('/account', { timeout: 15000 });
    
    // now save the authenticated state
    await page.context().storageState({ path: '.auth/customer.json' });
});
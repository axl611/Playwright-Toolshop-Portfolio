import { users } from '@data/users';
import { LoginPage } from '@pages/LoginPage';
import {test as setup} from '@playwright/test';

let loginPage: LoginPage;

setup('authenticate as customer', async ({page}) => {

    loginPage = new LoginPage (page);
    await loginPage.goto();
    await loginPage.login(users.customer.email, users.customer.password)
    await page.context().storageState({ path: '.auth/customer.json' });

});
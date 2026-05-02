import { createBdd } from 'playwright-bdd';
import { AccountPage } from '@pages/AccountPage';
import { expect } from '@playwright/test';

const { Given, When, Then } = createBdd();
let accountPage: AccountPage;

Given('The user is in the account page', async ({page}) => {
    accountPage= new AccountPage(page);
    await accountPage.goto();

});

//Favorite redirect test
When('The user clicks Favorite CTA', async ({page}) => {
    await accountPage.goToFavorite();

});


//Profile redirect test
When('The user clicks Profile CTA', async ({page}) => {
    await accountPage.goToProfile();

});



//Invoice redirect test 
When('The user clicks Invoices CTA', async ({page}) => {
    await accountPage.goToInvoice()

});


//Message redirect test 
When('The user clicks Messages CTA', async ({page}) =>{
    await accountPage.goToMessages()

});



Then('User is redirected to {string}', async ({ page }, url: string) => {
    await expect(page).toHaveURL(url);
});
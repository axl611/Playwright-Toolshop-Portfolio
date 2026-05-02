import { test as setup, request } from '@playwright/test';
import { users } from '@data/users';

setup('authenticate as customer', async ({ page }) => {
    // login via API — bypasses Cloudflare browser challenge
    const apiContext = await request.newContext();
    const response = await apiContext.post(
        'https://api.practicesoftwaretesting.com/users/login',
        {
            data: {
                email: users.customer.email,
                password: users.customer.password,
            },
        }
    );

    const { access_token } = await response.json();

    // inject token into browser localStorage
    await page.goto('https://practicesoftwaretesting.com');
    await page.evaluate((token) => {
        localStorage.setItem('auth-token', token);
    }, access_token);

    // save the state with the token already set
    await page.context().storageState({ path: '.auth/customer.json' });
});
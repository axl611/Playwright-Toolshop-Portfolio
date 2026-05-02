import { Page, Locator } from "@playwright/test";
import { BaseComponent } from './components/BaseComponent';


export class AccountPage extends BaseComponent {
    private readonly favoriteButton: Locator;
    private readonly profileButton: Locator;
    private readonly invoicesButton: Locator;
    private readonly messagesButton: Locator;
    private readonly myAccountTitle: Locator;


    constructor(page: Page) {
        super(page);
        this.favoriteButton = page.getByRole('button', {name: 'Favorites'});
        this.profileButton = page.getByRole('button', {name: 'Profile'});
        this.invoicesButton = page.getByRole('button', {name: 'Invoices'});
        this.messagesButton = page.getByRole('button', {name: 'Messages'});
        this.myAccountTitle = page.getByRole('heading', {name: 'My account'})
    }

    async goto(): Promise<void> {
        await this.navigate('/account');
        await this.waitForElement(this.myAccountTitle);

    }

    async goToFavorite(): Promise<void> {
        await this.clickElement(this.favoriteButton);

    }

    async goToProfile(): Promise<void> {
        await this.clickElement(this.profileButton);

    }

    async goToInvoice(): Promise<void> {
        await this.clickElement(this.invoicesButton);

    }

    async goToMessages(): Promise<void> {
        await this.clickElement(this.messagesButton);

    }

    async getPageTitle(): Promise<string>{
        return await this.getText(this.myAccountTitle)
        
    }
    
}
import { Page } from "@playwright/test";
import { BaseComponent } from "./BaseComponent";

export class NavbarComponent extends BaseComponent {
    protected page: Page;

    constructor (page: Page) {
        super(page);
        this.page = page;

    }
}
import { Page } from '@playwright/test';

export class BaseComponent {
    // Protected so subclasses can access the page instance
    constructor(protected page: Page) {}

    // ── Navigation ─────────────────────────────────────────
    // Common navigation method - each page adds its own goto() with specific waits
    async navigate(path: string): Promise<void> {
        await this.page.goto(path);
    }

    // ── Page State Helpers ──────────────────────────────────
    // Wait for page to be fully loaded before interacting
    async waitForPageLoad(): Promise<void> {
        await this.page.waitForLoadState('networkidle');
    }

    // Wait for a specific URL pattern
    async waitForURL(pattern: string | RegExp): Promise<void> {
        await this.page.waitForURL(pattern);
    }
}
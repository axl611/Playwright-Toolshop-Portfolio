import { defineConfig, devices } from '@playwright/test';
import * as dotenv from 'dotenv';
import { defineBddConfig } from 'playwright-bdd';

dotenv.config({ path: '.env.staging' });

const bddTestDir = defineBddConfig({
  features: 'features/**/*.feature',
  steps: 'step-definitions/**/*.ts',
  outputDir: '.bdd-tests',
});

export default defineConfig({
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: 'html',
  use: {
    baseURL: process.env.BASE_URL || 'https://practicesoftwaretesting.com',
    testIdAttribute: 'data-test',
    trace: 'on-first-retry',
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
      testDir: './tests',
    },
    {
      name: 'bdd-chromium',
      use: { ...devices['Desktop Chrome'] },
      testDir: bddTestDir,
    },
  ],
});
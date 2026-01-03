import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './src',
  testMatch: /.*\.spec\.ts$/,

  // Keep runs deterministic to avoid cross-test interference on the shared cart/account
  fullyParallel: false,
  workers: 1,
  retries: 2,

  // Timeouts
  timeout: 60_000,
  expect: { timeout: 10_000 },

  use: {
    baseURL: 'https://demowebshop.tricentis.com',
    headless: true, // override with --headed when needed
    actionTimeout: 15_000,
    navigationTimeout: 30_000,
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
  },

  reporter: [
    ['list'],
    ['html', { open: 'never' }],
  ],
});

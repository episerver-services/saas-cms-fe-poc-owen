import { defineConfig } from '@playwright/test'

export default defineConfig({
  testDir: 'tests', // Only look for tests in /tests
  testMatch: '**/*.spec.ts', // Only run *.spec.ts files
  fullyParallel: true,
  retries: 0,
  use: {
    baseURL: 'http://localhost:3000',
    headless: true,
    viewport: { width: 1280, height: 720 },
    ignoreHTTPSErrors: true,
    video: 'off',
  },
  webServer: {
    command: 'pnpm dev',
    url: 'http://localhost:3000',
    reuseExistingServer: !process.env.CI,
    timeout: 120 * 1000,
  },
})

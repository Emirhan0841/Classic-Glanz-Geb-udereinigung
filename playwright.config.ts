import { defineConfig, devices } from '@playwright/test'

const PORT = 4173

// Tests laufen gegen den Produktions-Build (wie auf Netlify), nicht gegen den Dev-Server.
export default defineConfig({
  testDir: './tests/e2e',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 1 : 0,
  reporter: [['list'], ['html', { open: 'never' }]],
  outputDir: 'test-results',
  use: {
    // BASE_URL setzt eine laufende Umgebung (z. B. Netlify-Vorschau) statt des lokalen Builds
    baseURL: process.env.BASE_URL ?? `http://localhost:${PORT}`,
    trace: 'retain-on-failure',
    screenshot: 'only-on-failure',
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
  webServer: process.env.BASE_URL ? undefined : {
    command: `npm run build && npx vite preview --port ${PORT} --strictPort`,
    url: `http://localhost:${PORT}`,
    reuseExistingServer: false, // immer frisch bauen, sonst laufen Tests gegen veralteten Build
    timeout: 120_000,
  },
})

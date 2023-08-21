import { test, expect } from '@playwright/test';

test('basic test', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  const name = await page.innerText('.navbar__inner .navbar__title');
  await expect(name).toBe('Playwright');
});

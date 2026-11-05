import { test, expect } from '@playwright/test'

// Straße und Hausnummer sind nur im Impressum erlaubt. Geprüft wird der sichtbare Text
// und der komplette HTML-Quelltext (Meta-Tags, Skripte, Strukturdaten).
const STREET = 'Franz-Luststraße'
const POSTAL = '76185'

const PAGES = ['/', '/#contact', '/datenschutz']

for (const path of PAGES) {
  test(`Straßenadresse steht nicht auf ${path}`, async ({ page }) => {
    await page.goto(path)
    await expect(page.locator('body')).toBeVisible()
    const text = await page.locator('body').innerText()
    expect(text).not.toContain(STREET)
    expect(text).not.toContain(POSTAL)

    const html = await page.content()
    expect(html).not.toContain(STREET)
    expect(html).not.toContain(POSTAL)
  })
}

test('Straßenadresse steht im Impressum', async ({ page }) => {
  await page.goto('/impressum')
  const text = await page.locator('main').innerText()
  expect(text).toContain(STREET)
  expect(text).toContain(POSTAL)
})

test('Standort Karlsruhe und Telefon/E-Mail bleiben sichtbar', async ({ page }) => {
  await page.goto('/')
  const footer = page.locator('footer')
  await expect(footer).toContainText('Karlsruhe und Umgebung')
  await expect(footer.locator('a[href^="tel:"]')).toBeVisible()
  await expect(footer.locator('a[href^="mailto:"]')).toBeVisible()
})

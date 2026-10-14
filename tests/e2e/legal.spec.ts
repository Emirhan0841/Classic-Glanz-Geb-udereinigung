import { test, expect, type Page } from '@playwright/test'

const LEGAL_PAGES = [
  { path: '/impressum', title: 'Impressum' },
  { path: '/datenschutz', title: 'Datenschutzerklärung' },
] as const

const WIDTHS = [320, 375, 390, 430, 1440, 1920]

async function overflowOf(page: Page) {
  return page.evaluate(() => ({
    sw: document.documentElement.scrollWidth,
    cw: document.documentElement.clientWidth,
  }))
}

test.describe('Rechtliche Seiten: Routing', () => {
  test.use({ viewport: { width: 1440, height: 900 } })

  for (const { path, title } of LEGAL_PAGES) {
    test(`${path} funktioniert bei direktem Aufruf und nach Refresh`, async ({ page }) => {
      await page.goto(path)
      await expect(page.locator('main h1')).toHaveText(title)
      await expect(page).toHaveTitle(new RegExp(title))

      await page.reload()
      await expect(page.locator('main h1')).toHaveText(title)
      await expect(page).toHaveURL(new RegExp(`${path}$`))
    })

    test(`${path} nutzt Header und Footer der Website`, async ({ page }) => {
      await page.goto(path)
      await expect(page.locator('header')).toBeVisible()
      await expect(page.locator('footer')).toBeVisible()
      await expect(page.locator('header img[alt="Classic Glanz Gebäudereinigung"]')).toBeVisible()
    })

    test(`${path} hat einen Zurück-Link zur Startseite`, async ({ page }) => {
      await page.goto(path)
      await page.getByRole('link', { name: '← Zur Startseite' }).click()
      await expect(page).toHaveURL(/\/$/)
      await expect(page.locator('#home h1')).toBeVisible()
    })
  }

  test('Startseite enthält keine Impressum- und Datenschutz-Abschnitte mehr', async ({ page }) => {
    await page.goto('/')
    await expect(page.locator('#impressum')).toHaveCount(0)
    await expect(page.locator('#datenschutz')).toHaveCount(0)
    await expect(page.locator('h2', { hasText: 'Impressum' })).toHaveCount(0)
  })

  test('Footer verlinkt Impressum und Datenschutz auf eigene Seiten', async ({ page }) => {
    await page.goto('/')
    const footer = page.locator('footer')
    await footer.getByRole('link', { name: 'Impressum', exact: true }).click()
    await expect(page).toHaveURL(/\/impressum$/)
    await expect(page.locator('main h1')).toHaveText('Impressum')

    await page.locator('footer').getByRole('link', { name: 'Datenschutz', exact: true }).click()
    await expect(page).toHaveURL(/\/datenschutz$/)
    await expect(page.locator('main h1')).toHaveText('Datenschutzerklärung')
  })

  test('Unbekannte Pfade leiten auf die Startseite', async ({ page }) => {
    await page.goto('/gibt-es-nicht')
    await expect(page).toHaveURL(/\/$/)
    await expect(page.locator('#home h1')).toBeVisible()
  })
})

test.describe('Impressum: Inhalt', () => {
  test.use({ viewport: { width: 1440, height: 900 } })

  test('enthält die vorgegebenen Firmendaten', async ({ page }) => {
    await page.goto('/impressum')
    const text = await page.locator('main').innerText()
    expect(text).toContain('Classic Glanz Gebäudereinigung')
    expect(text).toContain('Görkem Cici')
    expect(text).toContain('Franz-Luststraße 20')
    expect(text).toContain('76185 Karlsruhe')
    expect(text).toContain('Deutschland')
    expect(text).toContain('0176 57809179')
    expect(text).toContain('info@classic-glanz-gebäudereinigung.de')
  })

  test('E-Mail-Link nutzt die Punycode-Domain für mailto', async ({ page }) => {
    await page.goto('/impressum')
    await expect(page.locator('main a[href^="mailto:"]')).toHaveAttribute(
      'href',
      'mailto:info@xn--classic-glanz-gebudereinigung-hqc.de',
    )
  })

  test('Telefon-Link ist eine tel:-Verknüpfung', async ({ page }) => {
    await page.goto('/impressum')
    await expect(page.locator('main a[href^="tel:"]')).toHaveAttribute('href', 'tel:+4917657809179')
  })

  test('keine private Adresse oder Platzhalter für Pflichtangaben im Firmenkopf', async ({ page }) => {
    await page.goto('/impressum')
    const text = await page.locator('main').innerText()
    expect(text).not.toContain('[Firmenname')
    expect(text).not.toContain('[Straße')
    expect(text).not.toContain('[Telefonnummer')
  })

  test('offene Pflichtangaben sind als ZU PRÜFEN markiert', async ({ page }) => {
    await page.goto('/impressum')
    const markers = await page.locator('main').innerText()
    expect(markers).toContain('[ZU PRÜFEN:')
  })
})

test.describe('Datenschutz: Inhalt', () => {
  test.use({ viewport: { width: 1440, height: 900 } })

  test('nennt Verantwortliche, Hosting, Kontaktformular und Betroffenenrechte', async ({ page }) => {
    await page.goto('/datenschutz')
    const text = await page.locator('main').innerText()
    expect(text).toContain('Görkem Cici')
    expect(text).toContain('Netlify')
    expect(text).toContain('Kontaktformular')
    expect(text).toContain('Art. 15 DSGVO')
    expect(text).toContain('Art. 77 DSGVO')
  })

  test('erklärt, dass keine Cookies und kein Storage genutzt werden', async ({ page }) => {
    await page.goto('/datenschutz')
    const text = await page.locator('main').innerText()
    expect(text).toContain('verwendet keine Cookies')
    expect(text).toContain('lokalen Speicher')
  })

  test('Datenschutz-Link im Footer führt zum Abschnitt', async ({ page }) => {
    await page.goto('/')
    await page.locator('footer').getByRole('link', { name: 'Datenschutz', exact: true }).click()
    await expect(page.locator('main h3', { hasText: '1. Verantwortliche Stelle' })).toBeVisible()
  })
})

test.describe('Rechtliche Seiten: Responsive', () => {
  for (const width of WIDTHS) {
    test(`kein horizontaler Overflow bei ${width}px`, async ({ page }) => {
      await page.setViewportSize({ width, height: 900 })
      for (const { path } of LEGAL_PAGES) {
        await page.goto(path)
        await page.waitForLoadState('networkidle')
        const { sw, cw } = await overflowOf(page)
        expect(sw, `${path} bei ${width}px: scrollWidth ${sw} > ${cw}`).toBeLessThanOrEqual(cw)
      }
    })
  }
})

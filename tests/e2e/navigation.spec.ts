import { test, expect, type Page } from '@playwright/test'

const SECTIONS = ['home', 'services', 'about', 'process', 'contact'] as const

async function headerBottom(page: Page) {
  return page.locator('header').evaluate((h) => h.getBoundingClientRect().bottom)
}

// Die Hauptüberschrift des Ziel-Abschnitts muss nach Klick sichtbar sein, nicht unter dem sticky Header.
// Nav-Links ändern den URL-Hash; CTA-Buttons ebenfalls (über navigate), daher wird die URL standardmäßig geprüft.
async function expectSectionVisible(page: Page, id: string) {
  await expect(page).toHaveURL(new RegExp(`#${id}$`))
  const heading = page.locator(`#${id}`).locator('h1, h2').first()
  await expect
    .poll(
      async () => {
        const top = await heading.evaluate((h) => h.getBoundingClientRect().top)
        const bottom = await headerBottom(page)
        return top >= bottom - 2 && top < 400
      },
      { message: `Überschrift von #${id} liegt nach Klick nicht sichtbar unter dem Header`, timeout: 10_000 },
    )
    .toBe(true)
}

test.describe('Desktop-Navigation', () => {
  test.use({ viewport: { width: 1440, height: 900 } })

  test('Menüpunkte führen zu den richtigen Abschnitten', async ({ page }) => {
    await page.goto('/')
    const nav = page.locator('header nav')
    const links = await nav.locator('a').evaluateAll((els) =>
      els.map((a) => ({ label: a.textContent?.trim(), href: a.getAttribute('href') })),
    )
    expect(links.map((l) => l.label)).toEqual(['Startseite', 'Leistungen', 'Über uns', 'Ablauf', 'Kontakt'])

    for (const link of links) {
      await nav.getByRole('link', { name: link.label!, exact: true }).click()
      await expectSectionVisible(page, link.href!.split('#')[1])
    }
  })

  test('alle Anker-Ziele existieren als Abschnitt auf der Startseite', async ({ page }) => {
    await page.goto('/')
    const ids = await page.locator('a[href*="#"]').evaluateAll((els) =>
      [...new Set(els.map((a) => a.getAttribute('href')!.split('#')[1]).filter(Boolean))],
    )
    expect(ids.length).toBeGreaterThan(0)
    for (const id of ids) {
      await expect(page.locator(`[id="${id}"]`), `Anker #${id} fehlt`).toHaveCount(1)
    }
  })

  test('Header-CTA "Angebot anfragen" führt zum Kontakt', async ({ page }) => {
    await page.goto('/')
    await page.locator('header').getByRole('button', { name: 'Angebot anfragen' }).click()
    await expectSectionVisible(page, 'contact')
  })

  test('Hero-CTA "Angebot anfragen" führt zum Kontakt', async ({ page }) => {
    await page.goto('/')
    await page.locator('#home').getByRole('button', { name: 'Angebot anfragen' }).click()
    await expectSectionVisible(page, 'contact')
  })

  test('Hero-CTA "Leistungen" führt zu den Leistungen', async ({ page }) => {
    await page.goto('/')
    await page.locator('#home').getByRole('button', { name: 'Leistungen' }).click()
    await expectSectionVisible(page, 'services')
  })

  test('CTA-Sektion "Jetzt Angebot anfragen" führt zum Kontakt', async ({ page }) => {
    await page.goto('/')
    await page.getByRole('button', { name: 'Jetzt Angebot anfragen' }).click()
    await expectSectionVisible(page, 'contact')
  })

  test('Footer-Links zu Leistungen und Kontakt führen auf die Startseite', async ({ page }) => {
    await page.goto('/impressum')
    await page.locator('footer').getByRole('link', { name: 'Leistungen' }).click()
    await expectSectionVisible(page, 'services')
  })

  test('Footer enthält keinen AGB-Link ohne Ziel', async ({ page }) => {
    await page.goto('/')
    await expect(page.locator('footer a[href="#agb"]')).toHaveCount(0)
    await expect(page.locator('footer').getByRole('link', { name: 'AGB' })).toHaveCount(0)
  })
})

test.describe('Mobile-Navigation', () => {
  test.use({ viewport: { width: 375, height: 800 } })

  test('Menü öffnet, schließt nach Klick und scrollt zum Ziel', async ({ page }) => {
    await page.goto('/')
    const toggle = page.locator('header button[aria-expanded]')
    await expect(toggle).toHaveAttribute('aria-expanded', 'false')

    await toggle.click()
    await expect(toggle).toHaveAttribute('aria-expanded', 'true')
    await page.locator('header').getByRole('link', { name: 'Leistungen', exact: true }).click()

    await expect(toggle).toHaveAttribute('aria-expanded', 'false')
    await expectSectionVisible(page, 'services')
  })

  test('Menü-Button hat im geöffneten Zustand ein passendes Label', async ({ page }) => {
    await page.goto('/')
    const toggle = page.locator('header button[aria-expanded]')
    await toggle.click()
    await expect(toggle).toHaveAccessibleName('Menü schließen')
  })

  test('Mobile Menü enthält alle Navigationspunkte und den CTA', async ({ page }) => {
    await page.goto('/')
    await page.locator('header button[aria-expanded]').click()
    for (const label of ['Startseite', 'Leistungen', 'Über uns', 'Ablauf', 'Kontakt']) {
      await expect(page.locator('header').getByRole('link', { name: label, exact: true })).toBeVisible()
    }
    await expect(page.locator('header').getByRole('button', { name: 'Angebot anfragen' })).toBeVisible()
  })

  test('Mobile CTA im Menü führt zum Kontakt und schließt das Menü', async ({ page }) => {
    await page.goto('/')
    const toggle = page.locator('header button[aria-expanded]')
    await toggle.click()
    await page.locator('header').getByRole('button', { name: 'Angebot anfragen' }).click()
    await expect(toggle).toHaveAttribute('aria-expanded', 'false')
    await expectSectionVisible(page, 'contact')
  })

  for (const id of SECTIONS) {
    test(`Deep-Link /#${id} ist auf Mobile sichtbar (nicht unter dem Header)`, async ({ page }) => {
      await page.goto(`/#${id}`)
      const heading = page.locator(`#${id}`).locator('h1, h2').first()
      await expect
        .poll(async () => {
          const top = await heading.evaluate((h) => h.getBoundingClientRect().top)
          const bottom = await headerBottom(page)
          return top >= bottom - 2 && top < 400
        })
        .toBe(true)
    })
  }

  test('Mobile Menü auf Unterseite: Link führt zurück zur Startseite', async ({ page }) => {
    await page.goto('/datenschutz')
    await page.locator('header button[aria-expanded]').click()
    await page.locator('header').getByRole('link', { name: 'Kontakt', exact: true }).click()
    await expect(page).toHaveURL(/\/#contact$/)
    await expectSectionVisible(page, 'contact')
  })
})

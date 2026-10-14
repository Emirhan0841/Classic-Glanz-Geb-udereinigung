import { test, expect } from '@playwright/test'
import AxeBuilder from '@axe-core/playwright'

test.describe('Technische Qualität', () => {
  test('keine Konsolenfehler oder -warnungen beim Laden', async ({ page }) => {
    const problems: string[] = []
    page.on('console', (msg) => {
      if (msg.type() === 'error' || msg.type() === 'warning') problems.push(`${msg.type()}: ${msg.text()}`)
    })
    page.on('pageerror', (err) => problems.push(`pageerror: ${err.message}`))

    await page.goto('/')
    await page.waitForLoadState('networkidle')
    expect(problems).toEqual([])
  })

  test('keine fehlgeschlagenen Requests oder HTTP-Fehler', async ({ page }) => {
    const failures: string[] = []
    page.on('requestfailed', (req) => failures.push(`failed: ${req.url()} (${req.failure()?.errorText})`))
    page.on('response', (res) => {
      if (res.status() >= 400) failures.push(`${res.status()}: ${res.url()}`)
    })

    await page.goto('/')
    await page.waitForLoadState('networkidle')
    expect(failures).toEqual([])
  })

  test('alle Bilder sind geladen und haben eine Größe', async ({ page }) => {
    await page.goto('/')
    await page.evaluate(async () => {
      for (let y = 0; y < document.body.scrollHeight; y += 400) {
        window.scrollTo(0, y)
        await new Promise((r) => setTimeout(r, 30))
      }
    })
    await page.waitForLoadState('networkidle')
    const broken = await page.locator('img').evaluateAll((imgs) =>
      imgs
        .filter((img) => !(img as HTMLImageElement).complete || (img as HTMLImageElement).naturalWidth === 0)
        .map((img) => (img as HTMLImageElement).src),
    )
    expect(broken).toEqual([])
  })

  test('alle Bilder haben ein alt-Attribut', async ({ page }) => {
    await page.goto('/')
    const missing = await page.locator('img:not([alt])').evaluateAll((imgs) => imgs.map((i) => i.outerHTML.slice(0, 120)))
    expect(missing).toEqual([])
  })

  test('Dokument hat Sprache, Titel und genau eine h1', async ({ page }) => {
    await page.goto('/')
    await expect(page.locator('html')).toHaveAttribute('lang', 'de')
    await expect(page).toHaveTitle(/Classic Glanz/)
    await expect(page.locator('h1')).toHaveCount(1)
  })

  test('axe: keine kritischen Accessibility-Verstöße', async ({ page }) => {
    await page.goto('/')
    await page.waitForLoadState('networkidle')
    const results = await new AxeBuilder({ page }).withTags(['wcag2a', 'wcag2aa', 'wcag21aa']).analyze()
    const serious = results.violations.filter((v) => v.impact === 'critical' || v.impact === 'serious')
    const summary = serious.flatMap((v) => v.nodes.map((n) => `${v.id} (${v.impact}): ${n.target.join(" ")} | ${n.html.slice(0, 140)} | ${n.any.map((a) => a.message).join(" ")}`))
    expect(summary).toEqual([])
  })

  test('Formularfelder haben sichtbare Labels', async ({ page }) => {
    await page.goto('/#contact')
    for (const id of ['name', 'company', 'email', 'phone', 'service', 'message', 'privacy']) {
      const hasLabel = await page.locator(`#contact label[for="${id}"]`).count()
      expect(hasLabel, `Label für #${id} fehlt`).toBe(1)
    }
  })

  test('Mobile Menü-Button hat einen Accessible Name', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 800 })
    await page.goto('/')
    const toggle = page.locator('header button[aria-expanded]')
    await expect(toggle).toHaveAccessibleName(/.+/)
  })
})

import { test, expect, type Page } from '@playwright/test'

// Spaltenanzahl je Breite: Smartphone 1, Tablet 2, Desktop 4
const LAYOUTS = [
  { width: 320, columns: 1 },
  { width: 375, columns: 1 },
  { width: 390, columns: 1 },
  { width: 768, columns: 2 },
  { width: 1440, columns: 4 },
]

async function columnCount(page: Page) {
  return page.locator('ul.grid li').first().evaluate((li) => {
    const grid = li.parentElement!
    return getComputedStyle(grid).gridTemplateColumns.split(' ').filter(Boolean).length
  })
}

test.describe('Weitere Reinigungsleistungen', () => {
  for (const { width, columns } of LAYOUTS) {
    test.describe(`Viewport ${width}px`, () => {
      test.use({ viewport: { width, height: 900 } })

      test(`zeigt ${columns} Spalte(n) und 8 Karten`, async ({ page }) => {
        await page.goto('/')
        const cards = page.locator('ul.grid li')
        await expect(cards).toHaveCount(8)
        expect(await columnCount(page)).toBe(columns)
      })

      test('Texte laufen nicht über und werden nicht mitten im Wort getrennt', async ({ page }) => {
        await page.goto('/')
        const texts = page.locator('ul.grid li > span:last-child')
        await expect(texts).toHaveCount(8)

        const info = await texts.evaluateAll((spans) =>
          spans.map((s) => ({
            text: s.textContent,
            overflow: s.scrollWidth > s.clientWidth + 1,
            wordBreak: getComputedStyle(s).wordBreak,
            overflowWrap: getComputedStyle(s).overflowWrap,
          })),
        )
        for (const item of info) {
          expect(item.overflow, `Text läuft über: ${item.text}`).toBe(false)
          expect(item.wordBreak, item.text!).toBe('normal')
          expect(item.overflowWrap, item.text!).toBe('normal')
        }

        const sw = await page.evaluate(() => document.documentElement.scrollWidth)
        const cw = await page.evaluate(() => document.documentElement.clientWidth)
        expect(sw, 'horizontaler Überlauf').toBeLessThanOrEqual(cw)
      })
    })
  }
})

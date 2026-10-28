import { test, expect, type Page } from '@playwright/test'

const WIDTHS = [320, 360, 375, 390, 393, 430, 768, 1024, 1440, 1920]

// Die acht Hauptleistungen liegen im Abschnitt #services, jede als Karte mit h3 + p
function cards(page: Page) {
  return page.locator('#services h3').locator('xpath=ancestor::div[contains(@class,"border-l-4")]')
}

for (const width of WIDTHS) {
  test.describe(`Hauptleistungen bei ${width}px`, () => {
    test.use({ viewport: { width, height: 900 } })

    test('alle 8 Leistungen sind sichtbar und kaputte Bilder fehlen', async ({ page }) => {
      await page.goto('/')
      const list = cards(page)
      await expect(list).toHaveCount(8)

      for (let i = 0; i < 8; i++) {
        await expect(list.nth(i).locator('h3')).toBeVisible()
        await expect(list.nth(i).locator('p')).toBeVisible()
      }

      // Kein <img> darf ein kaputtes Bild sein (complete, aber naturalWidth 0)
      const broken = await page.locator('#services img').evaluateAll((imgs) =>
        imgs.filter((img) => img.complete && img.naturalWidth === 0).map((img) => img.getAttribute('src')),
      )
      expect(broken, 'kaputte Bilder').toEqual([])
    })

    test('Texte und Bilder laufen nicht über und werden nicht mitten im Wort getrennt', async ({ page }) => {
      await page.goto('/')
      const list = cards(page)
      await expect(list).toHaveCount(8)

      const info = await list.evaluateAll((els) =>
        els.flatMap((card) => {
          const elems = [...card.querySelectorAll('h3, p')] as HTMLElement[]
          return elems.map((el) => {
            const cs = getComputedStyle(el)
            return {
              text: el.textContent ?? '',
              overflow: el.scrollWidth > el.clientWidth + 1,
              wordBreak: cs.wordBreak,
              overflowWrap: cs.overflowWrap,
              hyphens: cs.hyphens,
            }
          })
        }),
      )
      expect(info).toHaveLength(16)
      for (const item of info) {
        expect(item.overflow, `läuft über: ${item.text}`).toBe(false)
        expect(item.wordBreak, item.text).toBe('normal')
        expect(item.overflowWrap, item.text).toBe('normal')
      }

      const sw = await page.evaluate(() => document.documentElement.scrollWidth)
      const cw = await page.evaluate(() => document.documentElement.clientWidth)
      expect(sw, 'horizontaler Überlauf').toBeLessThanOrEqual(cw)
    })

    test('Layout: Bild über Text auf kleinen Screens, nebeneinander ab Desktop', async ({ page }) => {
      await page.goto('/')
      const first = cards(page).first()
      const img = first.locator('img, span[aria-hidden="true"]').first()
      const text = first.locator('h3')
      const [imgBox, textBox] = await Promise.all([img.evaluate((el) => el.parentElement!.getBoundingClientRect()), text.boundingBox()])

      if (width < 1280) {
        expect(imgBox.bottom, 'Bild muss über dem Text liegen').toBeLessThanOrEqual(textBox!.y + 1)
        expect(imgBox.width, 'Bild muss die Kartenbreite nutzen').toBeGreaterThan(200)
      } else {
        expect(imgBox.right, 'Bild muss links vom Text liegen').toBeLessThanOrEqual(textBox!.x + 1)
      }
    })
  })
}

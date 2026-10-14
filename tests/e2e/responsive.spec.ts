import { test, expect, type Page } from '@playwright/test'
import path from 'node:path'

const WIDTHS = [320, 375, 390, 430, 768, 1024, 1440, 1920]
const SHOTS = path.join('test-results', 'screenshots')

async function loadFully(page: Page) {
  await page.goto('/')
  // Lazy-Bilder und Animationen auslösen
  await page.evaluate(async () => {
    for (let y = 0; y < document.body.scrollHeight; y += 400) {
      window.scrollTo(0, y)
      await new Promise((r) => setTimeout(r, 30))
    }
    window.scrollTo(0, 0)
  })
  await page.waitForLoadState('networkidle')
}

// Elemente, die über den Viewport ragen (Layoutfehler)
function findOverflowing(page: Page) {
  return page.evaluate(() => {
    const vw = document.documentElement.clientWidth
    const out: string[] = []
    for (const el of document.querySelectorAll('body *')) {
      const r = el.getBoundingClientRect()
      if (r.width === 0 && r.height === 0) continue
      if (r.right > vw + 1 || r.left < -1) {
        out.push(`${el.tagName.toLowerCase()}.${String(el.className).slice(0, 50)} [${Math.round(r.left)}..${Math.round(r.right)}]`)
      }
    }
    return out.slice(0, 10)
  })
}

// Abgeschnittene Inhalte: Elemente mit overflow hidden, deren Inhalt größer als die Box ist
function findClipped(page: Page) {
  return page.evaluate(() => {
    const out: string[] = []
    for (const el of document.querySelectorAll('body *')) {
      const cs = getComputedStyle(el)
      if (cs.overflowX !== 'hidden' && cs.overflowX !== 'clip') continue
      if (el.scrollWidth > el.clientWidth + 2) {
        out.push(`${el.tagName.toLowerCase()}.${String(el.className).slice(0, 50)} sw=${el.scrollWidth} cw=${el.clientWidth}`)
      }
    }
    return out.slice(0, 10)
  })
}

for (const width of WIDTHS) {
  test.describe(`Viewport ${width}px`, () => {
    test.use({ viewport: { width, height: 900 } })

    test('kein horizontaler Overflow', async ({ page }) => {
      await loadFully(page)
      const sw = await page.evaluate(() => document.documentElement.scrollWidth)
      const cw = await page.evaluate(() => document.documentElement.clientWidth)
      expect(sw, `scrollWidth ${sw} > clientWidth ${cw}`).toBeLessThanOrEqual(cw)
      expect(await findOverflowing(page)).toEqual([])
    })

    test('keine abgeschnittenen Inhalte', async ({ page }) => {
      await loadFully(page)
      expect(await findClipped(page)).toEqual([])
    })

    test('Screenshot erstellen', async ({ page }) => {
      await loadFully(page)
      await page.screenshot({ path: path.join(SHOTS, `full-${width}.png`), fullPage: true })
    })
  })
}

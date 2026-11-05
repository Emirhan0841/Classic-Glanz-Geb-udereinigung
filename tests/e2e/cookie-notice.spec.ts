import { test, expect, type Page } from '@playwright/test'

const NOTICE = 'section[aria-label="Cookie-Hinweis"]'
const STORAGE_KEY = 'classic-glanz-cookie-hinweis'
const PAGES = ['/', '/impressum', '/datenschutz']

async function overflowOf(page: Page) {
  return page.evaluate(() => ({
    sw: document.documentElement.scrollWidth,
    cw: document.documentElement.clientWidth,
  }))
}

test.describe('Cookie-Hinweis: Verhalten', () => {
  test.use({ viewport: { width: 1440, height: 900 } })

  for (const path of PAGES) {
    test(`erscheint beim ersten Besuch auf ${path}`, async ({ page }) => {
      await page.goto(path)
      await expect(page.locator(NOTICE)).toBeVisible()
      await expect(page.locator(NOTICE)).toContainText('keine Tracking- oder Marketing-Cookies')
    })
  }

  test('Link führt zur Datenschutzerklärung', async ({ page }) => {
    await page.goto('/')
    await page.locator(NOTICE).getByRole('link', { name: 'Datenschutzerklärung' }).click()
    await expect(page).toHaveURL(/\/datenschutz$/)
    await expect(page.locator('main h1')).toHaveText('Datenschutzerklärung')
  })

  test('vor dem Klick ist der localStorage leer und es wird kein Cookie gesetzt', async ({ page }) => {
    await page.goto('/')
    await expect(page.locator(NOTICE)).toBeVisible()
    const storage = await page.evaluate(() => Object.keys(localStorage).length)
    expect(storage).toBe(0)
    expect(await page.context().cookies()).toEqual([])
  })

  test('„Verstanden“ blendet den Hinweis aus und er bleibt nach Reload ausgeblendet', async ({ page }) => {
    await page.goto('/')
    const notice = page.locator(NOTICE)
    await expect(notice).toBeVisible()

    await notice.getByRole('button', { name: 'Verstanden' }).click()
    await expect(notice).toHaveCount(0)

    const stored = await page.evaluate((key) => localStorage.getItem(key), STORAGE_KEY)
    expect(stored).toBe('verstanden')

    await page.reload()
    await expect(page.locator('#home h1')).toBeVisible()
    await expect(notice).toHaveCount(0)
  })

  test('nach dem Klick bleibt der Hinweis auf allen Seiten ausgeblendet', async ({ page }) => {
    await page.goto('/')
    await page.locator(NOTICE).getByRole('button', { name: 'Verstanden' }).click()
    for (const path of PAGES) {
      await page.goto(path)
      await expect(page.locator('main')).toBeVisible()
      await expect(page.locator(NOTICE)).toHaveCount(0)
    }
  })

  test('Website funktioniert ohne localStorage weiter', async ({ page }) => {
    await page.addInitScript(() => {
      Object.defineProperty(window, 'localStorage', {
        get() {
          throw new Error('localStorage blockiert')
        },
      })
    })
    await page.goto('/')
    await expect(page.locator('#home h1')).toBeVisible()
    await expect(page.locator(NOTICE)).toBeVisible()
    await page.locator(NOTICE).getByRole('button', { name: 'Verstanden' }).click()
    await expect(page.locator(NOTICE)).toHaveCount(0)
  })
})

test.describe('Cookie-Hinweis: Responsive und Layout', () => {
  test('kein horizontaler Überlauf bei 320 px', async ({ page }) => {
    await page.setViewportSize({ width: 320, height: 640 })
    for (const path of PAGES) {
      await page.goto(path)
      await expect(page.locator(NOTICE)).toBeVisible()
      const { sw, cw } = await overflowOf(page)
      expect(sw, `${path} bei 320px: scrollWidth ${sw} > ${cw}`).toBeLessThanOrEqual(cw)
    }
  })

  test('Hinweis bleibt am unteren Rand und verdeckt die Navigation nicht', async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 })
    await page.goto('/')
    const notice = page.locator(NOTICE)
    await expect(notice).toBeVisible()
    const box = await notice.boundingBox()
    const header = await page.locator('header').boundingBox()
    expect(box).not.toBeNull()
    expect(header).not.toBeNull()
    // Im Ausgangszustand (oben) liegt der Hinweis unterhalb der Kopfzeile
    expect(box!.y).toBeGreaterThanOrEqual(header!.y + header!.height)
  })
})

test.describe('Cookie-Hinweis: Tastatur', () => {
  test.use({ viewport: { width: 1440, height: 900 } })

  test('Link und Button sind per Tastatur erreichbar', async ({ page }) => {
    await page.goto('/')
    const notice = page.locator(NOTICE)
    const link = notice.getByRole('link', { name: 'Datenschutzerklärung' })
    const button = notice.getByRole('button', { name: 'Verstanden' })

    await link.focus()
    await page.keyboard.press('Tab')
    await expect(button).toBeFocused()
    await page.keyboard.press('Enter')
    await expect(notice).toHaveCount(0)
  })
})

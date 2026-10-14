import { test, expect } from '@playwright/test'

// Wächter für die Datenschutzerklärung: Die Seite nutzt aktuell keine Cookies, keinen Storage
// und keine externen Dienste. Schlägt dieser Test fehl, muss die Datenschutzerklärung
// (und ggf. ein Cookie-Banner) angepasst werden, bevor die Änderung live geht.

const PAGES = ['/', '/impressum', '/datenschutz']

test.describe('Datenschutz-Wächter: keine externen Dienste, Cookies oder Storage', () => {
  test('Seiten laden keine Requests zu fremden Hosts', async ({ page, baseURL }) => {
    const origin = new URL(baseURL!).host
    const foreign: string[] = []
    page.on('request', (req) => {
      const host = new URL(req.url()).host
      if (host !== origin && !req.url().startsWith('data:')) foreign.push(req.url())
    })

    for (const path of PAGES) {
      await page.goto(path)
      await page.waitForLoadState('networkidle')
    }
    expect(foreign).toEqual([])
  })

  test('Seiten setzen keine Cookies', async ({ page }) => {
    for (const path of PAGES) {
      await page.goto(path)
      await page.waitForLoadState('networkidle')
    }
    const cookies = await page.context().cookies()
    expect(cookies).toEqual([])
    expect(await page.evaluate(() => document.cookie)).toBe('')
  })

  test('Seiten schreiben nichts in localStorage oder sessionStorage', async ({ page }) => {
    for (const path of PAGES) {
      await page.goto(path)
      await page.waitForLoadState('networkidle')
    }
    const storage = await page.evaluate(() => ({
      local: Object.keys(localStorage).length,
      session: Object.keys(sessionStorage).length,
    }))
    expect(storage).toEqual({ local: 0, session: 0 })
  })

  test('Webfonts werden lokal ausgeliefert', async ({ page, baseURL }) => {
    const fonts: string[] = []
    page.on('request', (req) => {
      if (/\.(woff2?|ttf|otf)(\?|$)/.test(req.url())) fonts.push(req.url())
    })
    await page.goto('/')
    await page.waitForLoadState('networkidle')
    expect(fonts.length).toBeGreaterThan(0)
    for (const url of fonts) expect(url.startsWith(baseURL!)).toBe(true)
  })
})

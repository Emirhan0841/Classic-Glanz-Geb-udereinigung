import { test, expect, type Page, type Request } from '@playwright/test'

const form = (page: Page) => page.locator('#contact form')

// Wartet, bis ein (Smooth-)Scroll beendet ist, damit Klicks nicht auf bewegte Elemente zielen
async function settleScroll(page: Page) {
  let last = -1
  for (let i = 0; i < 40; i++) {
    const y = await page.evaluate(() => window.scrollY)
    if (y === last) return
    last = y
    await page.waitForTimeout(100)
  }
}

async function fillValid(page: Page) {
  await settleScroll(page)
  await page.fill('#name', 'Max Mustermann')
  await page.fill('#company', 'Musterfirma GmbH')
  await page.fill('#email', 'max@example.de')
  await page.fill('#phone', '+49 721 123456')
  await page.selectOption('#service', 'fensterreinigung')
  await page.fill('#message', 'Bitte um Angebot für 3 Büroetagen.')
  await page.check('#privacy')
}

test.describe('Kontaktformular', () => {
  test.beforeEach(async ({ page }) => {
    // Reduzierte Bewegung: Scroll springt sofort statt zu animieren, daher stabile Klicks
    await page.emulateMedia({ reducedMotion: 'reduce' })
    await page.goto('/#contact')
    await expect(form(page)).toBeVisible()
    await settleScroll(page)
  })

  test('Pflichtfelder werden per Browser-Validierung blockiert', async ({ page }) => {
    await form(page).locator('button[type="submit"]').click()
    const valid = await form(page).evaluate((f: HTMLFormElement) => f.checkValidity())
    expect(valid).toBe(false)
    const firstInvalid = await form(page).evaluate(
      (f: HTMLFormElement) => (f.querySelector(':invalid') as HTMLElement | null)?.id,
    )
    expect(firstInvalid).toBe('name')
  })

  test('ungültige E-Mail wird abgelehnt', async ({ page }) => {
    await fillValid(page)
    await page.fill('#email', 'keine-email')
    const typeMismatch = await page.locator('#email').evaluate((el: HTMLInputElement) => el.validity.typeMismatch)
    expect(typeMismatch).toBe(true)
  })

  test('Datenschutz-Checkbox ist Pflicht', async ({ page }) => {
    await fillValid(page)
    await page.uncheck('#privacy')
    const valid = await form(page).evaluate((f: HTMLFormElement) => f.checkValidity())
    expect(valid).toBe(false)
    await expect(page.locator('#privacy')).toHaveJSProperty('validity.valueMissing', true)
  })

  test('Dropdown enthält alle Leistungen und lässt sich wählen', async ({ page }) => {
    const options = await page.locator('#service option').allTextContents()
    expect(options).toEqual([
      '-- Bitte wählen --',
      'Gebäudereinigung',
      'Fenster- & Glasreinigung',
      'Grundreinigung',
      'Unterhaltsreinigung',
      'Hochdruckreinigung',
      'Winterdienst',
    ])
    for (const value of ['gebaudereinigung', 'winterdienst', 'hochdruckreinigung']) {
      await page.selectOption('#service', value)
      await expect(page.locator('#service')).toHaveValue(value)
    }
  })

  test('gültige Eingaben werden per POST an Netlify übertragen', async ({ page }) => {
    let captured: Request | undefined
    // Netlify Forms nimmt POST auf "/" entgegen. Lokal wird die Antwort gemockt.
    await page.route('**/', async (route) => {
      if (route.request().method() === 'POST') {
        captured = route.request()
        await route.fulfill({ status: 200, contentType: 'text/html', body: '<html></html>' })
      } else {
        await route.continue()
      }
    })

    const dialogs: string[] = []
    page.on('dialog', async (d) => {
      dialogs.push(d.message())
      await d.accept()
    })

    await fillValid(page)
    await form(page).locator('button[type="submit"]').click()
    await expect.poll(() => dialogs.length).toBe(1)

    expect(dialogs[0]).toContain('Danke für Ihre Anfrage')
    expect(captured).toBeDefined()
    expect(captured!.headers()['content-type']).toBe('application/x-www-form-urlencoded')

    const body = new URLSearchParams(captured!.postData() ?? '')
    expect(body.get('form-name')).toBe('contact')
    expect(body.get('name')).toBe('Max Mustermann')
    expect(body.get('company')).toBe('Musterfirma GmbH')
    expect(body.get('email')).toBe('max@example.de')
    expect(body.get('phone')).toBe('+49 721 123456')
    expect(body.get('service')).toBe('fensterreinigung')
    expect(body.get('message')).toBe('Bitte um Angebot für 3 Büroetagen.')
    expect(body.get('privacy')).toBe('on')

    // Nach Erfolg wird das Formular geleert
    await expect(page.locator('#name')).toHaveValue('')
    await expect(page.locator('#service')).toHaveValue('')
  })

  test('Server-Fehler zeigt Fehlermeldung und behält Eingaben', async ({ page }) => {
    await page.route('**/', (route) =>
      route.request().method() === 'POST'
        ? route.fulfill({ status: 500, body: 'error' })
        : route.continue(),
    )

    const dialogs: string[] = []
    page.on('dialog', async (d) => {
      dialogs.push(d.message())
      await d.accept()
    })

    await fillValid(page)
    await form(page).locator('button[type="submit"]').click()
    await expect.poll(() => dialogs.length).toBe(1)

    expect(dialogs[0]).toContain('konnte nicht gesendet werden')
    await expect(page.locator('#name')).toHaveValue('Max Mustermann')
  })

  test('Netzwerkfehler zeigt Fehlermeldung', async ({ page }) => {
    await page.route('**/', (route) =>
      route.request().method() === 'POST' ? route.abort('failed') : route.continue(),
    )

    const dialogs: string[] = []
    page.on('dialog', async (d) => {
      dialogs.push(d.message())
      await d.accept()
    })

    await fillValid(page)
    await form(page).locator('button[type="submit"]').click()
    await expect.poll(() => dialogs.length).toBe(1)
    expect(dialogs[0]).toContain('konnte nicht gesendet werden')
  })

  test('Verstecktes Netlify-Formular ist im Markup vorhanden', async ({ page }) => {
    // Das statische Formular in index.html dient nur der Netlify-Erkennung beim Build.
    // Netlify schreibt es beim Deploy um (Honeypot-Attribut wird entfernt), daher nur Name und hidden prüfen.
    const hidden = page.locator('form[name="contact"][hidden]')
    await expect(hidden).toHaveCount(1)
    await expect(hidden).toBeHidden()
  })

  test('React-Formular ist für Netlify markiert', async ({ page }) => {
    await expect(form(page)).toHaveAttribute('data-netlify', 'true')
    await expect(form(page)).toHaveAttribute('name', 'contact')
  })
})

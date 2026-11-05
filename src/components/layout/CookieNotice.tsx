import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Container } from '../ui/Container'
import { Button } from '../ui/Button'

const STORAGE_KEY = 'classic-glanz-cookie-hinweis'

// Speicher kann in privaten Fenstern oder bei blockierten Website-Daten fehlen oder werfen
const readDismissed = () => {
  try {
    return window.localStorage.getItem(STORAGE_KEY) === 'verstanden'
  } catch {
    return false
  }
}

const storeDismissed = () => {
  try {
    window.localStorage.setItem(STORAGE_KEY, 'verstanden')
  } catch {
    // Ohne Speicher bleibt der Hinweis bis zum nächsten Laden sichtbar
  }
}

export const CookieNotice: React.FC = () => {
  const [visible, setVisible] = useState(() => !readDismissed())

  if (!visible) return null

  const dismiss = () => {
    storeDismissed()
    setVisible(false)
  }

  return (
    <section
      aria-label="Cookie-Hinweis"
      className="sticky bottom-0 z-40 bg-white border-t border-border shadow-light"
    >
      <Container className="py-12 md:py-16">
        <div className="flex flex-col gap-12 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-foreground">
            Diese Website verwendet keine Tracking- oder Marketing-Cookies. Mehr dazu in unserer{' '}
            <Link
              to="/datenschutz"
              className="text-petrol underline underline-offset-2 hover:text-navy rounded-xs focus-visible:outline-[3px] focus-visible:outline-tuerkis focus-visible:outline-offset-2"
            >
              Datenschutzerklärung
            </Link>
            .
          </p>
          <Button variant="primary" size="sm" onClick={dismiss} className="shrink-0 w-full sm:w-auto">
            Verstanden
          </Button>
        </div>
      </Container>
    </section>
  )
}

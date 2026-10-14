import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Container } from '../ui/Container'

interface LegalPageLayoutProps {
  title: string
  children: React.ReactNode
}

export const LegalPageLayout: React.FC<LegalPageLayoutProps> = ({ title, children }) => {
  useEffect(() => {
    document.title = `${title} | Classic Glanz`
    return () => {
      document.title = 'Classic Glanz | Professionelle Gebäudereinigung Karlsruhe'
    }
  }, [title])

  return (
    <section className="bg-white">
      <Container className="section-spacing">
        <div className="max-w-2xl">
          <Link to="/" className="cg-btn cg-btn--outline text-sm px-12 py-4 mb-48 inline-flex">
            ← Zur Startseite
          </Link>
          <span className="subline block">Rechtliches</span>
          <h1 className="font-display font-semibold text-navy mb-32">{title}</h1>
          <div className="space-y-24 text-base text-foreground">{children}</div>
        </div>
      </Container>
    </section>
  )
}

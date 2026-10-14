import React from 'react'
import { Container } from '../ui/Container'
import { Button } from '../ui/Button'
import { company } from '../../data/company'

export const Hero: React.FC = () => {
  return (
    <section id="home" className="relative overflow-hidden bg-white">
      <Container className="grid grid-cols-1 md:grid-cols-[6fr_4fr] gap-48 md:gap-64 items-center py-48 md:py-64">
        {/* Text Content */}
        <div className="flex flex-col justify-center">
          <h1 className="font-display font-semibold text-navy leading-tight mb-24"
              style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}>
            Professionelle Gebäudereinigung
          </h1>
          <p className="text-base md:text-lg text-foreground mb-24 leading-relaxed max-w-lg">
            {company.description}
          </p>
          <div className="flex flex-col sm:flex-row gap-12 max-w-sm">
            <Button variant="primary" size="lg">
              Angebot anfragen
            </Button>
            <Button variant="outline" size="lg">
              Leistungen
            </Button>
          </div>
        </div>

        {/* Hero Image */}
        <div className="relative w-full aspect-square md:aspect-auto md:h-[500px] bg-muted rounded-lg overflow-hidden border border-tuerkis/10">
          <img
            src="/classic-glanz-images/hero/hero-office-cleaning.webp"
            alt="Professionelle Büroreinigung mit modernem Foyer"
            className="w-full h-full object-cover object-center"
            loading="eager"
          />
        </div>
      </Container>
    </section>
  )
}

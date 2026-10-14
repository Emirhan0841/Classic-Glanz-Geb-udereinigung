import React from 'react'
import { Container } from '../ui/Container'
import { Icon } from '../ui/Icon'

const advantages = [
  {
    title: 'Persönlicher Ansprechpartner',
    description: 'Ein Ansprechpartner, der Ihre Anforderungen kennt und verantwortlich ist.',
    icon: 'briefcase',
  },
  {
    title: 'Flexible Reinigungstermine',
    description: 'Nach Ihren Wünschen: täglich, wöchentlich, monatlich oder nach Bedarf.',
    icon: 'check',
  },
  {
    title: 'Individuelle Angebote',
    description: 'Kostenlose und unverbindliche Angebote, speziell auf Ihren Bedarf zugeschnitten.',
    icon: 'briefcase',
  },
  {
    title: 'Gründlich & Zuverlässig',
    description: 'Professionelle Standards, moderne Methoden und sichtbare Sauberkeit.',
    icon: 'sparkles',
  },
]

export const Why: React.FC = () => {
  return (
    <section className="bg-white">
      <Container className="section-spacing">
        <span className="subline">Vorteile</span>
        <h2 className="font-display text-3xl md:text-5xl text-navy mb-64">
          Warum Sie uns wählen sollten
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-48 md:gap-64">
          {advantages.map((advantage) => (
            <div key={advantage.title} className="flex gap-24 p-24 rounded-md border border-tuerkis/20 hover:border-petrol hover:bg-muted/30 transition-all">
              <div className="flex-shrink-0">
                <div className="w-48 h-48 rounded-md bg-tuerkis/10 flex items-center justify-center">
                  <Icon name={advantage.icon} size={24} className="text-tuerkis" />
                </div>
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-semibold text-lg text-navy mb-12">
                  {advantage.title}
                </h3>
                <p className="text-base text-foreground">
                  {advantage.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}

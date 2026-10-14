import React from 'react'
import { Container } from '../ui/Container'
import { Icon } from '../ui/Icon'

const steps = [
  {
    number: '1',
    title: 'Anfrage senden',
    description: 'Kontaktieren Sie uns per Telefon, E-Mail oder über das Kontaktformular.',
  },
  {
    number: '2',
    title: 'Bedarf besprechen',
    description: 'Wir besprechen Ihre Anforderungen und entwickeln ein passendes Konzept.',
  },
  {
    number: '3',
    title: 'Angebot erhalten',
    description: 'Sie erhalten ein unverbindliches, transparentes Angebot für Ihre Reinigung.',
  },
  {
    number: '4',
    title: 'Reinigung startet',
    description: 'Nach Absprache beginnt die professionelle Reinigung nach Ihren Vorgaben.',
  },
]

export const Process: React.FC = () => {
  return (
    <section id="process" className="bg-muted border-y border-tuerkis/20">
      <Container className="section-spacing">
        <div className="mb-64">
          <span className="subline">Ablauf</span>
          <h2 className="font-display text-3xl md:text-5xl text-navy mb-16">
            So funktioniert's
          </h2>
          <p className="text-base text-foreground max-w-2xl">
            Der Weg zu Ihrer professionellen Gebäudereinigung ist einfach und unkompliziert.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-32 md:gap-24">
          {steps.map((step, index) => (
            <div key={step.number}>
              <div className="mb-24">
                <div className="inline-flex items-center justify-center w-48 h-48 lg:w-56 lg:h-56 rounded-md bg-navy text-white font-semibold text-2xl mb-16">
                  {step.number}
                </div>
                <h3 className="font-semibold text-lg text-navy mb-12">
                  {step.title}
                </h3>
                <p className="text-base text-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>

              {index < steps.length - 1 && (
                <div className="hidden md:flex items-center justify-center h-16 -mr-32">
                  <div className="w-12 h-0.5 bg-tuerkis/30" />
                  <Icon name="arrow-right" size={16} className="text-tuerkis/30 absolute ml-16" />
                </div>
              )}
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}

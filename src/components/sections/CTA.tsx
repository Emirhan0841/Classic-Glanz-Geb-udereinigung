import React from 'react'
import { Container } from '../ui/Container'
import { Button } from '../ui/Button'

export const CTA: React.FC = () => {
  return (
    <section className="bg-navy border-y border-navy">
      <Container className="py-64 md:py-96 text-center">
        <h2 className="font-display text-4xl md:text-5xl text-white font-semibold mb-24 max-w-3xl mx-auto">
          Kontaktieren Sie uns für ein kostenloses Angebot
        </h2>
        <p className="text-base md:text-lg text-white/75 mb-40 max-w-2xl mx-auto">
          Schildern Sie uns kurz Ihren Bedarf und erhalten Sie ein unverbindliches Angebot von unserem Team.
        </p>
        <Button variant="primary" size="lg">
          Jetzt Angebot anfragen
        </Button>
      </Container>
    </section>
  )
}

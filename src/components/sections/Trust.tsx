import React from 'react'
import { Container } from '../ui/Container'
import { Icon } from '../ui/Icon'

const trustPoints = [
  { label: 'Zuverlässige Termine', icon: 'check' },
  { label: 'Faire & transparente Preise', icon: 'check' },
  { label: 'Gründliche Reinigung', icon: 'check' },
  { label: 'Karlsruhe & Umgebung', icon: 'check' },
]

export const Trust: React.FC = () => {
  return (
    <section className="bg-muted border-y border-tuerkis/20">
      <Container className="py-32 md:py-48">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-24 md:gap-32">
          {trustPoints.map((point) => (
            <div key={point.label} className="flex items-start gap-12">
              <Icon name={point.icon} size={20} className="text-tuerkis flex-shrink-0 mt-2" />
              <p className="text-sm md:text-base font-medium text-navy">
                {point.label}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}

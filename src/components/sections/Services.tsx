import React, { useState } from 'react'
import { Container } from '../ui/Container'
import { services } from '../../data/services'
import { additionalServices } from '../../data/additionalServices'
import { Icon } from '../ui/Icon'

const serviceImages: Record<string, string> = {
  bauendreinigung: '/classic-glanz-images/services/service-building-cleaning.webp',
  fensterreinigung: '/classic-glanz-images/services/service-window-cleaning.webp',
  grundreinigung: '/classic-glanz-images/services/service-deep-cleaning.webp',
  unterhaltsreinigung: '/classic-glanz-images/services/service-maintenance-cleaning.webp',
  hochdruckreinigung: '/classic-glanz-images/services/service-pressure-washing.webp',
  winterdienst: '/classic-glanz-images/services/service-winter-service.webp',
  entrumpelung: '/classic-glanz-images/services/service-clearance.webp',
  hausmeisterservice: '/classic-glanz-images/services/service-caretaker.webp',
}

// Fehlendes Bild: neutrale Fläche statt kaputtem Bildsymbol oder sichtbarem Alt-Text
const ServiceImage: React.FC<{ src?: string; alt: string }> = ({ src, alt }) => {
  const [failed, setFailed] = useState(false)

  return (
    <div className="w-full xl:w-40 flex-shrink-0 aspect-[16/10] xl:aspect-[4/3] rounded-md overflow-hidden bg-muted">
      {src && !failed ? (
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-cover"
          loading="lazy"
          onError={() => setFailed(true)}
        />
      ) : (
        <span aria-hidden="true" className="block w-full h-full" />
      )}
    </div>
  )
}

export const Services: React.FC = () => {
  return (
    <section id="services" className="bg-white">
      <Container className="section-spacing">
        <div className="mb-64">
          <span className="subline">Leistungen</span>
          <h2 className="font-display text-3xl md:text-5xl text-navy mb-16">
            Unsere Services
          </h2>
          <p className="text-base text-foreground max-w-2xl">
            Von Unterhaltsreinigung bis Hochdruckreinigung: Wir bieten professionelle Reinigungsservices für jeden Bedarf.
          </p>
        </div>

        {/* Services Grid – 2 Spalten */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-48 md:gap-64">
          {services.map((service) => (
            <div
              key={service.id}
              className="group border-l-4 border-tuerkis pl-16 md:pl-24 py-12 hover:border-petrol transition-colors min-w-0"
            >
              {/* Bild oben, Text darunter. Ab xl: Bild links, Text rechts (genug Textbreite für lange Wörter) */}
              <div className="flex flex-col gap-16 xl:flex-row xl:gap-24 xl:items-start min-w-0">
                {/* Service Image */}
                <ServiceImage src={serviceImages[service.id]} alt={service.title} />

                {/* Service Text */}
                <div className="flex-1 min-w-0">
                  <h3 className="text-base md:text-lg font-semibold mb-8 text-navy group-hover:text-petrol transition-colors hyphens-none [word-break:normal] [overflow-wrap:normal]">
                    {service.title}
                  </h3>
                  <p className="text-sm md:text-base text-foreground leading-relaxed [word-break:normal] [overflow-wrap:normal]">
                    {service.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Weitere Reinigungsleistungen – kompakte Kacheln */}
        <div className="mt-64 pt-48 border-t border-border">
          <h3 className="text-base md:text-lg font-semibold text-navy mb-16">
            Weitere Reinigungsleistungen
          </h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
            {additionalServices.map((service) => (
              <li
                key={service.id}
                className="flex items-center gap-12 min-w-0 rounded-sm border border-border bg-white px-12 py-12 hover:border-tuerkis transition-colors"
              >
                <span className="flex-shrink-0 flex items-center justify-center w-32 h-32 rounded-full bg-muted text-petrol">
                  <Icon name={service.icon} size={16} />
                </span>
                <span className="text-sm text-foreground leading-snug [word-break:normal] [overflow-wrap:normal] min-w-0">
                  {service.title}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  )
}

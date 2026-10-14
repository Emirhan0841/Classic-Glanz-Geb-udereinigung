import React from 'react'
import { Container } from '../ui/Container'

export const About: React.FC = () => {
  return (
    <section id="about" className="bg-white border-y border-tuerkis/20">
      <Container className="section-spacing">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-48 md:gap-64 items-center">
          {/* Text Content */}
          <div>
            <span className="subline">Über Classic Glanz</span>
            <h2 className="font-display text-4xl md:text-5xl text-navy mb-32">
              Sauberkeit, auf die Sie sich verlassen können
            </h2>

            <div className="space-y-24">
              <p className="text-base md:text-lg text-foreground leading-relaxed">
                Seit Jahren vertrauen Privatkunden, Büros und Gewerbekunden in Karlsruhe und Umgebung auf unsere professionelle Gebäudereinigung. Wir verstehen, dass Sauberkeit nicht verhandelbar ist.
              </p>

              <div className="space-y-24">
                <div className="border-l-4 border-tuerkis pl-24">
                  <h3 className="font-semibold text-lg text-navy mb-8">Persönliche Betreuung</h3>
                  <p className="text-base text-foreground leading-relaxed">
                    Sie erhalten einen persönlichen Ansprechpartner, der Ihre Anforderungen versteht und umsetzen kann.
                  </p>
                </div>

                <div className="border-l-4 border-petrol pl-24">
                  <h3 className="font-semibold text-lg text-navy mb-8">Gründliche Arbeit</h3>
                  <p className="text-base text-foreground leading-relaxed">
                    Jeder Reinigungseinsatz wird sorgfältig geplant und ausgeführt. Wir achten auf Details und verwenden moderne Reinigungsmethoden.
                  </p>
                </div>

                <div className="border-l-4 border-tuerkis pl-24">
                  <h3 className="font-semibold text-lg text-navy mb-8">Zuverlässigkeit & Flexibilität</h3>
                  <p className="text-base text-foreground leading-relaxed">
                    Feste Termine oder flexible Vereinbarung – wir passen uns Ihren Bedürfnissen an. Sie können sich auf uns verlassen.
                  </p>
                </div>

                <div className="border-l-4 border-petrol pl-24">
                  <h3 className="font-semibold text-lg text-navy mb-8">Individuelle Reinigungskonzepte</h3>
                  <p className="text-base text-foreground leading-relaxed">
                    Jede Fläche ist unterschiedlich. Wir entwickeln maßgeschneiderte Reinigungslösungen für Ihren spezifischen Bedarf.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Team Image */}
          <div className="relative rounded-lg overflow-hidden border border-tuerkis/10">
            <img
              src="/classic-glanz-images/about/about-team.webp"
              alt="Professionelles Reinigungsteam im modernen Büro"
              className="w-full h-auto object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </Container>
    </section>
  )
}

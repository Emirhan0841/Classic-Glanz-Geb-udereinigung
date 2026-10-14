import React from 'react'
import { Container } from '../ui/Container'

// Platzhalter: Alle eckigen Klammern vor dem Livegang durch echte Angaben ersetzen
// und die Texte rechtlich prüfen lassen.
const Placeholder: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <span className="bg-tuerkis/15 text-navy px-4 rounded-xs">{children}</span>
)

export const Legal: React.FC = () => {
  return (
    <>
      <section id="impressum" className="bg-white border-y border-tuerkis/20">
        <Container className="section-spacing">
          <div className="max-w-2xl">
            <span className="subline">Rechtliches</span>
            <h2 className="font-display text-4xl md:text-5xl text-navy font-semibold mb-32">
              Impressum
            </h2>
            <div className="space-y-16 text-base text-foreground">
              <p>
                <Placeholder>[Firmenname und Rechtsform]</Placeholder>
                <br />
                <Placeholder>[Straße und Hausnummer]</Placeholder>
                <br />
                <Placeholder>[PLZ und Ort]</Placeholder>
              </p>
              <p>
                Vertreten durch: <Placeholder>[Name des Inhabers / der Geschäftsführung]</Placeholder>
              </p>
              <p>
                Telefon: <Placeholder>[Telefonnummer]</Placeholder>
                <br />
                E-Mail: <Placeholder>[E-Mail-Adresse]</Placeholder>
              </p>
              <p>
                Registereintrag: <Placeholder>[Registergericht und Nummer, falls vorhanden]</Placeholder>
                <br />
                USt-IdNr.: <Placeholder>[Umsatzsteuer-Identifikationsnummer, falls vorhanden]</Placeholder>
              </p>
              <p>
                Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV: <Placeholder>[Name und Anschrift]</Placeholder>
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section id="datenschutz" className="bg-white">
        <Container className="section-spacing">
          <div className="max-w-2xl">
            <span className="subline">Rechtliches</span>
            <h2 className="font-display text-4xl md:text-5xl text-navy font-semibold mb-32">
              Datenschutzerklärung
            </h2>
            <div className="space-y-24 text-base text-foreground">
              <div>
                <h3 className="font-semibold text-navy mb-8">1. Verantwortliche Stelle</h3>
                <p>
                  <Placeholder>[Firmenname, Anschrift und Kontakt wie im Impressum]</Placeholder>
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-navy mb-8">2. Hosting</h3>
                <p>
                  Diese Website wird bei <Placeholder>[Netlify, Inc., Anbieter und Serverstandort bestätigen]</Placeholder> gehostet.
                  Beim Aufruf können technisch notwendige Daten (z. B. IP-Adresse, Zeitpunkt, Browserdaten) in Server-Logs verarbeitet werden.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-navy mb-8">3. Kontaktformular</h3>
                <p>
                  Wenn Sie uns über das Formular kontaktieren, verarbeiten wir Ihre Angaben (Name, Unternehmen, E-Mail, Telefon,
                  gewünschte Leistung, Nachricht) zur Bearbeitung Ihrer Anfrage. Rechtsgrundlage ist
                  <Placeholder>[Art. 6 Abs. 1 lit. b DSGVO bei Vertragsanbahnung bzw. lit. f]</Placeholder>.
                  Die Daten werden über Netlify Forms übermittelt und gespeichert.
                  <Placeholder>[Speicherdauer angeben]</Placeholder>
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-navy mb-8">4. Ihre Rechte</h3>
                <p>
                  Sie haben das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung, Datenübertragbarkeit
                  sowie Widerspruch gegen die Verarbeitung und das Recht auf Beschwerde bei einer Aufsichtsbehörde.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-navy mb-8">5. Weitere Abschnitte</h3>
                <p>
                  <Placeholder>[Cookies und eingebundene Dienste: aktuell keine externen Dienste eingebunden, vor Livegang prüfen]</Placeholder>
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}

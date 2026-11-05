import React from 'react'
import { LegalPageLayout } from '../components/layout/LegalPageLayout'
import { Todo } from '../components/ui/Todo'
import { company } from '../data/company'

const H = ({ children }: { children: React.ReactNode }) => (
  <h3 className="font-semibold text-lg md:text-2xl text-navy mb-8 mt-16">{children}</h3>
)

export const DatenschutzPage: React.FC = () => (
  <LegalPageLayout title="Datenschutzerklärung">
    <p>
      Diese Datenschutzerklärung informiert, welche personenbezogenen Daten beim Besuch dieser Website
      verarbeitet werden. Stand: 02.11.2026
    </p>

    <H>1. Verantwortliche Stelle</H>
    <p>
      {company.name}, Inhaber {company.owner}
      <br />
      Anschrift: siehe <a href="/impressum">Impressum</a>
      <br />
      E-Mail: <a href={company.contact.emailHref}>{company.contact.email}</a>
      <br />
      Telefon: <a href={company.contact.phoneHref}>{company.contact.phone}</a>
    </p>

    <H>2. Beim Aufruf der Website (Server-Protokolle)</H>
    <p>
      Beim Aufruf werden technisch notwendige Daten verarbeitet, die Ihr Browser übermittelt: IP-Adresse,
      Datum und Uhrzeit, aufgerufene Seite, Browser- und Betriebssystemangaben. Der Hosting-Dienst verarbeitet
      diese Daten, um die Website bereitzustellen und sicher zu betreiben.
    </p>
    <p>
      Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an einem sicheren und stabilen Betrieb).
      Speicherdauer der Server-Protokolle: <Todo>Aufbewahrungsfrist der Server-Logs bei Netlify prüfen und hier nennen</Todo>
    </p>

    <H>3. Hosting bei Netlify</H>
    <p>
      Diese Website wird bei Netlify, Inc. (USA) gehostet. Netlify verarbeitet die oben genannten Daten im
      Auftrag des Betreibers. <Todo>Abschluss eines Auftragsverarbeitungsvertrags (AVV) mit Netlify bestätigen</Todo>
    </p>
    <p>
      Drittlandtransfer: <Todo>Angabe zu einer Übermittlung in Drittländer und der Grundlage dafür prüfen und eintragen</Todo>
    </p>

    <H>4. Kontaktformular</H>
    <p>
      Wenn Sie uns über das Kontaktformular eine Anfrage senden, verarbeiten wir die Angaben Name, Unternehmen
      (freiwillig), E-Mail-Adresse, Telefonnummer, gewünschte Leistung und Nachricht. Die Angaben dienen
      ausschließlich der Bearbeitung Ihrer Anfrage und einer möglichen Anschlussfrage.
    </p>
    <p>
      Rechtsgrundlage: Art. 6 Abs. 1 lit. b DSGVO (vorvertragliche Maßnahmen auf Ihre Anfrage hin).
      Die Einsendungen werden über Netlify Forms gespeichert. Benachrichtigungen über neue Einsendungen
      gehen per E-Mail an {company.contact.email}.
    </p>
    <p>
      Speicherdauer: Kontaktanfragen werden nach 6 Monaten gelöscht, sofern keine gesetzlichen
      Aufbewahrungspflichten oder laufenden Vorgänge entgegenstehen.
    </p>

    <H>5. Cookies und Speicherung im Browser</H>
    <p>
      Diese Website verwendet keine Cookies und keine Tracking-Dienste. Nach Klick auf „Verstanden“ im
      Cookie-Hinweis wird nur diese Hinweis-Auswahl im lokalen Speicher (localStorage) Ihres Browsers gespeichert.
    </p>

    <H>6. Externe Dienste</H>
    <p>
      Schriften werden von unserem eigenen Server ausgeliefert, nicht von Drittanbietern. Es sind keine
      Analyse- oder Tracking-Werkzeuge, keine eingebetteten Karten und keine externen Videos eingebunden.
    </p>

    <H>7. Ihre Rechte</H>
    <p>
      Sie haben das Recht auf Auskunft (Art. 15 DSGVO), Berichtigung (Art. 16), Löschung (Art. 17),
      Einschränkung der Verarbeitung (Art. 18), Datenübertragbarkeit (Art. 20) und Widerspruch gegen eine
      Verarbeitung auf Grundlage berechtigter Interessen (Art. 21 DSGVO).
    </p>
    <p>
      Sie haben zudem das Recht, sich bei einer Datenschutz-Aufsichtsbehörde zu beschweren (Art. 77 DSGVO).
      Zuständig in Baden-Württemberg ist der Landesbeauftragte für den Datenschutz und die Informationsfreiheit.
    </p>

    <H>8. Datenschutzbeauftragter</H>
    <p>
      <Todo>Prüfen, ob ein Datenschutzbeauftragter benannt werden muss, und ggf. Kontakt eintragen</Todo>
    </p>
  </LegalPageLayout>
)

import React from 'react'
import { LegalPageLayout } from '../components/layout/LegalPageLayout'
import { Todo } from '../components/ui/Todo'
import { company } from '../data/company'

export const ImpressumPage: React.FC = () => (
  <LegalPageLayout title="Impressum">
    <p className="text-sm text-muted-foreground">
      Angaben gemäß § 5 DDG (Digitale-Dienste-Gesetz).
    </p>

    <div>
      <h3 className="font-semibold text-lg md:text-2xl text-navy mb-8">Anbieter</h3>
      <p>
        {company.name}
        <br />
        Inhaber: {company.owner}
        <br />
        {company.address.street}
        <br />
        {company.address.zip} {company.address.city}
        <br />
        {company.address.country}
      </p>
    </div>

    <div>
      <h3 className="font-semibold text-lg md:text-2xl text-navy mb-8">Kontakt</h3>
      <p>
        Telefon: <a href={company.contact.phoneHref}>{company.contact.phone}</a>
        <br />
        E-Mail: <a href={company.contact.emailHref}>{company.contact.email}</a>
      </p>
    </div>

    <div>
      <h3 className="font-semibold text-lg md:text-2xl text-navy mb-8">Rechtsform und Registrierung</h3>
      <p>
        <Todo>Rechtsform (z. B. Einzelunternehmen) und ggf. Registereintrag (Handelsregister, Nummer) angeben</Todo>
      </p>
    </div>

    <div>
      <h3 className="font-semibold text-lg md:text-2xl text-navy mb-8">Umsatzsteuer-ID</h3>
      <p>
        <Todo>USt-IdNr. nach § 27a UStG eintragen, falls vorhanden – sonst entfällt dieser Abschnitt</Todo>
      </p>
    </div>

    <div>
      <h3 className="font-semibold text-lg md:text-2xl text-navy mb-8">Berufsrechtliche Angaben</h3>
      <p>
        <Todo>
          Gebäudereinigung ist ein Handwerk: Handwerksrolle bzw. Handwerkskammer, Gewerbeanmeldung
          und zuständige Aufsichtsbehörde prüfen und ggf. angeben
        </Todo>
      </p>
    </div>

    <div>
      <h3 className="font-semibold text-lg md:text-2xl text-navy mb-8">Verantwortlich für Inhalte</h3>
      <p>
        {company.owner}, Anschrift wie oben.
        <br />
        <Todo>Nur relevant bei redaktionellen Inhalten (§ 18 Abs. 2 MStV) – bestätigen oder streichen</Todo>
      </p>
    </div>

    <div>
      <h3 className="font-semibold text-lg md:text-2xl text-navy mb-8">Verbraucherstreitbeilegung</h3>
      <p>
        Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
        Verbraucherschlichtungsstelle teilzunehmen.
      </p>
    </div>
  </LegalPageLayout>
)

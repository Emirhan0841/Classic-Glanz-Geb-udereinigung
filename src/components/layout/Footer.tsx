import React from 'react'
import { Container } from '../ui/Container'
import { company } from '../../data/company'

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-navy text-white">
      <Container className="py-64 md:py-96">
        {/* Logo */}
        <div className="mb-64">
          <img
            src="/brand/logo/logo-horizontal-weiss-auf-dunkel.svg"
            alt="Classic Glanz Logo"
            className="cg-logo cg-logo--footer"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-48 md:gap-64 mb-64">
          {/* Company Info */}
          <div>
            <h4 className="font-semibold text-sm mb-16 text-white">Classic Glanz</h4>
            <p className="text-sm text-white/75 leading-relaxed">
              Professionelle Gebäudereinigung in Karlsruhe und Umgebung für Privat- und Gewerbekunden.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold text-sm mb-16 text-white">Navigation</h4>
            <ul className="space-y-8 text-sm">
              <li><a href="#services" className="text-white/75 hover:text-tuerkis transition-colors">Leistungen</a></li>
              <li><a href="#about" className="text-white/75 hover:text-tuerkis transition-colors">Über uns</a></li>
              <li><a href="#contact" className="text-white/75 hover:text-tuerkis transition-colors">Kontakt</a></li>
              <li><a href="#datenschutz" className="text-white/75 hover:text-tuerkis transition-colors">Datenschutz</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold text-sm mb-16 text-white">Rechtliches</h4>
            <ul className="space-y-8 text-sm">
              <li><a href="#datenschutz" className="text-white/75 hover:text-tuerkis transition-colors">Datenschutz</a></li>
              <li><a href="#impressum" className="text-white/75 hover:text-tuerkis transition-colors">Impressum</a></li>
              <li><a href="#agb" className="text-white/75 hover:text-tuerkis transition-colors">AGB</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-sm mb-16 text-white">Kontakt</h4>
            <ul className="space-y-12 text-sm">
              <li>
                <p className="text-white/50 text-xs mb-4 uppercase tracking-widest">Telefon</p>
                <a href="tel:+49123456789" className="text-white/75 hover:text-tuerkis transition-colors font-medium">
                  {company.contact.phone}
                </a>
              </li>
              <li>
                <p className="text-white/50 text-xs mb-4 uppercase tracking-widest">E-Mail</p>
                <a href="mailto:info@classic-glanz.de" className="text-white/75 hover:text-tuerkis transition-colors font-medium">
                  {company.contact.email}
                </a>
              </li>
              <li>
                <p className="text-white/50 text-xs mb-4 uppercase tracking-widest">Adresse</p>
                <p className="text-white/75 font-medium">
                  {company.contact.address}
                </p>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-32 text-center text-sm text-white/50">
          <p>&copy; {currentYear} Classic Glanz Gebäudereinigung. Alle Rechte vorbehalten.</p>
        </div>
      </Container>
    </footer>
  )
}

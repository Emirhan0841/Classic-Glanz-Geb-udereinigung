import type { NavItem } from '../types'

// Hash-Links verweisen immer auf die Startseite, damit sie auch von /impressum und /datenschutz funktionieren
export const navItems: NavItem[] = [
  { label: 'Startseite', href: '/#home' },
  { label: 'Leistungen', href: '/#services' },
  { label: 'Über uns', href: '/#about' },
  { label: 'Ablauf', href: '/#process' },
  { label: 'Kontakt', href: '/#contact' },
]

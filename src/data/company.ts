// Firmendaten zentral pflegen: Footer, Impressum und Datenschutz lesen von hier.
export const company = {
  name: 'Classic Glanz Gebäudereinigung',
  owner: 'Görkem Cici',
  tagline: 'Professionelle Gebäudereinigung in Karlsruhe',
  description: 'Zuverlässige Reinigung für Büros, Gewerbe und Privathaushalte in Karlsruhe und Umgebung.',
  address: {
    street: 'Franz-Luststraße 20',
    zip: '76185',
    city: 'Karlsruhe',
    country: 'Deutschland',
  },
  contact: {
    phone: '0176 57809179',
    phoneHref: 'tel:+4917657809179',
    email: 'info@classic-glanz-gebäudereinigung.de',
    // Punycode-Form für mailto:, damit Mail-Programme die Domain sicher auflösen
    emailHref: 'mailto:info@xn--classic-glanz-gebudereinigung-hqc.de',
    address: 'Franz-Luststraße 20, 76185 Karlsruhe',
  },
  regions: ['Karlsruhe', 'Umgebung'],
}

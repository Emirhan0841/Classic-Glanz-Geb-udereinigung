import type { Service } from '../types'

export const services: Service[] = [
  {
    id: 'unterhaltsreinigung',
    title: 'Unterhaltsreinigung',
    description: 'Regelmäßige Reinigung von Büros, Geschäftsräumen und anderen Objekten nach individuellem Plan.',
    icon: 'briefcase',
  },
  {
    id: 'fensterreinigung',
    title: 'Fenster- und Glasreinigung',
    description: 'Streifenfreie Reinigung von Fenstern, Glasflächen und Glasfassaden für strahlende Transparenz.',
    icon: 'glass-water',
  },
  {
    id: 'grundreinigung',
    title: 'Grundreinigung',
    description: 'Intensive und gründliche Reinigung für stark beanspruchte Flächen und hartnäckige Verschmutzungen.',
    icon: 'sparkles',
  },
  {
    id: 'hochdruckreinigung',
    title: 'Hochdruck- und Außenflächenreinigung',
    description: 'Gründliche Reinigung von Terrassen, Einfahrten, Gehwegen und Außenflächen mit Hochdruck.',
    icon: 'zap',
  },
  {
    id: 'bauendreinigung',
    title: 'Bau- und Bauendreinigung',
    description: 'Gründliche Reinigung von Baustellen und Neubauten – von der Grobreinigung bis zur übergabefertigen Endreinigung.',
    icon: 'hammer',
  },
  {
    id: 'hausmeisterservice',
    title: 'Hausmeisterservice & Winterdienst',
    description: 'Zuverlässige Betreuung und Pflege von Immobilien und Außenanlagen sowie professioneller Winterdienst mit Schnee- und Eisbeseitigung.',
    icon: 'wrench',
  },
]

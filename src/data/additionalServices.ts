export interface AdditionalService {
  id: string
  title: string
  icon: string
}

export const additionalServices: AdditionalService[] = [
  { id: 'grundreinigung-weitere', title: 'Grundreinigung', icon: 'sparkles' },
  { id: 'buero-praxisreinigung', title: 'Büro- und Praxisreinigung', icon: 'briefcase' },
  { id: 'wohnungsreinigung', title: 'Wohnungs- und Haushaltsreinigung', icon: 'home' },
  { id: 'baureinigung', title: 'Baureinigung', icon: 'hammer' },
  { id: 'treppenhausreinigung', title: 'Treppenhausreinigung', icon: 'stairs' },
  { id: 'fassadenreinigung', title: 'Fassadenreinigung', icon: 'building-2' },
  { id: 'aussenflaechenreinigung', title: 'Außenflächenreinigung', icon: 'leaf' },
  { id: 'pflasterreinigung', title: 'Pflasterreinigung', icon: 'grid' },
  { id: 'einfahrtsreinigung', title: 'Einfahrtsreinigung', icon: 'car' },
  { id: 'muelltonnenreinigung', title: 'Mülltonnenreinigung', icon: 'trash-2' },
  { id: 'containerreinigung', title: 'Containerreinigung', icon: 'package' },
  { id: 'sonstige-reinigung', title: 'Sonstige allgemeine Reinigungsdienstleistungen', icon: 'more-horizontal' },
]

export interface AdditionalService {
  id: string
  title: string
  icon: string
}

export const additionalServices: AdditionalService[] = [
  { id: 'gebaeudereinigung', title: 'Gebäudereinigung', icon: 'building-2' },
  { id: 'buero-praxisreinigung', title: 'Büro- und Praxisreinigung', icon: 'briefcase' },
  { id: 'wohnungsreinigung', title: 'Wohnungs- und Haushaltsreinigung', icon: 'home' },
  { id: 'treppenhausreinigung', title: 'Treppenhausreinigung', icon: 'stairs' },
  { id: 'fassaden-aussenflaechenreinigung', title: 'Fassaden- und Außenflächenreinigung', icon: 'leaf' },
  { id: 'pflaster-einfahrtsreinigung', title: 'Pflaster- und Einfahrtsreinigung', icon: 'grid' },
  { id: 'muelltonnen-containerreinigung', title: 'Mülltonnen- und Containerreinigung', icon: 'trash-2' },
  { id: 'sonstige-reinigung', title: 'Sonstige allgemeine Reinigungsdienstleistungen', icon: 'more-horizontal' },
]

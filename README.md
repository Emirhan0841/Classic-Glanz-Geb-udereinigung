# Classic Glanz – Professionelle Gebäudereinigung Karlsruhe

Modernes, responsive und barrierefreies Website für professionelle Gebäudereinigungsservices in Karlsruhe und Umgebung.

## 📋 Projektbeschreibung

Classic Glanz ist eine elegante, hochwertige Website für ein Gebäudereinigungs-Unternehmen. Sie präsentiert Services, Leistungen und ein einfaches Kontaktformular in modernem Design mit hohem Anspruch an Accessibility und User Experience.

**Kernmerkmale:**
- ✅ Responsive Design (Mobile First, Tablet, Desktop)
- ✅ Barrierefreie Navigation und Formulare
- ✅ Optimierte Performance
- ✅ SEO-ready Struktur
- ✅ Hochwertiges Brand-Kit (Farben, Schriften, Logos)
- ✅ Dunkler & heller Modus Support (vorbereitet)

---

## 🏗️ Tech-Stack

| Layer | Technologie | Version |
|-------|-------------|---------|
| **Frontend Framework** | React | 18.2.0 |
| **Sprache** | TypeScript | 5.3.3 |
| **Build Tool** | Vite | 5.0.8 |
| **Styling** | Tailwind CSS | 3.3.6 |
| **CSS Processing** | PostCSS | 8.4.31 |
| **Fonts** | Cinzel + Jost (lokal) | WOFF2 |

---

## 📦 Installation & Setup

### Voraussetzungen
- Node.js >= 16
- npm >= 8

### Installation

```bash
# Repository klonen
git clone https://github.com/your-org/classic-glanz.git
cd classic-glanz

# Dependencies installieren
npm install

# Development-Server starten
npm run dev

# Production-Build erstellen
npm run build

# Production-Preview
npm run preview
```

**Development-Server:** http://localhost:5173 (öffnet automatisch)

---

## 📁 Ordnerstruktur

```
classic-glanz/
├── public/                      # Statische Assets
│   └── brand/                   # Brand-Assets (zentral verwaltete Designvorgaben)
│       ├── BRAND.md            # Brand-Richtlinien (→ LESEN!)
│       ├── brand.css           # Brand-Tokens, Schriften, Basis-Styles
│       ├── logo/               # SVG-Logos (horizontal, vertikal, icon)
│       ├── favicon/            # Favicon, Apple-Icon, Webmanifest
│       ├── social/             # Open-Graph-Image, Profilbilder
│       └── fonts/              # Cinzel & Jost (WOFF2, lokal, DSGVO-konform)
│
├── src/
│   ├── main.tsx               # React Entry Point
│   ├── App.tsx                # Root Component (Layout)
│   ├── index.css              # Global Tailwind + Brand-Styles
│   │
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.tsx     # Navigation + Logo
│   │   │   └── Footer.tsx     # Footer + Brand-Logo + Links
│   │   │
│   │   ├── sections/          # Page Sections
│   │   │   ├── Hero.tsx       # Hero/Banner
│   │   │   ├── Trust.tsx      # Vertrauens-Punkte (4er Grid)
│   │   │   ├── Services.tsx   # Leistungsübersicht
│   │   │   ├── About.tsx      # Über-uns mit Features
│   │   │   ├── Why.tsx        # Gründe/Vorteile
│   │   │   ├── Process.tsx    # 4-Schritte Ablauf
│   │   │   ├── CTA.tsx        # Call-to-Action Section
│   │   │   └── Contact.tsx    # Kontaktformular
│   │   │
│   │   └── ui/                # Reusable UI Components
│   │       ├── Button.tsx     # Primary/Secondary/Outline Buttons
│   │       ├── Icon.tsx       # SVG Icons (Heroicons-like)
│   │       └── Container.tsx  # Max-width Layout Wrapper
│   │
│   ├── data/
│   │   ├── company.ts         # Unternehmensinfo
│   │   ├── services.ts        # Service-Liste
│   │   └── navigation.ts      # Nav-Items
│   │
│   └── types/
│       └── index.ts           # TypeScript Type Definitions
│
├── dist/                       # Build Output (produziert nach `npm run build`)
│
├── index.html                 # HTML Entry Point (+ Meta-Tags, Favicon Links)
├── tailwind.config.ts         # Tailwind Konfiguration (Brand-Farben)
├── tsconfig.json              # TypeScript Konfiguration
├── vite.config.ts             # Vite Konfiguration
├── postcss.config.js          # PostCSS Plugins
├── package.json               # Dependencies
└── README.md                  # Diese Datei
```

---

## 🔧 Korrektionen & Optimierungen

### Iteration 2: Hero & Button-Korrektionen
**Behobene Probleme:**
- ✅ Überschrift mit Fluid Typography (`clamp(2rem, 5vw, 3.5rem)`)
- ✅ Text-Bild-Balance optimiert (aspect-square mobile, 2-spaltig desktop)
- ✅ Button-Padding drastisch reduziert (50-60% Reduktion)

**Button-Größen (Final):**
- `size="lg"`: `px-20 py-10 text-base` (80×40px)
- `size="md"`: `px-16 py-8 text-base` (64×32px)
- `size="sm"`: `px-12 py-6 text-sm` (48×24px)

### Iteration 3: Services überarbeitet
**Neue Dienstleistungen (mit Bildern):**
1. **Gebäudereinigung** – service-building-cleaning.webp (1448×1086)
2. **Fenster- & Glasreinigung** – service-window-cleaning.webp (1448×1086)
3. **Grundreinigung** – service-deep-cleaning.webp (1448×1086)
4. **Unterhaltsreinigung** – service-maintenance-cleaning.webp (1448×1086)
5. **Hochdruckreinigung** – service-pressure-washing.webp (1448×1086)
6. **Winterdienst** – service-winter-service.webp (1448×1086)

### Iteration 4: Bildbibliothek integriert (18 WebP-Bilder)

**Implementierte Bilder:**

| Bereich | Bild | Auflösung | Status |
|---------|------|-----------|--------|
| **Hero** | hero-office-cleaning.webp | 1672×941 | ✅ Eingebaut |
| **Services** (6×) | service-*.webp | 1448×1086 | ✅ 3-spaltig Grid |
| **About** | about-team.webp | 1448×1086 | ✅ Text-Bild Layout |

**Verfügbare, nicht eingebaute Bilder:**
- `hero-glass-facade.webp` (1672×941) – Alternative für Hero
- `hero-commercial-building.webp` (245×277) – Zu niedrig aufgelöst
- `about-equipment.webp` (245×277) – Zu niedrig für große Bereiche
- `about-teamwork.webp` (244×277) – Zu niedrig aufgelöst
- 6× `general/*.webp` (244-248px) – Für zukünftige Details/Prozess-Bilder

**Bildqualität-Hinweise:**
- 9 Bilder hochauflösend (1448-1672px) ✓ Verwendet
- 9 Bilder niedrig aufgelöst (244-248px) ⚠️ Nur für kleine Bereiche geeignet
- Contact Cleaner (244×287) könnte für Contact-Sektion genutzt werden

---

## 🎨 Designsystem & Brand-Kit

### Brand-Farben
Das Projekt verwendet zentral verwaltete Brand-Farben aus `/public/brand/brand.css`:

| Name | Hex | Verwendung |
|------|-----|-----------|
| **Navy** | `#102A43` | Hauptfarbe: H1/H2, Header, Footer, Primary-Buttons |
| **Petrol** | `#17799E` | Links, Hover, sekundäre Akzente |
| **Türkis** | `#27AFC4` | Icons, Linien, kleine Akzente |
| **Hellgrau** | `#F4F7F9` | Abschnitts-Hintergründe |
| **Weiß** | `#FFFFFF` | Haupt-Hintergrund |
| **Text** | `#3E5468` | Fließtext auf hellem Grund |

**Wichtig:** Farben **nicht** direkt als Hex in Komponenten schreiben. Immer über Tailwind-Tokens (`text-navy`, `bg-muted`) oder CSS-Variablen (`var(--cg-navy)`) arbeiten.

### Schriften
- **Cinzel** (`font-display`): H1, H2 – immer UPPERCASE, Gewicht 600
- **Jost** (`font-sans`): Alles andere – Navigation, Buttons, Body-Text, H3+

**Fonts werden lokal aus `/public/brand/fonts/` geladen** (DSGVO-konform, kein Google Fonts).

### Icons
Alle Icons sind SVG-basiert (Icon-Komponente in `src/components/ui/Icon.tsx`). **Keine Emojis als Icons!**

Verfügbare Icons: `building-2`, `briefcase`, `stairs`, `glass-water`, `sparkles`, `hammer`, `arrow-right`, `menu`, `x`, `check`

---

## 🏗️ Architektur & Komponenten

### Seiten-Struktur (Single Page)

```
<App />
├── <Header />                # Sticky Navigation + Logo
├── <main>
│   ├── <Hero />             # Hero Section mit CTA
│   ├── <Trust />            # Trust Points (4 Punkte)
│   ├── <Services />         # 6 Leistungen (2x3 Grid)
│   ├── <About />            # Über-uns mit 4 Features
│   ├── <Why />              # 4 Gründe/Vorteile
│   ├── <Process />          # 4-Schritte Ablauf
│   ├── <CTA />              # Call-to-Action
│   └── <Contact />          # Kontaktformular
└── <Footer />               # Footer mit Links + Logo
```

### Responsiveness

Breakpoints (via Tailwind):
- **Mobile:** 0–640px (`sm:` breakpoint)
- **Tablet:** 640–1024px (`md:` breakpoint)
- **Desktop:** 1024px+ (`lg:` breakpoint)

Alle Komponenten sind **Mobile-First** aufgebaut.

### Form-Handling

Das Kontaktformular (`Contact.tsx`) ist client-seitig:
- Validierung: HTML5 `required` Attribute
- Submit: Aktuell nur `console.log()` + Alert (für Integration mit Backend bereit)
- Felder: Name, Unternehmen, E-Mail, Telefon, Leistungstyp, Nachricht, Privacy Checkbox

---

## 🎯 Designentscheidungen

### 1. **Brand-Kit-Integration (Public/Brand)**
Alle Brand-Assets (Logos, Farben, Fonts, Favicon) werden **zentral in `/public/brand/`** verwaltet. Die Richtlinien in `/public/brand/BRAND.md` haben **Vorrang** vor automatisch vorgeschlagenen Designmustern.

### 2. **Elegant, Ruhig, Hochwertig**
- Viel Weißraum, klare Kanten, keine unnötigen Animationen
- Navy + Petrol als professionelle Farbkombination
- Großzügige Spacing-Skala (Vielfache von 8px)

### 3. **Accessibility First**
- Focus-Ringe sichtbar (Türkis, 4px)
- Kontrast-Verhältnis 4.5:1 für alle Texte
- Keyboard-Navigation funktioniert komplett
- ARIA-Label auf Buttons
- Semantisches HTML

### 4. **Performance**
- Lokale Schriften (keine Google-Fonts)
- SVG-Icons statt PNG/Emojis
- Lazy Loading bei Bildern (vorbereitet)
- Moderne CSS-Variablen statt Inline-Styles

### 5. **Tailwind + Brand-CSS Hybrid**
- **Tailwind:** Layout, Responsive, Utility-Classes
- **Brand.css:** Zentrale Tokens, Basis-Styles, Typografie-Skalen
- Beide arbeiten nahtlos zusammen (brand.css wird in index.html eingebunden)

---

## 🔧 Konfiguration

### Tailwind Config (`tailwind.config.ts`)

```typescript
colors: {
  navy: '#102A43',
  petrol: '#17799E',
  tuerkis: '#27AFC4',
  // ... weitere Brand-Farben
}
fontFamily: {
  sans: ['Jost', 'system-ui', 'sans-serif'],
  display: ['Cinzel', 'Georgia', 'serif'],
}
```

### Brand CSS (`public/brand/brand.css`)

- `@font-face` für Cinzel & Jost
- CSS-Variablen: `--cg-navy`, `--cg-petrol`, etc.
- Basis-Styles für h1/h2, Links, Buttons
- `.cg-btn--primary`, `.cg-btn--outline` Button-Klassen
- `.cg-logo--header`, `.cg-logo--footer` Logo-Größen

---

## 📱 SEO & Meta-Tags

**In `index.html`:**
- Title: "Classic Glanz | Professionelle Gebäudereinigung Karlsruhe"
- Description: Aussagekräftige Kurzbeschreibung
- Favicon: `/brand/favicon/favicon.ico` + SVG-Variant
- Apple-Icon: `/brand/favicon/apple-touch-icon.png`
- Webmanifest: `/brand/favicon/site.webmanifest`
- Open-Graph-Image: `/brand/social/og-image.png`
- Theme-Color: Navy (`#102A43`)

**Strukturierte Daten:** Vorbereitet für Schema.org (z. B. LocalBusiness, AggregateOffer).

---

## 📝 Formularfunktion

**Aktueller Status:** Client-seitige Validierung und lokale State-Verwaltung.

**Integration mit Backend:**

```typescript
// In Contact.tsx handleSubmit():
const response = await fetch('/api/contact', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(formData),
});
```

**Empfohlenes Backend:**
- Netlify Functions (kostenlos bis 125k Anfragen/Monat)
- oder Serverless-Funktion (AWS Lambda, Vercel, etc.)
- E-Mail-Service: SendGrid, Mailgun, SMTP

---

## 🚀 Netlify-Deployment

### Vorbereitung
1. Repository auf GitHub pushen
2. Netlify-Konto erstellen (netlify.com)
3. Site verbinden → Auto-Deploy bei Push

### Netlify Configuration (`netlify.toml`)

```toml
[build]
command = "npm run build"
publish = "dist"

[[redirects]]
from = "/*"
to = "/index.html"
status = 200
```

### Umgebungsvariablen (Netlify Dashboard)
- `VITE_API_URL`: Backend-URL für Formular-Submission

### Deploy
```bash
# Manuell via Netlify CLI
npm install -g netlify-cli
netlify deploy --prod
```

---

## ✅ Tests & Quality Assurance

### Linting
```bash
npm run lint          # TypeScript Type-Check
```

### Build
```bash
npm run build         # Produktions-Build
npm run preview       # Lokaler Preview des Builds
```

### Browser-Testing
- ✅ Chrome/Edge (Desktop + Mobile)
- ✅ Firefox (Desktop + Mobile)
- ✅ Safari (Desktop + iOS)
- ✅ Accessibility: axe DevTools, Lighthouse

### Performance
- Lighthouse Score Target: 90+
- Core Web Vitals: Green
- Page Load: < 2 Sekunden

---

## 🔐 Sicherheit & Datenschutz

- ✅ Lokale Fonts (keine 3rd-party Tracker)
- ✅ HTTPS erforderlich (Netlify automatisch)
- ✅ Datenschutzerklärung: `/datenschutz` (zu erstellen)
- ✅ Impressum: `/impressum` (zu erstellen)
- ✅ Formular-Daten nicht geloggt (nur an Backend)

---

## 📚 Weitere Ressourcen

- **Brand-Richtlinien:** `/public/brand/BRAND.md`
- **Tailwind Docs:** https://tailwindcss.com
- **React 18:** https://react.dev
- **TypeScript:** https://www.typescriptlang.org
- **Vite:** https://vitejs.dev

---

## 📞 Kontakt & Support

Für Fragen zum Code oder Design: [support@classic-glanz.de](mailto:support@classic-glanz.de)

---

**Zuletzt aktualisiert:** 2026-10-10  
**Version:** 1.0.0

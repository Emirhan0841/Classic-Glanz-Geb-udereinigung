# Classic Glanz – Marken-Vorgaben für die Website

Diese Datei ist für Claude Code. Sie beschreibt, wie Logo, Farben und Schriften auf der Website verwendet werden. **Bitte diese Vorgaben einhalten und keine eigenen Farben, Schriften oder Logo-Varianten erfinden.**

## Ordnerinhalt

```
brand/
├── brand.css          ← Farben, Schriften, Basis-Styles als CSS-Variablen
├── BRAND.md           ← diese Datei
├── logo/              ← alle Logos als SVG (Schrift bereits in Pfade umgewandelt)
├── favicon/           ← Favicon, Apple-Touch-Icon, App-Icons, Webmanifest
├── social/            ← Vorschaubild für Links (og-image), Profilbilder
└── fonts/             ← Cinzel + Jost als woff2 (lokal, DSGVO-konform) + Lizenzen
```

## Farben

| Name | HEX | Einsatz |
|---|---|---|
| Navy | `#102A43` | Hauptfarbe: Überschriften, Header, Footer, Haupt-Buttons |
| Petrol | `#17799E` | Links, Hover, zweite Akzentfarbe |
| Türkis | `#27AFC4` | Linien, Icons, kleine Akzente. **Nicht** für Fließtext auf Weiß (zu wenig Kontrast) |
| Hellgrau | `#F4F7F9` | Hintergrund für abwechselnde Abschnitte und Karten |
| Weiß | `#FFFFFF` | Haupthintergrund |
| Text | `#3E5468` | Fließtext auf hellem Grund |

Immer über die Variablen aus `brand.css` verwenden (`var(--cg-navy)` usw.), keine HEX-Werte direkt ins CSS schreiben. Keine Farbverläufe auf Logo oder Text.

## Schriften

- **Cinzel** (`var(--cg-font-display)`): nur für H1 und H2, immer Versalien, Gewicht 600.
- **Jost** (`var(--cg-font-text)`): alles andere – Fließtext, Navigation, Buttons, H3, Formulare.
- Schriften werden **lokal** aus `brand/fonts/` geladen. **Keine** Google-Fonts-Links einbinden (Datenschutz).

## Logos – welches wofür

| Datei | Wo |
|---|---|
| `logo/logo-horizontal.svg` | **Header** (auf weißem/hellem Grund) |
| `logo/logo-horizontal-weiss-auf-dunkel.svg` | Footer oder Header auf Navy |
| `logo/logo-vertikal.svg` | Hero/Startbereich, Über-uns, Kontaktseite (auf Hell) |
| `logo/logo-vertikal-weiss-auf-dunkel.svg` | Hero auf Navy-Hintergrund |
| `logo/bildzeichen.svg` | Dekor, Lade-Animation, kleine Platzierungen |
| `logo/icon.svg` | sehr klein (unter 40 px) |

Regeln:
- Logo immer als `<img>` mit `alt="Classic Glanz Gebäudereinigung"` einbinden, Proportionen nie verändern (nur `width` setzen, `height: auto`).
- Rundum Abstand mindestens so groß wie ein Großbuchstabe von „CLASSIC“ lassen.
- Mindestbreite: Querformat 220 px, Hochformat 160 px, Bildzeichen 40 px.
- Nicht einfärben, drehen, mit Schatten versehen oder auf unruhige Fotos legen. Auf Fotos nur die Weiß-Version über einer dunklen Fläche.
- Das Logo ist ein Bild: den Firmennamen **nicht** zusätzlich als Text daneben schreiben.

## In den `<head>` jeder Seite

```html
<link rel="stylesheet" href="/brand/brand.css">

<link rel="icon" href="/brand/favicon/favicon.ico" sizes="any">
<link rel="icon" href="/brand/favicon/favicon.svg" type="image/svg+xml">
<link rel="apple-touch-icon" href="/brand/favicon/apple-touch-icon.png">
<link rel="manifest" href="/brand/favicon/site.webmanifest">
<meta name="theme-color" content="#102A43">

<meta property="og:image" content="https://[IHRE-DOMAIN]/brand/social/og-image.png">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
```

`[IHRE-DOMAIN]` durch die echte Domain ersetzen. Falls die Website in einem Framework läuft (z. B. Next.js, Astro, Vite), den Ordner `brand/` in den Ordner für statische Dateien legen (meist `public/`), damit die Pfade `/brand/...` stimmen.

## Gestaltungsregeln für Seiten

- Hintergrund Weiß, abwechselnde Abschnitte in Hellgrau `#F4F7F9`, Footer in Navy.
- Haupt-Button: `class="cg-btn cg-btn--primary"` (Navy, Hover Petrol). Zweit-Button: `cg-btn cg-btn--outline`.
- Kleine Überzeilen über Abschnitten mit `class="cg-subline"`.
- Türkis sparsam als Akzent: feine Linien, Icons, Unterstreichungen.
- Ruhig und hochwertig: viel Weißraum, klare Kanten, keine Glitzer-Effekte, keine Wasserblasen-Grafiken.

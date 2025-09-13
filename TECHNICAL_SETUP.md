# Technisches Setup - Praxis Buchmann Website

## Überblick
Diese Website ist eine moderne, responsive Praxis-Website, die mit Next.js 15 und TypeScript entwickelt wurde. Sie nutzt Tailwind CSS für das Styling und implementiert ein statisches Content Management System über Markdown-Dateien.

## Tech Stack

### Core Framework
- **Next.js 15.4.6** - React-Framework mit App Router
- **React 19** - UI Library
- **TypeScript** - Typisierte JavaScript-Entwicklung

### Styling & UI
- **Tailwind CSS 4** - Utility-first CSS Framework (neueste Version)
- **@tailwindcss/postcss 4** - PostCSS Plugin für Tailwind
- **Autoprefixer** - CSS-Vendor-Prefixes
- **Custom CSS Variables** - Farbthema und Typography

### Content Management
- **Gray Matter** - YAML Frontmatter Parser für Markdown
- **Markdown-basiertes CMS** - Statische Content-Verwaltung
- **Static Site Generation (SSG)** - Pre-rendered Pages

### Development Tools
- **ESLint** - Code Linting
- **npm** - Package Manager
- **Git** - Versionskontrolle

## Projektstruktur

```
praxis-buchmann/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── layout.tsx         # Root Layout
│   │   ├── page.tsx           # Homepage
│   │   ├── blog/              # Blog-Seiten
│   │   │   ├── page.tsx       # Blog-Übersicht
│   │   │   └── [slug]/        # Einzelne Blog-Posts
│   │   ├── leistungen/        # Service-Seiten
│   │   │   └── [service]/     # Service-Details
│   │   ├── globals.css        # Globale Styles
│   │   └── robots.ts          # SEO Robots
│   ├── components/            # React Komponenten
│   │   ├── Header.tsx         # Navigation
│   │   ├── Footer.tsx         # Footer
│   │   ├── Hero.tsx           # Homepage Hero
│   │   ├── ServiceBenefits.tsx # Service-Vorteile
│   │   ├── TreatmentSteps.tsx # Behandlungsschritte
│   │   └── ...               # Weitere Komponenten
│   ├── lib/                   # Utility Functions
│   │   ├── blog.ts           # Blog-Content Loading
│   │   └── services.ts       # Service-Content Loading
│   └── utils/                # Helper Functions
├── content/                   # Content Management
│   ├── blog/                 # Blog-Posts (Markdown)
│   │   └── [post-slug]/
│   │       ├── post.md       # Markdown Content
│   │       ├── hero.jpg      # Hero-Bild
│   │       └── thumbnail.jpg # Thumbnail
│   └── services/             # Service-Seiten (Markdown)
│       └── [service].md      # Service Content
├── public/                   # Statische Assets
│   ├── content/              # Kopierte Content-Bilder
│   └── *.png|jpg|webp       # Allgemeine Assets
├── tailwind.config.js        # Tailwind Konfiguration
├── next.config.js           # Next.js Konfiguration
├── package.json             # Dependencies
└── build-blog.sh           # Build-Script für Blog
```

## Setup-Anleitung

### 1. Entwicklungsumgebung vorbereiten

```bash
# Node.js (Version 18+) installieren
# npm oder yarn als Package Manager

# Repository klonen
git clone <repository-url>
cd praxis-buchmann

# Dependencies installieren
npm install
```

### 2. Package.json Dependencies

```json
{
  "dependencies": {
    "gray-matter": "^4.0.3",
    "next": "15.4.6",
    "react": "19.1.0",
    "react-dom": "19.1.0",
    "remark": "^15.0.1",
    "remark-breaks": "^4.0.0",
    "remark-gfm": "^4.0.1",
    "remark-html": "^16.0.1"
  },
  "devDependencies": {
    "@eslint/eslintrc": "^3",
    "@tailwindcss/postcss": "^4",
    "@types/node": "^20",
    "@types/react": "^19",
    "@types/react-dom": "^19",
    "autoprefixer": "^10.4.21",
    "eslint": "^9",
    "eslint-config-next": "15.4.6",
    "tailwindcss": "^4",
    "typescript": "^5"
  }
}
```

### 3. Tailwind CSS Konfiguration

```javascript
// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'burgundy': '#8B4B6B',
        'cream': '#F5F1EB',
        'coral': '#E89B8E',
        'contact': '#E89B8E',
        'new-cream': '#F5F1EB',
      },
      fontFamily: {
        'sans': ['Poppins', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
```

### 4. Content-Struktur

#### Blog-Post Beispiel:
```markdown
---
title: "Blog-Post Titel"
excerpt: "Kurze Beschreibung"
date: "2025-01-01"
author: "Alexandra Buchmann"
readTime: "5 min"
heroImage: "./hero.jpg"
thumbnail: "./thumbnail.jpg"
---

# Hauptinhalt des Blog-Posts

Hier steht der Inhalt...
```

#### Service-Seite Beispiel:
```markdown
---
title: "Service Name"
subtitle: "Beschreibung mit <br> HTML-Tags möglich"
heroImage: "/service_image.png"
benefitsIntro: "Einführungstext für Benefits"
benefits:
  - "Benefit 1"
  - "Benefit 2"
treatmentSteps:
  - title: "Schritt 1"
    description: "Beschreibung"
    color: "burgundy"
seo:
  title: "SEO Titel"
  description: "SEO Beschreibung"
---
```

### 5. Wichtige Komponenten-Features

#### HTML-Rendering in Content:
```tsx
// Für HTML-Tags in Markdown Content
<p 
  dangerouslySetInnerHTML={{ __html: content }}
  className="..."
/>
```

#### Responsive Design:
```tsx
// Tailwind Breakpoints
className="sm:block lg:hidden xl:grid"
// sm: 640px+, md: 768px+, lg: 1024px+, xl: 1280px+
```

#### Dynamic Content Loading:
```typescript
// lib/blog.ts & lib/services.ts
export async function getPostBySlug(slug: string) {
  // Gray-matter parsing logic
}
```

### 6. Build & Deployment

```bash
# Development Server
npm run dev

# Production Build
npm run build

# Blog Assets kopieren (falls needed)
./build-blog.sh

# Deployment
npm run start
```

### 7. SEO & Performance Features

- **Static Site Generation (SSG)** für alle Seiten
- **Optimierte Bilder** mit Next.js Image Component
- **Responsive Design** für alle Geräte
- **SEO-optimiert** mit Metadata API
- **Fast Loading** durch Tailwind CSS

### 8. Anpassungen für neues Projekt

1. **Package.json** anpassen (Name, Repository, etc.)
2. **Tailwind Colors** in `tailwind.config.js` ändern
3. **Content-Struktur** nach Bedarf anpassen
4. **Komponenten** nach Design-Anforderungen modifizieren
5. **SEO-Metadaten** in `layout.tsx` aktualisieren
6. **Assets** (Logos, Bilder) austauschen

### 9. Besondere Features dieses Setups

- **Markdown-basierte Inhaltsverwaltung** ohne CMS
- **Typisierte Content-Interfaces** für Type Safety
- **Responsive Image-Overlapping** in ServiceBenefits
- **Dynamic Grid Layouts** die sich an Content anpassen
- **HTML-Support in Markdown** für Formatierung
- **Automatische Blog-Asset-Kopierung**

## Performance-Optimierungen

- Verwendung von `next/image` für optimierte Bilder
- Static Generation für bessere Performance
- Tailwind CSS für minimale CSS-Größe
- TypeScript für bessere Entwicklererfahrung
- ESLint für Code-Qualität

## Support & Wartung

- Regelmäßige Updates der Dependencies
- Git-basierte Versionskontrolle
- Modulare Komponenten-Architektur
- Klare Trennung von Content und Code

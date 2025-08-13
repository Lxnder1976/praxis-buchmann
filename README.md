# Praxis Dr. Buchmann - Website

Eine moderne, responsive Website für die Hausarztpraxis Dr. Buchmann, entwickelt mit Next.js und Tailwind CSS.

## Features

- 📱 Vollständig responsive Design
- ⚡ Optimierte Performance mit Next.js
- 🎨 Modernes Design mit Tailwind CSS
- 🔒 TypeScript für Typsicherheit
- 📧 Vorbereitet für Buchungssystem-Integration

## Technologie-Stack

- **Framework:** Next.js 15
- **Styling:** Tailwind CSS
- **Language:** TypeScript
- **Deployment:** Azure Static Web Apps

## Lokale Entwicklung

1. Dependencies installieren:
```bash
npm install
```

2. Development Server starten:
```bash
npm run dev
```

3. Website im Browser öffnen: [http://localhost:3000](http://localhost:3000)

## Deployment auf Azure

Diese Website ist für das Deployment auf Azure Static Web Apps optimiert:

1. Repository auf GitHub pushen
2. Azure Static Web App erstellen und mit GitHub Repository verbinden
3. Build-Konfiguration:
   - **App location:** `/`
   - **Api location:** (leer lassen)
   - **Output location:** `out`

## Struktur

```
src/
├── app/
│   ├── layout.tsx          # Layout-Komponente
│   ├── page.tsx            # Hauptseite
│   └── globals.css         # Globale Styles
```

## Geplante Features

- [ ] Online-Terminbuchung
- [ ] Kontaktformular
- [ ] Arzt-Vorstellung (Team-Seite)
- [ ] Patienteninformationen
- [ ] Notdienst-Informationen

## Anpassungen

Die Website kann leicht angepasst werden:

- **Kontaktdaten:** In `src/app/page.tsx` bearbeiten
- **Farben:** Tailwind-Klassen in den Komponenten anpassen
- **Inhalte:** Texte direkt in der `page.tsx` bearbeiten

## Support

Bei Fragen zur Website wenden Sie sich an den Entwickler.

# Blog-System Anleitung

## 📝 Neuen Blog-Post erstellen

### 1. Ordner erstellen
Erstellen Sie einen neuen Ordner unter `content/blog/` mit dem gewünschten URL-Namen:
```
content/blog/mein-neuer-blog-post/
```

### 2. Drei Dateien hinzufügen

#### a) `post.md` - Der Blog-Inhalt
```markdown
---
title: "Ihr Blog-Titel"
date: "2025-09-04"
category: "Gesundheit"
excerpt: "Kurze Beschreibung für die Übersicht..."
author: "Alexandra Buchmann"
readTime: "5 Min. Lesezeit"
---

# Ihr Blog-Titel

Hier schreiben Sie Ihren Blog-Inhalt in Markdown...

## Untertitel

Text mit **fett** und *kursiv*.

### Listen funktionieren auch:
- Punkt 1
- Punkt 2
- Punkt 3
```

#### b) `thumbnail.jpg` - Vorschaubild (empfohlen: 400x300px)
- Wird in der Blog-Übersicht angezeigt
- Sollte das Thema des Artikels visuell repräsentieren

#### c) `hero.jpg` - Header-Bild (empfohlen: 1200x600px)
- Wird als großes Bild im Artikel-Header angezeigt
- Sollte hochauflösend und ansprechend sein

### 3. Deployment
```bash
git add .
git commit -m "Neuer Blog-Post: [Titel]"
git push origin main
```

## 📁 Ordnerstruktur Beispiel
```
content/blog/
├── funktionelle-medizin-grundlagen/
│   ├── post.md
│   ├── thumbnail.jpg
│   └── hero.jpg
└── gesunde-ernaehrung-tipps/
    ├── post.md
    ├── thumbnail.jpg
    └── hero.jpg
```

## 🎨 Markdown Formatierung

### Überschriften
```markdown
# Hauptüberschrift (H1)
## Untertitel (H2)  
### Unterabschnitt (H3)
```

### Text-Formatierung
```markdown
**Fett gedruckt**
*Kursiv*
```

### Listen
```markdown
- Aufzählungspunkt
- Noch ein Punkt

1. Nummerierte Liste
2. Zweiter Punkt
```

### Links
```markdown
[Link-Text](https://example.com)
```

## 📋 Kategorien
Verwenden Sie diese Standard-Kategorien:
- Gesundheit
- Osteopathie
- Funktionelle Medizin
- Ernährung
- Lifestyle
- Praxis-News

## 🔧 URLs
Der Ordnername wird zur URL:
- `funktionelle-medizin-grundlagen/` → `/blog/funktionelle-medizin-grundlagen`
- Verwenden Sie Kleinbuchstaben und Bindestriche
- Keine Umlaute oder Sonderzeichen

## ✅ Checkliste vor Veröffentlichung
- [ ] Ordner mit aussagekräftigem Namen erstellt
- [ ] `post.md` mit vollständigen Metadaten
- [ ] `thumbnail.jpg` hinzugefügt (400x300px empfohlen)
- [ ] `hero.jpg` hinzugefügt (1200x600px empfohlen)
- [ ] Rechtschreibung geprüft
- [ ] Links getestet
- [ ] Git committed und gepusht

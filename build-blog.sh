#!/bin/bash

# Blog-Build Script für Praxis Buchmann
# Kopiert alle Blog-Bilder von content/ nach public/

echo "🔧 Blog-Build gestartet..."

# Basis-Pfade
CONTENT_DIR="content/blog"
PUBLIC_DIR="public/content/blog"

# Prüfen ob content/blog existiert
if [ ! -d "$CONTENT_DIR" ]; then
    echo "❌ Fehler: $CONTENT_DIR existiert nicht!"
    exit 1
fi

# Public-Verzeichnis erstellen falls nicht vorhanden
mkdir -p "$PUBLIC_DIR"

# Zähler für Statistik
copied_files=0
skipped_files=0
processed_blogs=0

echo "📁 Durchsuche Blog-Ordner..."

# Alle Blog-Ordner durchgehen
for blog_dir in "$CONTENT_DIR"/*/; do
    if [ -d "$blog_dir" ]; then
        blog_name=$(basename "$blog_dir")
        echo "📝 Verarbeite: $blog_name"
        
        # Public-Unterordner erstellen
        public_blog_dir="$PUBLIC_DIR/$blog_name"
        mkdir -p "$public_blog_dir"
        
        # Alle Bild-Dateien prüfen
        for img_file in "$blog_dir"*.{jpg,jpeg,png,webp,gif}; do
            if [ -f "$img_file" ]; then
                filename=$(basename "$img_file")
                target_file="$public_blog_dir/$filename"
                
                # Prüfen ob Datei bereits existiert und neuer ist
                if [ -f "$target_file" ] && [ "$target_file" -nt "$img_file" ]; then
                    echo "   ⏭️  Übersprungen: $filename (bereits aktuell)"
                    ((skipped_files++))
                elif [ -f "$target_file" ] && [ "$img_file" -nt "$target_file" ]; then
                    cp "$img_file" "$target_file"
                    echo "   🔄 Aktualisiert: $filename"
                    ((copied_files++))
                elif [ ! -f "$target_file" ]; then
                    cp "$img_file" "$target_file"
                    echo "   ✅ Neu kopiert: $filename"
                    ((copied_files++))
                else
                    echo "   ⏭️  Übersprungen: $filename (unverändert)"
                    ((skipped_files++))
                fi
            fi
        done
        
        ((processed_blogs++))
    fi
done

echo ""
echo "🎉 Blog-Build abgeschlossen!"
echo "📊 Statistik:"
echo "   - Verarbeitete Blogs: $processed_blogs"
echo "   - Kopierte/Aktualisierte Bilder: $copied_files"
echo "   - Übersprungene Bilder: $skipped_files"
echo ""
echo "💡 Nächste Schritte:"
echo "   1. npm run build (für HTML-Generierung)"
echo "   2. npm run dev (zum Testen)"
echo ""

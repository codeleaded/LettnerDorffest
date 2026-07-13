# Lettner Dorffest Website

Eine statische Veranstaltungsseite für das Lettner Dorffest 2026 mit Flyer-inspiriertem Design, privatem Loginbereich und einer klaren Preisübersicht.

## Inhalt

- `index.html` - Hauptseite der Landingpage
- `styles.css` - Design, Farben, Layout und Animationen
- `script.js` - Passwort-Logik für den privaten Bereich
- `assets/` - Bild- und Medienordner für Banner, Haupt- und private Bilder

## Merkmale

- Moderne, flyerähnliche Optik mit Himmel-zu-Gras-Farbverlauf
- Sichtbare Hauptbilder im Hero-Bereich
- Prominenter Button für den privaten Bereich
- Klar strukturierte Tagesprogramm-Highlights
- Preisübersicht für Getränke, Bar und Essen
- Passwort-geschützter privater Bereich (Client-seitige Validierung)

## Nutzung

1. Öffne `index.html` im Browser.
2. Alternativ kannst du die Seite lokal mit einem einfachen HTTP-Server starten:
   ```bash
   python3 -m http.server 8000
   ```
   und dann `http://localhost:8000` öffnen.

## Anpassung

- Ersetze die Platzhalterbilder in `assets/haupt/` sowie `assets/privat/` mit den echten Bildern.
- Passe Texte in `index.html` an, z. B. Titel, Datum und Programm.

## Hinweis

Die Passwortprüfung in `script.js` erfolgt clientseitig mit dem SHA256-Hash des Passwortes.
Für eine produktive Website mit echtem Zugriffsschutz sollte eine serverseitige Authentifizierung verwendet werden.

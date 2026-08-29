# Aurevia Factoring · Website

Statische Mehrseiten-Website (reines HTML/CSS/JS, kein Build-Schritt, kein Framework). Grundlage ist der freigegebene Design- und Inhaltsstand `aurevia-factoring.html` (Entwurf v0.1, Stand 19.08.2026).

## Status

**Entwurf, nicht zur Veröffentlichung freigegeben.** Jede Seite trägt ein Entwurfsband sowie `noindex, nofollow`; zusätzlich sperrt `robots.txt` die gesamte Seite für Suchmaschinen.

## Struktur

```
index.html               Start (Hero, Über uns, Projektstand)
fuer-kunden.html          Für Kunden
investoren-banken.html    Investoren & Banken
team.html                 Team
kontakt.html              Kontakt (mailto, kein Formular)
impressum.html            Impressum
datenschutz.html          Datenschutz (Platzhalter, Sperrvermerk)
assets/css/style.css      zentrales Stylesheet (CI-konform)
assets/js/main.js         Navigation, Scroll-Reveal, Fortschrittsanzeige
assets/img/               Logo (520px und Master-Auflösung)
```

## CI-Regeln (verbindlich, siehe Skill `aurevia-ci`)

- Farben: Marineblau #0E2A47, Gold #C5944A, Gold hell #E3C892 (nur auf Marineblau), Labelgrau #8A94A0, Perlweiß #F5F2EB, Haarlinien #D9DDE3, Text #1C1C1C.
- Gold nur als Akzent, nie für Fließtext. Keine Schatten, keine Verläufe, keine Rahmen um Text.
- Schrift: Helvetica Neue, Arial, sans-serif.
- Logo nie auf Marineblau-Flächen; dort Schriftzug „AUREVIA FACTORING“ in Weiß/Gold hell.
- Claim exakt „Liquidität, die weiterbringt.“, Descriptor exakt „Factoring & Finance for Healthcare“.
- Deutsch, Sie-Form, keine Gedankenstriche, Datum TT.MM.JJJJ.

## Rechtliche Leitplanken

- Die Gesellschaft ist nicht gegründet: kein Rechtsformzusatz im Fließtext, keine „i.G.“-Angabe.
- Impressum: Müller Holding AG als Diensteanbieterin.
- Status durchgängig: Vorhaben in Vorbereitung, BaFin-Erlaubnisverfahren nach KWG wird vorbereitet, keine Leistungserbringung, kein öffentliches Angebot.
- Keine Konditionen, Planzahlen oder internen Meilensteine veröffentlicht.
- Footer immer mit „Projektgesellschaft in Vorbereitung · Registerangaben folgen nach Gründung“.

## Offene Platzhalter (gelb markiert, `.ph`)

- Team: Nachname, Funktion und Kurzprofil für Jürgen, Carsten, David, Jan, Christina.
- Impressum: Telefonnummer Müller Holding AG, USt-IdNr.
- Datenschutz: vollständige Datenschutzerklärung (Verantwortlicher, Hosting/Server-Logs, Kontaktaufnahme, Betroffenenrechte).

## Sperren vor Live-Schaltung

1. Markenfreigabe durch Markenanwalt (R-006, drei aktive Aurevia-Gesellschaften, davon eine Healthcare/Frankfurt).
2. Freigabe durch die Geschäftsführung.
3. Vollständige Datenschutzerklärung.

Bis alle drei Punkte erfüllt sind: Entwurfsband und `noindex` beibehalten, keine Live-Schaltung, keine Verlinkung von außen.

## Lokale Vorschau

Kein Build nötig. Einfach im Browser öffnen oder lokal ausliefern, zum Beispiel:

```
python3 -m http.server 8000
```

und `http://localhost:8000` aufrufen.

## Nächste Ausbauschritte (bei Bedarf)

- Formular mit Backend erst nach Vorliegen der Datenschutzerklärung.
- Hosting-Setup und Domainanbindung nach Freigabe.
- Mehrsprachigkeit nur bei konkretem Bedarf.

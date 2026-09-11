# AUREVIA Factoring · Website

Statische Mehrseiten-Website (reines HTML/CSS/JS, kein Build-Schritt, kein Framework).

**Stand 08.09.2026: V1.8-Neuaufbau, jetzt zweisprachig (DE/EN).** Die Seite wurde vollständig anhand der Konzeptdokumente `260830_AUREVIA_Website_Gesamtkonzept_V1.8.pdf`, `260830_AUREVIA_Website_Content_V1.8_MERGED` und `260830_AUREVIA_Sitestruktur_Diagramm_V1.8` neu aufgebaut: neue Informationsarchitektur (7 Zielgruppenseiten mit je einer Vertiefungsseite statt der bisherigen 3 Unterseiten), neues Farbschema (Midnight/Navy + Teal als Aktionsfarbe, Gold nur im Signet), neuer Claim „Liquidität. Einfach voraus.“, SEO-/AI-Struktur mit Schema.org, `llms.txt` und `sitemap.xml`. Zusätzlich wurden alle 21 Seiten unter `en/` vollständig ins Englische übersetzt, inklusive Sprachumschalter, `hreflang`-Angaben und eigenen JSON-LD-Blöcken.

## Status

**Entwurf, nicht zur Veröffentlichung freigegeben.** Jede Seite trägt ein Entwurfsband sowie `noindex, nofollow`; `robots.txt` sperrt die gesamte Seite zusätzlich vollständig für Suchmaschinen.

## Struktur (21 Seiten × 2 Sprachen = 42 Seiten)

```
index.html                                          Start
fuer-aerzte.html                                    Ärzte
fuer-aerzte-privatliquidation-im-detail.html        └─ Vertiefung
fuer-zahnaerzte.html                                Zahnärzte
fuer-zahnaerzte-laborkosten-vorfinanzieren.html     └─ Vertiefung
fuer-apotheken.html                                 Apotheken
fuer-apotheken-working-capital-im-detail.html       └─ Vertiefung
fuer-dentallabore.html                              Dentallabore
fuer-dentallabore-forderungsausfall-vermeiden.html  └─ Vertiefung
fuer-physiotherapeuten.html                         Physiotherapeuten
fuer-physiotherapeuten-liquiditaet-heilmittelpraxis.html  └─ Vertiefung
fuer-tieraerzte.html                                Tierärzte
fuer-tieraerzte-zahlungsausfall-tierarztpraxis.html └─ Vertiefung
fuer-sonstige-heilberufe.html                       Sonstige Heilberufe
fuer-sonstige-heilberufe-berufsgruppen-im-detail.html  └─ Vertiefung
rechnungen-einreichen.html                          So funktioniert's (HowTo)
factoring-finanzierung.html                         Factoring & Finanzierung (zentrale FAQ)
ueber-uns.html                                      Über uns / Team
kontakt.html                                        Kontakt (mailto, Ziel aller CTAs)
impressum.html                                      Impressum
datenschutz.html                                    Datenschutz (23 Abschnitte, DSGVO-Entwurf)

assets/css/style.css      zentrales Stylesheet (Navy/Teal-Designsystem)
assets/js/main.js         Navigation, Mega-Menü, Scroll-Reveal, Fortschrittsanzeige
assets/img/                Logo (icon.png, icon-white.png) und Favicons, siehe Designsystem-Hinweis unten
robots.txt, sitemap.xml, llms.txt   technische SEO-/AI-Struktur, robots.txt sperrt vollständig

en/                        Englische Übersetzung aller 21 Seiten, gleiche Struktur, flache
                            englische Dateinamen (z. B. en/for-doctors.html), referenziert
                            assets/ relativ über ../assets/...
```

Jede deutsche und englische Seite trägt einen Sprachumschalter in Hauptnavigation, mobilem
Menü und Footer (`.langswitch`) sowie `hreflang`-Angaben (de/en/x-default) im `<head>`. Die
englischen Canonical-Pfade folgen demselben verschachtelten Schema wie die deutschen
Vertiefungsseiten (z. B. `/en/for-doctors/private-billing-in-detail/`).

Reale URLs (ohne Verzeichnisstruktur, flache Dateinamen für die statische Demo) sollen bei
späterem Hosting mit URL-Rewriting auf die sauberen Pfade aus dem Sitestruktur-Diagramm
abgebildet werden (`/fuer-aerzte/`, `/fuer-aerzte/privatliquidation-im-detail/` usw.); die
`<link rel="canonical">`-Angaben in jeder Seite verwenden bereits diese Zielpfade.

## Designsystem (V1.8)

- Farben: Marineblau/Midnight `#0B1F3A` für Vertrauen, Teal `#0F8F82` als alleinige Aktionsfarbe (Buttons, Links, aktive Zustände), Gold `#C99A4A` ausschließlich im Signet, Labelgrau, Perlweiß, Haarlinien wie gehabt.
- Signet: das reale AUREVIA-Logo (Navy-„A“ mit goldenem Schwung, aus `assets/img/Logo_Aurevia_master.jpg`) wurde freigestellt und als transparentes PNG in zwei Varianten aufbereitet: `assets/img/icon.png` (Navy+Gold, für helle Flächen wie die Hauptnavigation) und `assets/img/icon-white.png` (Weiß+Gold, für dunkle Flächen wie den Footer). Beide ersetzen das bisherige Platzhalter-SVG in Nav und Footer auf allen 42 Seiten. Der volle Logo-Schriftzug mit „FACTORING AG“ wird **nicht** auf der Website verwendet, da die Gesellschaft noch nicht im Handelsregister eingetragen ist (siehe Rechtliche Leitplanken); nur das textfreie Icon ist öffentlich zulässig.
- Favicons aus demselben Icon erzeugt: `favicon-16.png`, `favicon-32.png`, `icon-192.png`, `icon-512.png` (transparent) sowie `apple-touch-icon.png` (180×180, opaker Navy-Hintergrund). Alle 42 Seiten verlinken diese im `<head>`.
- Claim: „Liquidität. Einfach voraus.“ (ersetzt den bisherigen Claim „Liquidität, die weiterbringt.“). Descriptor „Factoring & Finance for Healthcare“ bleibt als Kicker über dem Hero-H1 erhalten.
- Mega-Menü „Für wen?“ führt alle 7 Zielgruppen; mobiles Menü nutzt `<details>` für die Untergruppe.
- FAQ als natives `<details>/<summary>`, funktioniert ohne JavaScript.
- Vergleichstabellen (`table.compare`) für Factoring-Modelle und Bankvergleich.
- Progressive Enhancement bleibt erhalten: Inhalte sind ohne JavaScript vollständig sichtbar, Scroll-Reveal ist rein additiv (`.js`-Klasse wird per Inline-Script gesetzt).

## Rechtliche Leitplanken (unverändert gegenüber v0.1, zwingend beachtet)

- Die Gesellschaft ist **nicht gegründet**: kein Rechtsformzusatz im Fließtext. Das Content-Dokument V1.8 ist durchgängig so formuliert, als sei die „AUREVIA Factoring AG“ bereits eine eingetragene Gesellschaft mit eigenem Impressum, Vorstand, Team und Aufsichtsstatus. Das wurde für diesen Entwurf **bewusst nicht übernommen**: Impressum bleibt Müller Holding AG als Diensteanbieterin, Team ist das bekannte HVM/MHAG-Team (Timo Müller, Jürgen, Carsten, David, Jan, Christina statt eines generischen AG-Rollenschemas), „Über uns“ und „Impressum“ formulieren den regulatorischen Status als Vorbereitung statt als bereits erteilte Erlaubnis.
- Segment- und Vertiefungsseiten verwenden ausschließlich „AUREVIA“ / „AUREVIA Factoring“ ohne Rechtsformzusatz (per Grep verifiziert, siehe unten).
- Footer immer mit „Projektgesellschaft in Vorbereitung · Registerangaben folgen nach Gründung“.
- Redaktions-/Compliance-/Produkt-Hinweise aus dem Content-Dokument (Zeilen mit „Compliance:“, „Redaktion:“, „Produkt:“, „Legal/DSB:“) sind als **unsichtbare HTML-Kommentare** im Quelltext erhalten, nicht als Besuchertext.
- Keine bezifferten Konditionen, Auszahlungsfristen oder Mindestvolumina; alle entsprechenden Stellen sind gelb markierte Platzhalter (`.ph`).

## Kommerzielle Eckwerte: Beispielwerte statt Platzhalter

Auf Wunsch von Timo Müller (11.09.2026) wurden die kommerziellen/prozessualen Platzhalter auf
allen 42 Seiten (DE+EN) mit **illustrativen Beispielwerten** befüllt, damit sich die Seite wie
ein fertiges Produkt liest. Diese Werte sind frei gewählt, realistisch für das Marktsegment und
bewusst mit einem Differenzierungsmerkmal gegenüber Banken bzw. auf Großkunden ausgerichteten
Factoringanbietern formuliert, sie sind **keine verbindlichen Konditionen** und müssen vor
Live-Schaltung durch Produkt/Legal final bestätigt oder ersetzt werden:

- Erstgespräch/Angebot: innerhalb von 24 Stunden
- Prüfdauer nach Upload: innerhalb von 24 Stunden
- Auszahlungsquote: bis zu 90 % des Forderungsbetrags
- Auszahlungsfrist: 24 Stunden nach Ankauf
- Gesamtdauer Onboarding: 5 bis 10 Werktage
- Mindestvolumen: rund 60.000 Euro Jahresforderungsvolumen
- Rahmenvertrag: 12 Monate Mindestlaufzeit, danach monatlich mit 4 Wochen Frist kündbar

## Offene Platzhalter (gelb markiert, `.ph`)

Bewusst **nicht** befüllt, da es sich um reale, noch nicht feststehende Fakten beziehungsweise um personenbezogene Daten echter, namentlich bekannter Personen handelt, die nicht erfunden werden dürfen:

- Team (`ueber-uns.html`): Nachname, Funktion und Kurzprofil für Jürgen, Carsten, David, Jan, Christina (reale Personen, keine Erfindung zulässig).
- „Über uns“, Governance & Vertrauen: Aufsichtsrat, Abschlussprüfer, Mitgliedschaften (setzen eine gegründete Gesellschaft voraus, die es noch nicht gibt).
- Impressum und Datenschutz: Telefonnummer Müller Holding AG, USt-IdNr., Berufshaftpflichtversicherer, Verbraucherschlichtungsstelle, Datenschutzbeauftragter, Bildnachweise.
- Datenschutz: Hostinganbieter/Serverstandort, Auskunfteien, Log-Speicherdauer, konkrete Empfängerkategorien, Aktualitätsdatum.

## Datenschutzerklärung: Status

`datenschutz.html` enthält 23 Abschnitte nach Art. 12–14 DSGVO (Verantwortlicher, Gesundheitsdaten nach Art. 9 DSGVO, Geldwäscheprävention, Bonitätsprüfung, Cookies nach § 25 TDDDG, Aufbewahrungsfristen, Betroffenenrechte, LDI NRW als Aufsichtsbehörde u. a.). Abschnitte, die erst mit Geschäftsaufnahme der künftigen Projektgesellschaft relevant werden (Kundenportal, Bonitätsprüfung, Gesundheitsdaten), sind sprachlich als Zukunft/Vorbereitung gekennzeichnet, nicht als aktuell stattfindende Verarbeitung. Abschnitte zum tatsächlichen technischen Stand (Cookies, Tracking, eingebundene Dienste) beschreiben ehrlich den Ist-Zustand: aktuell keines von beidem im Einsatz. Der Entwurf ist **noch nicht durch einen Rechtsanwalt geprüft und nicht durch die Geschäftsführung freigegeben**.

## Qualitätssicherung durchgeführt

- Alle 21 Seiten per Playwright-Screenshot (Desktop/Mobile, echtes Scrollverhalten) geprüft.
- Automatisierter Check: keine toten internen Links, kein „AUREVIA Factoring AG“ im Fließtext, jede Seite hat Entwurfsband, Footer-Zeile und alle 7 Mega-Menü-Einträge.
- Z-Index-Fehler im mobilen Menü (Overlap mit Sticky-Nav) gefunden und behoben.
- Sechs der sieben Zielgruppen-Seitenpaare wurden von parallelen Subagenten nach einem selbst gebauten Referenzpaar (Ärzte) erstellt und strukturell gegen dieses Muster verifiziert.
- Alle 42 Seiten (21 DE + 21 EN) per Playwright mit echtem Scrollverhalten auf JavaScript-Fehler, hängengebliebene Scroll-Reveal-Elemente sowie Vollständigkeit von Sprachumschalter (Nav, mobiles Menü, Footer) und Mega-Menü geprüft; keine Abweichungen gefunden.
- Automatisierter Grep-Check auf allen 21 englischen Seiten: kein „AUREVIA Factoring AG“ oder sonstiger Rechtsformzusatz im Fließtext.

## Sperren vor Live-Schaltung

1. Markenfreigabe durch Markenanwalt (R-006, drei aktive Aurevia-Gesellschaften, davon eine Healthcare/Frankfurt) — **zusätzlich relevant:** das jetzt eingesetzte reale Logo ist ebenfalls Teil dieser Prüfung; der volle Schriftzug „AUREVIA FACTORING AG“ wird bis zur Eintragung bewusst nicht auf der Website verwendet, nur das textfreie Icon.
2. Freigabe durch die Geschäftsführung, insbesondere für die Abweichungen vom Content-Dokument (Vorbereitungsstatus statt gegründeter AG, bekanntes Team statt generischem Rollenschema).
3. Rechtliche Prüfung und Freigabe der Datenschutzerklärung.
4. Festlegung der kommerziellen Eckwerte (Auszahlungsquote, Gebührenmodell, Mindestvolumen) durch Produkt/Legal, siehe Platzhalter oben.
5. Klärung des Produktumfangs echtes/unechtes Factoring durch Produkt/Legal (Content-Dokument empfiehlt, unechtes Factoring nur zu erklären, nicht zu bewerben, aktuell so umgesetzt).

Bis alle Punkte erfüllt sind: Entwurfsband und `noindex` beibehalten, keine Live-Schaltung, keine Verlinkung von außen.

## Lokale Vorschau

Kein Build nötig. Einfach im Browser öffnen oder lokal ausliefern, zum Beispiel:

```
python3 -m http.server 8000
```

und `http://localhost:8000` aufrufen.

## Nächste Ausbauschritte (bei Bedarf)

- Figma-UI-Design und finale Markengrafik (laut Konzeptdokument nächster Schritt vor Live-Schaltung).
- Erste 10 SEO-Ratgeberartikel (Content-Cluster laut Gesamtkonzept), aktuell nicht Teil dieses Aufbaus.
- Formular- bzw. Kundenportal-Funktionalität erst nach Vorliegen von Datenschutzerklärung und technischem Konzept; aktuell bewusst nicht umgesetzt (kein `/portal/`, kein Kontaktformular).
- Hosting-Setup mit URL-Rewriting auf die sauberen Pfade, Domainanbindung, Tracking/Consent-Stack nach Freigabe.

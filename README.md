# Regula Engel-Egli: Zwischen Kindersegen, Krieg und Erinnerung

Volldigitale, interaktive Lerneinheit zu Regula Engel-Egli für GitHub Pages oder den lokalen Einsatz im Unterricht.

Repository: [PatrickFischerKSA/regula-engel-lerneinheit](https://github.com/PatrickFischerKSA/regula-engel-lerneinheit)

## Enthalten

- build-freie Web-App mit `index.html`, `styles.css` und `app.js`
- Einstieg zu den Kategorien Ereignis, Kontext und Deutung
- interaktive Zeitleiste zu Biografie und napoleonischem Umfeld
- eigenes Kartenmodul mit konkreten Schauplätzen und Reiserouten zwischen Schweiz, Europa, Mittelmeerraum und USA
- datierte Stationskarten mit Ereigniszeilen und anklickbaren Detailfenstern zu den wichtigsten Vorkommnissen
- zusätzliche Zoomstufen für Gesamtkarte, Schweiz, Mitteleuropa, Mittelmeer sowie Atlantik/USA
- optimierte Startseite mit Lehrpersonen-Einstieg, Favicon und Social-Meta-Tags für GitHub Pages
- Quellen-Lab mit Vergleich von Memoiren, Lexikon, Journalismus, Museum und Überlieferung
- eigenes Modul zur historischen Einbettung:
  - Schweizer Soldwesen
  - Frauen im Kriegsraum
  - napoleonische Kriege
  - Erinnerungskultur
- Deutungs-Labor mit Quellenkritik und Interpretationsentscheidungen
- Abschluss-Quiz mit Rückmeldungen
- Reflexionsbereich mit lokalem Speicher und Markdown-Export

## Quellengrundlage

Direkt verwendet wurden:

- bereitgestelltes PDF `RegulaEngelFrauOberstEngel.pdf`
- [Wikipedia: Regula Engel-Egli](https://de.wikipedia.org/wiki/Regula_Engel-Egli)
- [Schweizerisches Nationalmuseum: Regula Engel-Egli, Kindersegen im Schlachtengetümmel](https://blog.nationalmuseum.ch/2021/02/regula-engel-egli-kindersegen-im-schlachtengetuemmel/)
- [SRF Kultur: Die Schweizer «Amazone», die an Napoleons Seite kämpfte](https://www.srf.ch/kultur/gesellschaft-religion/offiziersgattin-regula-engel-die-schweizer-amazone-die-an-napoleons-seite-kaempfte)
- [Rätisches Museum: Regula Engel - Eine Frau im Gefolge Napoleons](https://raetischesmuseum.app/extras/regula-engel-eine-frau-im-gefolge-napoleons?tour=/tours/zeitreise-durch-die-buendner-geschichte&object=/objects/das-geschaeft-mit-den-soeldnern)
- [Historisches Lexikon der Schweiz: Regula Engel](https://hls-dhs-dss.ch/de/articles/031794/2004-10-25/)
- [Viceversa Literatur: bibliografischer Eintrag](https://www.viceversalitterature.ch/book/18714)

Zur historischen Einbettung zusätzlich:

- [e-rara: Die schweizerische Amazone](https://doi.org/10.3931/e-rara-61572)
- [Napoleon.org: Napoleon's Courtesans, Citoyennes, and Cantinières](https://www.napoleon.org/en/history-of-the-two-empires/articles/napoleons-courtesans-citoyennes-and-cantinieres/)
- [Britannica: How did the Napoleonic Wars end?](https://www.britannica.com/question/How-did-the-Napoleonic-Wars-end)

## Didaktischer Fokus

Die Einheit arbeitet mit drei Leitgedanken:

- Regula Engel-Egli ist nicht nur eine spektakuläre Einzelbiografie, sondern Teil größerer historischer Strukturen.
- Ihre Memoiren sind gleichzeitig wertvolle Quelle und bewusste Selbstinszenierung.
- Erinnerungskultur macht aus historischen Figuren erzählbare, oft zugespitzte Bilder.

## Start lokal

1. Den Ordner `regula-engel-lerneinheit` öffnen
2. `index.html` im Browser starten

## GitHub Pages

Für das Repository `PatrickFischerKSA/regula-engel-lerneinheit`:

1. In GitHub `Settings` öffnen
2. `Pages` auswählen
3. Als Source `GitHub Actions` wählen
4. Den Workflow in `.github/workflows/pages.yml` ausführen lassen
5. Die Seite ist danach in der Regel unter `https://patrickfischerksa.github.io/regula-engel-lerneinheit/` erreichbar

Der Workflow deployt die statischen Projektdateien automatisch bei jedem Push auf `main`.

## Technische Hinweise

- Lernstände werden in `localStorage` gespeichert.
- Der Export erzeugt eine Markdown-Datei mit Merksätzen, Reflexion und Quizstand.
- Es werden keine externen Bibliotheken benötigt.

const storageKey = "regula-engel-lerneinheit-progress";
const totalModules = 7;

const warmupItems = [
  {
    id: "w1",
    statement: "Regula Engel-Egli berichtet selbst, dass sie meist nur das jüngste Kind mit sich auf die Reisen nahm.",
    category: "ereignis",
    feedback:
      "Das ist eine konkrete Information aus dem Memoirentext. Sie zeigt, wie stark Familienleben und Feldzüge ineinandergriffen.",
  },
  {
    id: "w2",
    statement: "Das Schweizer Soldwesen war in der Frühen Neuzeit und noch um 1800 ein breit verbreitetes Migrations- und Erwerbsmodell.",
    category: "kontext",
    feedback:
      "Das ist historische Einbettung. Erst mit diesem Kontext wird verständlich, warum eine Schweizer Familie überhaupt in französischen Diensten unterwegs war.",
  },
  {
    id: "w3",
    statement: "Der Titel «Schweizer Amazone» macht Regula Engel-Egli zugleich sichtbar und spektakulär.",
    category: "deutung",
    feedback:
      "Hier geht es um spätere Deutung. Der Begriff hebt ihren Ausnahmecharakter hervor, kann aber auch dramatisieren und vereinfachen.",
  },
  {
    id: "w4",
    statement: "Dass Regula Engel-Egli ihre Lebenserinnerungen nach 1815 veröffentlichte, hängt auch mit ihrer prekären finanziellen Lage zusammen.",
    category: "kontext",
    feedback:
      "Das ist mehr als ein Einzelereignis. Es ordnet ihre Memoiren sozial ein: Schreiben war auch ein Versuch, wirtschaftlich zu überleben.",
  },
];

const timelineEvents = [
  {
    id: "t1",
    year: "1761",
    title: "Geburt in Fluntern bei Zürich",
    summary:
      "Regula Egli wird am 5. März 1761 geboren. Ihre Familiengeschichte ist bereits von Militär- und Migrationserfahrungen geprägt.",
    significance:
      "Der Einstieg zeigt, dass ihr späteres Leben nicht aus dem Nichts entsteht, sondern in transregionalen, militärischen Lebenswelten vorbereitet ist.",
  },
  {
    id: "t2",
    year: "1778",
    title: "Heirat mit Florian Engel",
    summary:
      "Mit der Ehe mit dem Bündner Offizier Florian Engel beginnt ihre langjährige Begleitung eines Schweizer Soldaten in französischen Diensten.",
    significance:
      "Die Heirat verschiebt ihr Leben dauerhaft in den Raum zwischen Familie, Regiment und Reise.",
  },
  {
    id: "t3",
    year: "1792/93",
    title: "Revolution und neue Kriegsordnungen",
    summary:
      "Mit dem Umbruch der Revolutionszeit verändern sich auch die Dienstverhältnisse der Schweizer Regimenter in Frankreich.",
    significance:
      "Regula Engels Lebensweg wird dadurch stärker an die Dynamik der Revolutions- und Koalitionskriege gebunden.",
  },
  {
    id: "t4",
    year: "1798",
    title: "Ägyptenfeldzug",
    summary:
      "Sie begleitet ihren Mann auf die Expedition nach Ägypten. In den Memoiren schildert sie Begegnungen mit Napoleon und dramatische Lagererfahrungen.",
    significance:
      "Hier entsteht der Kern des späteren Mythos: Regula Engel als ungewöhnlich präsente Frau im Kriegsraum.",
  },
  {
    id: "t5",
    year: "1800er",
    title: "Nähe zum napoleonischen Machtzentrum",
    summary:
      "Die Familie bewegt sich zeitweise im Umfeld des napoleonischen Aufstiegs und der imperialen Hofwelt.",
    significance:
      "Das erklärt, warum ihre Memoiren nicht nur Familiengeschichte, sondern auch Beobachtungen europäischer Machtpolitik enthalten.",
  },
  {
    id: "t6",
    year: "1814",
    title: "Elba",
    summary:
      "Nach Napoleons Abdankung folgt die Familie ihm nach Elba. Auch hier bleibt sie an seiner politischen und militärischen Biografie orientiert.",
    significance:
      "Regula Engels Geschichte ist eng an Napoleon gebunden. Sein Sturz zieht ihre Familie unmittelbar mit hinab.",
  },
  {
    id: "t7",
    year: "1815",
    title: "Waterloo",
    summary:
      "Bei Waterloo verliert sie ihren Mann und zwei Söhne; sie selbst wird schwer verwundet.",
    significance:
      "Dies ist die entscheidende Bruchstelle ihres Lebens und der zentrale Wendepunkt ihrer Memoiren.",
  },
  {
    id: "t8",
    year: "1821-1853",
    title: "Publikation, Armut, Nachleben",
    summary:
      "Nach dem Krieg veröffentlicht sie ihre Lebensgeschichte in mehreren Fassungen. Sie stirbt 1853 in Zürich in bitterer Armut.",
    significance:
      "Die Memoiren sind nicht nur Erinnerung, sondern auch Überlebensstrategie und Grundlage ihrer späteren Rezeptionsgeschichte.",
  },
];

const mapLocations = {
  fluntern: { label: "Fluntern/Zürich", x: 448, y: 206 },
  zurich: { label: "Zürich", x: 446, y: 208 },
  chur: { label: "Chur", x: 474, y: 220 },
  zizers: { label: "Zizers", x: 482, y: 214 },
  langwies: { label: "Langwies", x: 490, y: 225 },
  strassburg: { label: "Straßburg", x: 428, y: 188 },
  rotterdam: { label: "Rotterdam", x: 385, y: 120 },
  brussels: { label: "Brüssel", x: 377, y: 146 },
  paris: { label: "Paris", x: 332, y: 170 },
  toulon: { label: "Toulon", x: 372, y: 261 },
  nice: { label: "Nizza", x: 394, y: 255 },
  marengo: { label: "Marengo", x: 420, y: 248 },
  malta: { label: "Malta", x: 494, y: 391 },
  alexandria: { label: "Alexandria", x: 622, y: 410 },
  cairo: { label: "Kairo", x: 648, y: 430 },
  acre: { label: "Saint-Jean-d'Acre", x: 705, y: 396 },
  rome: { label: "Rom", x: 467, y: 304 },
  livorno: { label: "Livorno", x: 457, y: 284 },
  turin: { label: "Turin", x: 415, y: 254 },
  milan: { label: "Mailand", x: 438, y: 247 },
  geneva: { label: "Genf", x: 406, y: 233 },
  lausanne: { label: "Lausanne", x: 394, y: 223 },
  bern: { label: "Bern", x: 431, y: 214 },
  elba: { label: "Elba", x: 468, y: 316 },
  waterloo: { label: "Waterloo", x: 381, y: 143 },
  malmaison: { label: "Malmaison", x: 325, y: 166 },
  lehavre: { label: "Le Havre", x: 307, y: 160 },
  london: { label: "London", x: 301, y: 120 },
  calais: { label: "Calais", x: 329, y: 143 },
  charleroi: { label: "Charleroi", x: 384, y: 154 },
  lyon: { label: "Lyon", x: 375, y: 223 },
  newyork: { label: "New York", x: 88, y: 142 },
  philadelphia: { label: "Philadelphia", x: 92, y: 165 },
  charleston: { label: "Charleston", x: 102, y: 224 },
  neworleans: { label: "New Orleans", x: 58, y: 286 },
};

const mapViewPresets = {
  overview: {
    id: "overview",
    label: "Gesamtkarte",
    viewBox: "0 0 820 520",
    hint: "Alle Großräume im Zusammenhang",
  },
  swiss: {
    id: "swiss",
    label: "Schweiz",
    viewBox: "372 160 170 110",
    hint: "Zürich, Chur und Bündner Raum im Detail",
  },
  centralEurope: {
    id: "centralEurope",
    label: "Mitteleuropa",
    viewBox: "255 95 285 210",
    hint: "Rheinraum, Niederlande, Paris und Norditalien",
  },
  mediterranean: {
    id: "mediterranean",
    label: "Mittelmeer",
    viewBox: "325 185 430 290",
    hint: "Toulon, Malta, Ägypten, Syrien und Elba",
  },
  atlantic: {
    id: "atlantic",
    label: "Atlantik/USA",
    viewBox: "0 75 360 280",
    hint: "Häfen, Atlantikquerung und US-Ostküste",
  },
};

const routeSets = [
  {
    id: "schweiz",
    label: "Schweizer Anfangsraum",
    title: "Von Fluntern nach Graubünden",
    summary:
      "Die frühen Stationen liegen im Raum Zürich, Chur, Zizers und Langwies. Schon hier zeigt sich, dass Regulas Biografie von Binnenmigration, Heirat und Militärnetzwerken geprägt ist.",
    insight:
      "Die Geschichte beginnt nicht erst mit Napoleon, sondern in konkreten Schweizer Räumen und Wegen.",
    views: ["overview", "swiss"],
    stops: [
      {
        id: "schweiz-1",
        location: "fluntern",
        year: "1761",
        event: "Geburt von Regula Egli",
        detail:
          "Am 5. März 1761 wird Regula Egli in Fluntern bei Zürich geboren. Ihre frühen Lebensumstände verbinden Familiengeschichte, Migration und Militärtraditionen schon vor der napoleonischen Zeit.",
      },
      {
        id: "schweiz-2",
        location: "chur",
        year: "1770er",
        event: "Bewegung in den Bündner Raum",
        detail:
          "Die Memoiren führen sie in den Raum Chur. Damit verschiebt sich ihr Leben aus dem Zürcher Ausgangsraum in ein Milieu, in dem Militärkontakte und regionale Netzwerke für ihre Zukunft entscheidend werden.",
      },
      {
        id: "schweiz-3",
        location: "zizers",
        year: "1778",
        event: "Bekanntschaft mit Florian Engel",
        detail:
          "In Zizers lernt sie Florian Engel kennen, der dort für das Regiment Diesbach wirbt. Die Begegnung verbindet ihre Biografie dauerhaft mit dem fremden Militärdienst.",
      },
      {
        id: "schweiz-4",
        location: "langwies",
        year: "ab 1778",
        event: "Heirat und Bündner Familienbezug",
        detail:
          "Mit der Heirat mit dem Bündner Offizier Florian Engel wird Regula Teil eines erweiterten alpinen und militärischen Beziehungsraums. Aus dem regionalen Weg wird nun ein europäischer Lebensweg.",
      },
    ],
  },
  {
    id: "europa",
    label: "Europa-Feldzüge",
    title: "Zwischen Rhein, Niederlanden, Paris und Italien",
    summary:
      "Die Familie bewegt sich mit dem Regiment durch Straßburg, Rotterdam, Brüssel, Paris, Turin, Mailand, Nizza und Marengo. Die Wege folgen militärischen Logiken, nicht persönlicher Sesshaftigkeit.",
    insight:
      "Die europäischen Feldzüge machen Regula Engel-Eglis Leben zu einer mobilen Kriegsexistenz zwischen Garnison, Marsch und Familie.",
    views: ["overview", "centralEurope"],
    stops: [
      {
        id: "europa-1",
        location: "strassburg",
        year: "1793",
        event: "Rheinarmee und Garnisonsraum",
        detail:
          "Nach dem Umbruch der Revolutionszeit wird das Regiment an die Rheinarmee angeschlossen. Straßburg markiert den Übergang in eine neue Phase republikanischer Kriegführung.",
      },
      {
        id: "europa-2",
        location: "rotterdam",
        year: "1794",
        event: "Feldzug in den Niederlanden",
        detail:
          "Die Memoiren nennen die Einnahme Hollands und den Zug über gefrorene Wasserläufe. Rotterdam steht für den niederländischen Kriegsschauplatz und für Regulas Präsenz mitten in der Truppenbewegung.",
      },
      {
        id: "europa-3",
        location: "brussels",
        year: "1795",
        event: "Marsch über die österreichischen Niederlande",
        detail:
          "Brüssel ist Durchgangs- und Übergangsraum. Von hier aus wird sichtbar, wie europäische Machtverschiebungen den Weg der Familie bestimmen.",
      },
      {
        id: "europa-4",
        location: "paris",
        year: "1795/96",
        event: "Annäherung an das revolutionäre Machtzentrum",
        detail:
          "Mit Paris rückt die Familie in das politische Zentrum Frankreichs. Von hier aus verlagern sich die Wege weiter nach Italien und in Napoleons Wirkungsraum.",
      },
      {
        id: "europa-5",
        location: "turin",
        year: "1796",
        event: "Beginn des italienischen Feldzugs",
        detail:
          "Der Italienfeldzug macht Napoleons Aufstieg sichtbar. Für Regula Engel-Egli beginnt hier eine Phase, in der große Politik und private Wegführung eng miteinander verschmelzen.",
      },
      {
        id: "europa-6",
        location: "milan",
        year: "1796/97",
        event: "Militärische Expansion in Oberitalien",
        detail:
          "Mailand steht in den Memoiren für die Ausweitung des französischen Einflussraums. Die Route zeigt, wie Regimenter und Familien den Frontverlauf mitvollziehen mussten.",
      },
      {
        id: "europa-7",
        location: "nice",
        year: "1800",
        event: "Rückkehr nach Europa",
        detail:
          "Nach den östlichen Expeditionen ist Nizza einer der Rückkehrorte in den europäischen Kriegsschauplatz. Die Bewegung endet nicht, sondern kippt nur in eine neue Feldzugsphase.",
      },
      {
        id: "europa-8",
        location: "marengo",
        year: "1800",
        event: "Schlacht bei Marengo",
        detail:
          "Die Memoiren erwähnen die Rückkehr mit Desaix und die Schlacht bei Marengo. Marengo markiert militärischen Erfolg, aber auch erneuten Familienverlust und fortgesetzte Belastung.",
      },
    ],
  },
  {
    id: "aegypten",
    label: "Ägyptenfeldzug",
    title: "Von Toulon über Malta nach Ägypten und Syrien",
    summary:
      "Die Route führt von Toulon über Malta nach Alexandria und Kairo, weiter Richtung Saint-Jean-d'Acre und wieder zurück über Nizza nach Europa.",
    insight:
      "Erst auf der Karte wird sichtbar, wie weit die Familie aus dem Schweizer Ausgangsraum herausgeriet.",
    views: ["overview", "mediterranean", "centralEurope"],
    stops: [
      {
        id: "aegypten-1",
        location: "toulon",
        year: "1798",
        event: "Einschiffung zur Expedition",
        detail:
          "Von Toulon bricht die Expedition auf. Regula Engel-Egli beschreibt die gewaltigen Vorbereitungen und ihre bewusste Entscheidung, ihren Mann trotz aller Risiken zu begleiten.",
      },
      {
        id: "aegypten-2",
        location: "malta",
        year: "1798",
        event: "Zwischenstation im Mittelmeer",
        detail:
          "Malta steht für die maritime Reichweite der Unternehmung. Die Route zeigt hier erstmals deutlich, dass Regulas Lebensraum nun weit über Mitteleuropa hinausreicht.",
      },
      {
        id: "aegypten-3",
        location: "alexandria",
        year: "1798",
        event: "Landung in Ägypten",
        detail:
          "Mit Alexandria beginnt der nordafrikanische Teil der Reise. Die Memoiren verbinden hier Staunen, Ungewissheit und den Blick auf eine völlig andere Umwelt.",
      },
      {
        id: "aegypten-4",
        location: "cairo",
        year: "1798/99",
        event: "Kairo, Aufstand und Lageralltag",
        detail:
          "Kairo ist nicht nur Schauplatz militärischer Herrschaft, sondern auch des Alltags im Kriegsraum. Hier verdichten sich Nähe zur Armee, Versorgung, Familienleben und Gewalt.",
      },
      {
        id: "aegypten-5",
        location: "acre",
        year: "1799",
        event: "Zug nach Syrien und Saint-Jean-d'Acre",
        detail:
          "Die Route nach Saint-Jean-d'Acre führt die Grenzen der französischen Expansion vor Augen. Die Karte macht sichtbar, wie weit der Feldzug die Familie in den östlichen Mittelmeerraum hineinzieht.",
      },
      {
        id: "aegypten-6",
        location: "nice",
        year: "1800",
        event: "Rückkehr nach Europa",
        detail:
          "Die Rückkehr über Nizza führt aus dem Mittelmeerraum wieder in die europäischen Kriegsgebiete. Die Strecke unterstreicht, dass diese Expedition keine Episode, sondern ein geographischer Extremraum ihrer Biografie ist.",
      },
    ],
  },
  {
    id: "elba-waterloo",
    label: "Elba und Waterloo",
    title: "Vom kaiserlichen Rückzug zum Zusammenbruch von 1815",
    summary:
      "Die Phase verbindet Paris und Malmaison, Elba, den Weg nach Belgien und Waterloo. Hier verdichten sich politische Endphase und privates Katastrophenerlebnis.",
    insight:
      "Die letzte napoleonische Phase ist zugleich politische Endgeschichte und persönlicher Totalverlust.",
    views: ["overview", "centralEurope", "mediterranean"],
    stops: [
      {
        id: "elba-1",
        location: "paris",
        year: "1814",
        event: "Zusammenbruch des napoleonischen Systems",
        detail:
          "Paris steht für den politischen Sturz Napoleons. Für Regula Engel-Egli bedeutet das keine Rückkehr zur Ruhe, sondern den Übergang in eine noch unsicherere Zwischenphase.",
      },
      {
        id: "elba-2",
        location: "malmaison",
        year: "1814/15",
        event: "Erinnerungsort des verlorenen Kaiserreichs",
        detail:
          "Die Memoiren schildern Malmaison als verwüsteten Ort. Der Raum wird zum Symbol dafür, wie rasch aus imperialem Glanz ein ruinöser Erinnerungsort werden kann.",
      },
      {
        id: "elba-3",
        location: "elba",
        year: "1814",
        event: "Exil Napoleons auf Elba",
        detail:
          "Die Familie folgt Napoleon nach Elba. Damit wird sichtbar, wie direkt Regulas Lebensweg an die politischen Bahnen des Kaisers gekoppelt bleibt.",
      },
      {
        id: "elba-4",
        location: "brussels",
        year: "1815",
        event: "Aufmarsch vor der Entscheidung",
        detail:
          "Die Bewegung nach Belgien verdichtet die Spannung der Hundert Tage. Brüssel steht als Ziel- und Gegenraum der militärischen Konfrontation.",
      },
      {
        id: "elba-5",
        location: "waterloo",
        year: "18. Juni 1815",
        event: "Tod des Mannes, Verlust der Söhne, eigene Verwundung",
        detail:
          "Waterloo ist in den Memoiren der absolute Bruchpunkt. Regula Engel-Egli schildert den Tod ihres Mannes, schwere eigene Verwundung und den Zusammenbruch ihres bisherigen Lebens in höchster Verdichtung.",
      },
    ],
  },
  {
    id: "amerika-rueckkehr",
    label: "Exil und Rückkehr",
    title: "Le Havre, Atlantik, USA, London und Rückwege in die Schweiz",
    summary:
      "Nach 1815 führt der Weg über Le Havre nach New York, Philadelphia und New Orleans, später über London, Calais, Brüssel, Charleroi, Lyon, Turin, Livorno, Rom, Genf, Lausanne, Bern und Zürich zurück.",
    insight:
      "Die Nachgeschichte ist selbst wieder eine Reiseroute und zeigt, wie unstet ihr Leben auch nach den Kriegen blieb.",
    views: ["overview", "atlantic", "centralEurope", "swiss"],
    stops: [
      {
        id: "amerika-1",
        location: "lehavre",
        year: "1815",
        event: "Abreise aus Frankreich",
        detail:
          "Nach der Katastrophe von 1815 führt einer der Flucht- und Übergangswege über Le Havre. Der Hafen markiert den Bruch mit dem bisherigen europäischen Lebensraum.",
      },
      {
        id: "amerika-2",
        location: "newyork",
        year: "1815/16",
        event: "Ankunft in New York",
        detail:
          "New York wird zu einem neuen Knotenpunkt ihres Lebens. Hier begegnet sie Emigration, Exil und der Hoffnung, bei verbliebenen Kontakten Unterstützung zu finden.",
      },
      {
        id: "amerika-3",
        location: "philadelphia",
        year: "1816",
        event: "Kontakt zu Joseph Bonaparte",
        detail:
          "Philadelphia steht in den Memoiren für die Verbindung zu Joseph Bonaparte. Die Familiengeschichte bleibt damit auch in Amerika an napoleonische Netzwerke gebunden.",
      },
      {
        id: "amerika-4",
        location: "neworleans",
        year: "1817",
        event: "Reise zum Sohn nach New Orleans",
        detail:
          "Die Fahrt nach New Orleans zeigt, wie weit sich ihre Familienwege nun über den Atlantik verteilt haben. Exil bedeutet bei ihr nicht Stillstand, sondern erneute Bewegung.",
      },
      {
        id: "amerika-5",
        location: "charleston",
        year: "1818/19",
        event: "Küstenfahrt und erneute Rückwege",
        detail:
          "Charleston erscheint als Zwischenstation im amerikanischen Bewegungsraum. Die Nachkriegsjahre bleiben durch Unsicherheit, Suche und Weiterreise geprägt.",
      },
      {
        id: "amerika-6",
        location: "newyork",
        year: "1819",
        event: "Abreise zurück über den Atlantik",
        detail:
          "Von New York aus reist sie wieder nach Europa. Die Richtung kehrt sich um, doch die Wegdynamik ihres Lebens bleibt dieselbe.",
      },
      {
        id: "amerika-7",
        location: "london",
        year: "1819/20",
        event: "Bitte um Reise zu den Söhnen nach St. Helena",
        detail:
          "In London versucht sie, zu ihren Söhnen nach St. Helena reisen zu dürfen. Der abschlägige Bescheid zeigt, wie sehr politische Grenzen ihre persönliche Handlungsmacht beschneiden.",
      },
      {
        id: "amerika-8",
        location: "calais",
        year: "1820",
        event: "Rückkehr auf den Kontinent",
        detail:
          "Mit Calais setzt die Rückbewegung durch Europa ein. Der Kontinent wird nun nicht mehr als Feldzugsraum, sondern als Raum der mühsamen Rückkehr erfahren.",
      },
      {
        id: "amerika-9",
        location: "brussels",
        year: "1820",
        event: "Erneute Passage durch Belgien",
        detail:
          "Die Route führt wieder in den Raum von 1815. Dadurch wird die Erinnerung an die napoleonische Endphase geografisch noch einmal aufgerufen.",
      },
      {
        id: "amerika-10",
        location: "charleroi",
        year: "1820",
        event: "Wallfahrt zu den Gräbern von Waterloo",
        detail:
          "Im Zusammenhang mit Belgien und Waterloo beschreibt sie die Reise als Erinnerungs- und Verlustweg. Der Raum bleibt für sie von Trauer überformt.",
      },
      {
        id: "amerika-11",
        location: "lyon",
        year: "1820",
        event: "Südostfranzösische Durchreise",
        detail:
          "Lyon steht für die langen Landrouten der Rückkehr. Das Nachkriegselend zeigt sich nicht nur in Armut, sondern auch in der körperlichen Strapaze dieser Wege.",
      },
      {
        id: "amerika-12",
        location: "turin",
        year: "1820",
        event: "Übergang nach Italien",
        detail:
          "Turin verbindet Rückkehrroute und frühere Feldzugslandschaft. Vergangenheit und Gegenwart ihrer Wege legen sich hier übereinander.",
      },
      {
        id: "amerika-13",
        location: "livorno",
        year: "1820",
        event: "Hafenstation in Italien",
        detail:
          "Livorno ist maritime Drehscheibe und steht für die anhaltende Verbindung von Land- und Seewegen in ihrem späten Leben.",
      },
      {
        id: "amerika-14",
        location: "rome",
        year: "1820",
        event: "Zwischentour nach Rom",
        detail:
          "Die Reise nach Rom zeigt, dass selbst die Rückkehr nicht gradlinig verläuft. Die Route bleibt verschlungen und von Zwischenzielen unterbrochen.",
      },
      {
        id: "amerika-15",
        location: "geneva",
        year: "1820",
        event: "Wieder in der Schweiz",
        detail:
          "Mit Genf erreicht sie erneut Schweizer Boden. Die Rückkehr ist jedoch keine Heimkehr in Sicherheit, sondern Teil einer weiter prekären Existenz.",
      },
      {
        id: "amerika-16",
        location: "lausanne",
        year: "1820",
        event: "Passage durch die Westschweiz",
        detail:
          "Lausanne markiert den Weg ostwärts durch die Schweiz. Der lange Reisebogen beginnt sich zu schließen.",
      },
      {
        id: "amerika-17",
        location: "bern",
        year: "1820",
        event: "Rückweg ins Mittelland",
        detail:
          "Bern liegt auf der letzten Etappe der Rückkehr. Aus der Weltreise wird wieder ein schweizerischer Binnenweg.",
      },
      {
        id: "amerika-18",
        location: "zurich",
        year: "1820er",
        event: "Rückkehr nach Zürich",
        detail:
          "Die Rückkehr nach Zürich beendet die Route nicht wirklich, aber sie schließt den großen räumlichen Kreis. In den folgenden Jahren werden Schreiben, Publikation und materielle Not bestimmend.",
      },
    ],
  },
];

const routeStopLookup = routeSets.reduce((lookup, route) => {
  route.stops.forEach((stop) => {
    lookup[stop.id] = {
      ...stop,
      routeId: route.id,
      routeLabel: route.label,
      locationLabel: mapLocations[stop.location].label,
    };
  });
  return lookup;
}, {});

const sourceLenses = [
  {
    id: "memoiren",
    label: "Memoiren",
    intro:
      "Das bereitgestellte PDF zeigt Regula Engel-Egli als schreibende Ich-Erzählerin. Es ist ein Selbstzeugnis mit starker Dramatisierung und klarer Selbstinszenierung.",
    cards: [
      {
        title: "Mit dem Mann ins Ungewisse",
        text:
          "Im Text beschreibt sie die Entscheidung, ihren Mann auf die Expedition zu begleiten, als existentielle Wahl zwischen Mutterschaft, Ehe und Gefahr.",
        source: "PDF / Frau Oberst Engel",
        tags: ["Selbstzeugnis", "Ägyptenfeldzug"],
        insight:
          "Die Memoiren machen sichtbar, wie Regula Engel ihre Loyalität zu Florian Engel ins Zentrum rückt und damit ihre spätere Heldinnenrolle vorbereitet.",
      },
      {
        title: "Nur das jüngste Kind bleibt bei ihr",
        text:
          "Sie schildert, dass die übrigen Kinder jeweils bei vertrauten Familien untergebracht wurden, während sie das jüngste mitnahm.",
        source: "PDF / Frau Oberst Engel",
        tags: ["Familie", "Krieg"],
        insight:
          "Der Text verbindet Kindersegen und Kriegsalltag. Er zeigt, wie wenig sich Familie und Feldzug in dieser Lebensform trennen lassen.",
      },
      {
        title: "Waterloo als Lebensbruch",
        text:
          "Die Schilderung von Waterloo verdichtet Tod, Verwundung und Verzweiflung zu einer extrem dramatischen Szene.",
        source: "PDF / Frau Oberst Engel",
        tags: ["Waterloo", "Dramatik"],
        insight:
          "Gerade an Waterloo wird deutlich: Das Selbstzeugnis liefert eindrückliche Nähe, muss aber immer auch als erinnernde Erzählkonstruktion gelesen werden.",
      },
    ],
  },
  {
    id: "lexikon",
    label: "Lexikon",
    intro:
      "Das Historische Lexikon der Schweiz verdichtet die biografischen Eckdaten in eine knappe, sachliche Form.",
    cards: [
      {
        title: "Biografische Fixpunkte",
        text:
          "Das HLS nennt Geburt 1761, Heirat 1778, 21 Kinder, Waterloo als Verlustpunkt und ihre Rückkehr in die Schweiz.",
        source: "HLS",
        tags: ["Daten", "Biografie"],
        insight:
          "Lexikontexte sind hilfreich, um das Selbstzeugnis mit überprüfbaren Eckdaten zu rahmen.",
      },
      {
        title: "Publizieren aus Not",
        text:
          "Das HLS betont, dass sie ihre Lebensbeschreibung veröffentlichte, um ihren Lebensunterhalt zu sichern.",
        source: "HLS",
        tags: ["Sozialgeschichte", "Publikation"],
        insight:
          "Die Memoiren sind nicht nur Erinnerung, sondern auch ökonomische Strategie in einer prekären Lage.",
      },
    ],
  },
  {
    id: "journalismus",
    label: "Journalismus",
    intro:
      "Moderne Beiträge von SRF und dem Nationalmuseum stellen Regula Engel-Egli in einen breiteren Deutungshorizont und machen sie für heutige Leserinnen und Leser zugänglich.",
    cards: [
      {
        title: "Die «Schweizer Amazone»",
        text:
          "SRF zeigt Regula Engel-Egli als außergewöhnliche Offiziersfrau, die an Napoleons Seite unterwegs war und in den Memoiren vom Glanz und Elend des Söldnerlebens erzählt.",
        source: "SRF Kultur",
        tags: ["Rezeption", "Amazone"],
        insight:
          "Mediale Titel machen aufmerksam, erzeugen aber zugleich einen heroischen Rahmen, den man quellenkritisch prüfen sollte.",
      },
      {
        title: "Kindersegen im Schlachtengetümmel",
        text:
          "Der Beitrag des Nationalmuseums betont die Spannung zwischen Mutterschaft, hoher Kinderzahl und permanenter Nähe zum Krieg.",
        source: "Nationalmuseum",
        tags: ["Geschlechtergeschichte", "Familie"],
        insight:
          "Die moderne Einordnung hebt besonders hervor, wie ungewöhnlich Regula Engel-Eglis Lebensform zwischen Geburt, Reise und Gewalt war.",
      },
    ],
  },
  {
    id: "museum",
    label: "Museum",
    intro:
      "Das Rätische Museum zeigt Regula Engel-Egli als Teil bündnerischer und schweizerischer Erinnerungskultur.",
    cards: [
      {
        title: "Regionale Erinnerung",
        text:
          "Im Museum wird sie als Frau im Gefolge Napoleons präsentiert, die ihren Mann über Jahrzehnte begleitete und schließlich verarmt in die Schweiz zurückkehrte.",
        source: "Rätisches Museum",
        tags: ["Public History", "Bünden"],
        insight:
          "Museen verdichten Biografie in ausstellbare Erzählungen. Dabei werden Auswahl, Zuspitzung und regionale Perspektive besonders sichtbar.",
      },
      {
        title: "Die Figur in Uniform",
        text:
          "Die Museumsdarstellung greift die Bildfigur der kämpfenden, uniformierten Regula Engel auf und verknüpft sie mit den Memoiren.",
        source: "Rätisches Museum",
        tags: ["Bildpolitik", "Erinnerung"],
        insight:
          "Die visuelle Inszenierung verstärkt das Bild der Ausnahmefrau und ist selbst Teil ihrer Nachgeschichte.",
      },
    ],
  },
  {
    id: "ueberlieferung",
    label: "Überlieferung",
    intro:
      "Digitale Bibliothek und bibliografische Nachweise zeigen, wie das Werk weitergegeben und neu ediert wurde.",
    cards: [
      {
        title: "Digitale Wiederverfügbarkeit",
        text:
          "Über e-rara ist eine historische Ausgabe der «schweizerischen Amazone» online zugänglich, was die Arbeit mit der Überlieferung deutlich erleichtert.",
        source: "e-rara",
        tags: ["Edition", "Digitalisierung"],
        insight:
          "Historische Figuren bleiben präsent, weil ihre Texte immer wieder neu ediert, digitalisiert und in neue Kontexte gestellt werden.",
      },
      {
        title: "Bibliografisches Nachleben",
        text:
          "Viceversa verzeichnet spätere Buchausgaben und macht sichtbar, dass Regula Engel-Egli nicht nur historische Person, sondern auch publizierte Autorin geblieben ist.",
        source: "Viceversa Literatur",
        tags: ["Rezeption", "Bibliografie"],
        insight:
          "Bibliografische Spuren zeigen, dass ihre Geschichte weiter zirkuliert und kulturell anschlussfähig geblieben ist.",
      },
    ],
  },
];

const contextModules = [
  {
    id: "soldwesen",
    label: "Schweizer Soldwesen",
    kicker: "Kontext 1",
    title: "Warum dienten Schweizer in fremden Armeen?",
    context:
      "SRF fasst unter Berufung auf historische Forschung zusammen, dass militärische Dienstmigration in der Eidgenossenschaft über Jahrhunderte ein Massenphänomen war und auch wirtschaftlich staatsbildend wirkte.",
    relevance:
      "Regula Engel-Eglis Geschichte ist kein exotischer Einzelfall ohne Vorgeschichte. Sie steht im Umfeld eines etablierten, transnationalen Soldsystems.",
    insight:
      "Ohne das Schweizer Soldwesen wirkt Regulas Lebensweg außergewöhnlicher, als er sozialgeschichtlich tatsächlich war.",
  },
  {
    id: "frauen",
    label: "Frauen im Krieg",
    kicker: "Kontext 2",
    title: "Frauen waren im Kriegsraum präsenter, als man heute oft annimmt.",
    context:
      "SRF und Napoleon.org zeigen, dass Frauen nicht nur im Tross arbeiteten, sondern auch als Versorgerinnen, Wäscherinnen, Cantinières oder vereinzelt sogar direkt im militärischen Bereich auftraten.",
    relevance:
      "Regula Engel-Egli ist besonders, aber nicht völlig isoliert. Ihre Geschichte wird verständlicher, wenn man weibliche Kriegspräsenz als historisches Kontinuum wahrnimmt.",
    insight:
      "Die Figur der «Amazone» überzeichnet das Außergewöhnliche, darf aber die breitere weibliche Kriegsarbeit nicht verdecken.",
  },
  {
    id: "napoleon",
    label: "Napoleon",
    kicker: "Kontext 3",
    title: "Napoleons Aufstieg und Sturz strukturieren auch ihr Leben.",
    context:
      "Von Ägypten über die Kaiserzeit bis Elba und Waterloo verläuft Regula Engels Biografie parallel zu den Wendepunkten napoleonischer Herrschaft. Britannica markiert 1814 und 1815 als Endphase des Systems.",
    relevance:
      "Ihre Familiengeschichte ist eng an Machtpolitik gekoppelt. Persönliches Schicksal und europäische Großereignisse greifen ineinander.",
    insight:
      "An Regula Engel-Egli lässt sich zeigen, wie «große Geschichte» und private Lebensführung einander durchdringen.",
  },
  {
    id: "erinnerung",
    label: "Erinnerungskultur",
    kicker: "Kontext 4",
    title: "Warum erinnert man sich gerade an sie?",
    context:
      "Museums- und Medienbeiträge stellen heute besonders die Mischung aus Mutterschaft, Ausnahmebiografie, Kriegsnähe und Selbstschreibung heraus.",
    relevance:
      "Nicht jede Offiziersfrau wurde zur historischen Figur. Sichtbar bleibt, wer erzählbar wird, Bilder hinterlässt oder sich selbst schriftlich positioniert.",
    insight:
      "Regula Engel-Egli ist nicht nur Gegenstand von Geschichte, sondern auch Ergebnis späterer Auswahl und Erzählung.",
  },
];

const scenarios = [
  {
    id: "s1",
    title: "Wie liest du die Memoiren am sinnvollsten?",
    prompt:
      "Welche Haltung ist für die Arbeit mit Regula Engel-Eglis Text am tragfähigsten?",
    choices: [
      {
        id: "s1a",
        label: "Man sollte alles wörtlich nehmen, weil nur Augenzeuginnen echte Geschichte liefern.",
        outcome:
          "Zu simpel. Das Selbstzeugnis ist wertvoll, aber es bleibt eine erinnernde und stilisierende Erzählung mit eigener Absicht.",
      },
      {
        id: "s1b",
        label: "Man sollte den Text mit anderen Quellen vergleichen und dabei sowohl Nähe als auch Inszenierung beachten.",
        outcome:
          "Das ist die stärkste historische Lesart. Gerade die Spannung zwischen Erlebnisnähe und Selbststilisierung macht den Text ergiebig.",
      },
      {
        id: "s1c",
        label: "Man sollte Memoiren grundsätzlich misstrauen und lieber nur Lexikonartikel verwenden.",
        outcome:
          "Auch das greift zu kurz. Ohne Selbstzeugnisse ginge gerade die Innensicht auf Erfahrung, Emotion und Selbstbild verloren.",
      },
    ],
  },
  {
    id: "s2",
    title: "Was leistet der Begriff «Schweizer Amazone»?",
    prompt:
      "Welche Deutung trifft die Wirkung dieses Etiketts am besten?",
    choices: [
      {
        id: "s2a",
        label: "Der Begriff ist vollkommen neutral und beschreibt nur sachlich ihren Militärdienst.",
        outcome:
          "Nein. «Amazone» ist ein stark aufgeladener Begriff, der Faszination und Ausnahme produziert.",
      },
      {
        id: "s2b",
        label: "Der Begriff macht Regula Engel sichtbar, kann aber die historische Komplexität auf eine Heldinnenfigur verkürzen.",
        outcome:
          "Das trifft die Ambivalenz gut. Genau deshalb sollte der Begriff im Unterricht nicht nur übernommen, sondern untersucht werden.",
      },
      {
        id: "s2c",
        label: "Der Begriff ist wertlos, weil er jede historische Arbeit unmöglich macht.",
        outcome:
          "Zu pauschal. Als Gegenstand der Analyse ist er gerade sehr nützlich, weil er spätere Erinnerungsmuster offenlegt.",
      },
    ],
  },
  {
    id: "s3",
    title: "Warum veröffentlichte sie ihre Lebensgeschichte?",
    prompt:
      "Welche Erklärung ist am historisch überzeugendsten?",
    choices: [
      {
        id: "s3a",
        label: "Nur aus literarischer Eitelkeit.",
        outcome:
          "Dafür gibt es keine tragfähige Grundlage. Die Quellen betonen ihre prekäre Lage nach Waterloo und dem Tod des Mannes.",
      },
      {
        id: "s3b",
        label: "Aus wirtschaftlicher Not, aber auch, um ihre außergewöhnliche Biografie in eine erzählbare Form zu bringen.",
        outcome:
          "Das ist die überzeugendste Verbindung von Sozialgeschichte und Schreibabsicht.",
      },
      {
        id: "s3c",
        label: "Nur auf direkten Befehl Napoleons.",
        outcome:
          "Historisch nicht haltbar. Napoleon war da längst aus ihrer unmittelbaren Lebenswelt verschwunden.",
      },
    ],
  },
];

const quizQuestions = [
  {
    id: "q1",
    question: "Welche Quelle ist in dieser Lerneinheit das eigentliche Selbstzeugnis?",
    options: [
      "Der SRF-Artikel",
      "Das bereitgestellte PDF von Frau Oberst Engel",
      "Das Historische Lexikon der Schweiz",
    ],
    answer: 1,
    explanation:
      "Das PDF enthält die memoirenhafte Ich-Erzählung Regula Engel-Eglis und ist damit die primäre Selbstzeugnisbasis.",
  },
  {
    id: "q2",
    question: "Warum ist das Schweizer Soldwesen für Regula Engel-Eglis Biografie wichtig?",
    options: [
      "Weil es erklärt, warum Schweizer Familien in französischen Diensten unterwegs waren",
      "Weil dadurch Waterloo vermieden wurde",
      "Weil Regula Engel-Egli in der Schweiz Offizierin war",
    ],
    answer: 0,
    explanation:
      "Der Kontext des fremden Militärdienstes erklärt die transnationale Lebenswelt der Familie Engel.",
  },
  {
    id: "q3",
    question: "Was macht den Begriff «Schweizer Amazone» problematisch und interessant zugleich?",
    options: [
      "Er ist nur ein neutrales Synonym für Mutter",
      "Er macht sie sichtbar, kann aber auch heroisch vereinfachen",
      "Er stammt direkt aus dem HLS-Eintrag als amtlicher Titel",
    ],
    answer: 1,
    explanation:
      "Gerade die Mischung aus Sichtbarkeit und Zuspitzung macht den Begriff für die Analyse ergiebig.",
  },
  {
    id: "q4",
    question: "Was zeigt Waterloo in Regula Engel-Eglis Erzählung besonders stark?",
    options: [
      "Die völlige Trennung von privatem und politischem Leben",
      "Die Überlagerung von Familiengeschichte, Kriegserfahrung und Selbstdramatisierung",
      "Dass sie nach der Schlacht reich nach Zürich zurückkehrte",
    ],
    answer: 1,
    explanation:
      "Waterloo bündelt persönliche Verluste, Kriegserfahrung und die rhetorische Zuspitzung des Selbstzeugnisses.",
  },
  {
    id: "q5",
    question: "Warum ist der Vergleich mehrerer Quellentypen didaktisch sinnvoll?",
    options: [
      "Weil eine einzige Quelle nie alle Perspektiven vollständig liefert",
      "Weil nur moderne Medien glaubwürdig sind",
      "Weil man Selbstzeugnisse sonst nicht lesen darf",
    ],
    answer: 0,
    explanation:
      "Historisches Lernen gewinnt, wenn Erlebnisbericht, Sachtext, Museum und Rezeption miteinander ins Gespräch gebracht werden.",
  },
];

const initialState = {
  warmupAnswers: {},
  openedTimeline: [],
  visitedTimeline: [],
  highlightedTimeline: [],
  activeRoute: routeSets[0].id,
  routeViewSelections: {},
  visitedRoutes: [routeSets[0].id],
  visitedLenses: [],
  activeLens: sourceLenses[0].id,
  visitedContexts: [],
  activeContext: contextModules[0].id,
  decisions: {},
  activeScenario: scenarios[0].id,
  insights: [],
  reflectionMain: "",
  reflectionTransfer: "",
  quizAnswers: {},
  quizScore: null,
};

const state = loadState();

function loadState() {
  try {
    const raw = localStorage.getItem(storageKey);
    if (!raw) {
      return { ...initialState };
    }

    return {
      ...initialState,
      ...JSON.parse(raw),
    };
  } catch (error) {
    return { ...initialState };
  }
}

function saveState() {
  localStorage.setItem(storageKey, JSON.stringify(state));
  updateDashboard();
  renderInsightList();
}

function moduleDoneFlags() {
  const warmupDone = Object.keys(state.warmupAnswers).length === warmupItems.length;
  const timelineDone = state.visitedTimeline.length >= 6;
  const routeDone = state.visitedRoutes.length === routeSets.length;
  const sourceDone = state.visitedLenses.length === sourceLenses.length;
  const contextDone = state.visitedContexts.length === contextModules.length;
  const decisionsDone = Object.keys(state.decisions).length === scenarios.length;
  const quizDone = Number.isInteger(state.quizScore);

  return {
    warmupDone,
    timelineDone,
    routeDone,
    sourceDone,
    contextDone,
    decisionsDone,
    quizDone,
  };
}

function updateDashboard() {
  const flags = moduleDoneFlags();
  const completed = Object.values(flags).filter(Boolean).length;
  const progress = Math.round((completed / totalModules) * 100);

  document.getElementById("completed-modules").textContent = `${completed} / ${totalModules}`;
  document.getElementById("saved-insights").textContent = String(state.insights.length);
  document.getElementById("quiz-score").textContent =
    Number.isInteger(state.quizScore) ? `${state.quizScore} / ${quizQuestions.length}` : "offen";
  document.getElementById("overall-progress").value = progress;
}

function renderWarmup() {
  const container = document.getElementById("warmup-list");
  container.innerHTML = warmupItems
    .map((item) => {
      const selected = state.warmupAnswers[item.id];
      const isCorrect = selected === item.category;
      const feedback = selected
        ? `<div class="feedback-box"><strong>${isCorrect ? "Treffer" : "Noch nicht ganz"}</strong><p class="feedback-text">${item.feedback}</p></div>`
        : "";

      return `
        <article class="warmup-card ${selected ? "flash" : ""}">
          <div>
            <p class="card-kicker">Aussage</p>
            <h3>${item.statement}</h3>
          </div>
          <div class="warmup-choices">
            ${renderWarmupChoice(item, "ereignis", "Ereignis")}
            ${renderWarmupChoice(item, "kontext", "Kontext")}
            ${renderWarmupChoice(item, "deutung", "Deutung")}
          </div>
          ${selected ? `<p class="meta-line"><strong>Deine Zuordnung:</strong> ${labelForCategory(selected)}</p>` : ""}
          ${feedback}
        </article>
      `;
    })
    .join("");
}

function renderWarmupChoice(item, value, label) {
  const isActive = state.warmupAnswers[item.id] === value ? "is-active" : "";
  return `
    <button class="tag-btn ${isActive}" type="button" data-warmup="${item.id}" data-value="${value}">
      ${label}
    </button>
  `;
}

function labelForCategory(category) {
  if (category === "ereignis") return "Ereignis";
  if (category === "kontext") return "Kontext";
  return "Deutung";
}

function renderTimeline() {
  const container = document.getElementById("timeline-cards");
  container.innerHTML = timelineEvents
    .map((event) => {
      const isOpen = state.openedTimeline.includes(event.id);
      const isMarked = state.highlightedTimeline.includes(event.id);

      return `
        <article class="timeline-card ${isOpen ? "is-open" : ""}">
          <div class="timeline-topline">
            <span class="timeline-year">${event.year}</span>
            <button class="timeline-toggle" type="button" data-timeline-open="${event.id}">
              ${isOpen ? "Schließen" : "Öffnen"}
            </button>
          </div>
          <div>
            <h3>${event.title}</h3>
            <p class="meta-line">${event.summary}</p>
          </div>
          <div class="timeline-detail">
            <div class="feedback-box">
              <strong>Warum diese Station wichtig ist</strong>
              <p class="feedback-text">${event.significance}</p>
            </div>
            <label class="timeline-mark">
              <input type="checkbox" data-timeline-mark="${event.id}" ${isMarked ? "checked" : ""} />
              Diese Station ist für meine Deutung zentral.
            </label>
          </div>
        </article>
      `;
    })
    .join("");
}

function renderRoutes() {
  const switcher = document.getElementById("route-switch");
  const stage = document.getElementById("route-stage");
  const activeRoute = routeSets.find((route) => route.id === state.activeRoute) || routeSets[0];
  const activeViewId = state.routeViewSelections[activeRoute.id] || activeRoute.views[0];
  const activeView = mapViewPresets[activeViewId] || mapViewPresets.overview;

  switcher.innerHTML = routeSets
    .map(
      (route) => `
        <button type="button" class="${route.id === activeRoute.id ? "is-active" : ""}" data-route="${route.id}">
          ${route.label}
        </button>
      `
    )
    .join("");

  stage.innerHTML = `
    <div class="route-layout">
      <article class="route-card route-map-card">
        <div class="route-view-switch">
          ${activeRoute.views
            .map((viewId) => {
              const view = mapViewPresets[viewId];
              return `
                <button type="button" class="${view.id === activeView.id ? "is-active" : ""}" data-route-view="${view.id}">
                  ${view.label}
                </button>
              `;
            })
            .join("")}
        </div>
        <div class="route-map-frame">
          ${buildRouteSvg(activeRoute, activeView.id)}
        </div>
        <p class="route-note">${activeView.hint}. Marker und Detailbuttons öffnen ausführlichere Kontextfenster.</p>
      </article>
      <article class="route-card route-info-card">
        <div>
          <p class="card-kicker">Routenfokus</p>
          <h3>${activeRoute.title}</h3>
          <p>${activeRoute.summary}</p>
        </div>
        <p class="route-view-note"><strong>Aktuelle Ansicht:</strong> ${activeView.label}</p>
        <div class="feedback-box">
          <strong>Warum diese Karte wichtig ist</strong>
          <p class="feedback-text">${activeRoute.insight}</p>
        </div>
        <div>
          <h4>Stationen dieser Route</h4>
          <ol class="route-list">
            ${activeRoute.stops
              .map(
                (stop, index) => `
                  <li class="route-stop-item">
                    <div class="route-stop-main">
                      <span class="route-stop-number">${index + 1}</span>
                      <div>
                        <p class="route-stop-meta">${stop.year} · ${mapLocations[stop.location].label}</p>
                        <strong>${stop.event}</strong>
                      </div>
                    </div>
                    <div class="route-stop-actions">
                      <button class="btn subtle" type="button" data-route-stop="${stop.id}">Mehr erfahren</button>
                    </div>
                  </li>
                `
              )
              .join("")}
          </ol>
        </div>
        <div class="insight-actions">
          <button class="btn ghost" type="button" data-insight="${escapeHtml(activeRoute.insight)}">Merksatz sichern</button>
        </div>
      </article>
    </div>
  `;
}

function buildRouteSvg(route, viewId) {
  const activeView = mapViewPresets[viewId] || mapViewPresets.overview;
  const polyline = route.stops
    .map((stop) => {
      const point = mapLocations[stop.location];
      return `${point.x},${point.y}`;
    })
    .join(" ");

  return `
    <svg class="route-map" viewBox="${activeView.viewBox}" role="img" aria-label="Karte mit Reiseroute">
      <defs>
        <linearGradient id="seaGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#e9f1f5" />
          <stop offset="100%" stop-color="#d9e7ee" />
        </linearGradient>
        <filter id="glow">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <rect x="0" y="0" width="820" height="520" rx="26" fill="url(#seaGradient)" />
      <g class="map-land">
        <path d="M214 76 L278 58 L338 78 L377 112 L432 118 L488 144 L548 193 L578 224 L602 251 L611 280 L587 310 L523 319 L497 343 L454 355 L404 337 L390 294 L334 281 L291 257 L241 223 L217 187 L196 152 L199 108 Z" />
        <path d="M461 226 L497 235 L520 261 L518 312 L495 353 L463 335 L448 299 L446 249 Z" />
        <path d="M603 379 L687 367 L740 387 L738 437 L670 456 L606 432 Z" />
        <path d="M36 78 L116 92 L135 156 L112 224 L84 287 L53 302 L28 263 L22 188 Z" />
        <path d="M287 92 L307 84 L322 93 L316 108 L292 109 Z" />
      </g>
      <g class="map-grid">
        <line x1="0" y1="110" x2="820" y2="110" />
        <line x1="0" y1="220" x2="820" y2="220" />
        <line x1="0" y1="330" x2="820" y2="330" />
        <line x1="160" y1="0" x2="160" y2="520" />
        <line x1="320" y1="0" x2="320" y2="520" />
        <line x1="480" y1="0" x2="480" y2="520" />
        <line x1="640" y1="0" x2="640" y2="520" />
      </g>
      <g class="map-water-labels">
        <text x="240" y="70">Atlantik</text>
        <text x="505" y="400">Mittelmeer</text>
        <text x="630" y="356">Nordafrika</text>
        <text x="660" y="95">Osteuropa</text>
      </g>
      <polyline class="route-line" points="${polyline}" />
      ${route.stops
        .map((stop, index) => {
          const point = mapLocations[stop.location];
          const mapEvent = stop.event.length > 34 ? `${stop.event.slice(0, 31)}…` : stop.event;
          const labelYOffset = index % 2 === 0 ? -18 : 28;
          const cardOffsetX = index % 3 === 0 ? 10 : index % 3 === 1 ? -90 : 16;
          const cardOffsetY = index % 2 === 0 ? -62 : 18;
          return `
            <g class="route-point route-point-button" data-route-stop="${stop.id}" tabindex="0" role="button" aria-label="${stop.year}: ${stop.event} in ${point.label}">
              <circle cx="${point.x}" cy="${point.y}" r="6" />
              <circle cx="${point.x}" cy="${point.y}" r="11" class="route-point-halo" filter="url(#glow)" />
              <circle cx="${point.x}" cy="${point.y}" r="14" class="route-seq-ring" />
              <text x="${point.x}" y="${point.y + 4}" text-anchor="middle" class="route-seq-label">${index + 1}</text>
              <g class="route-label-card" transform="translate(${point.x + cardOffsetX}, ${point.y + cardOffsetY})">
                <rect x="0" y="0" width="120" height="46" rx="10" />
                <text x="10" y="17" class="route-year-label">${stop.year}</text>
                <text x="10" y="34" class="route-place-label">${point.label}</text>
              </g>
              <text x="${point.x + 10}" y="${point.y + labelYOffset}" class="route-event-label">${mapEvent}</text>
              <title>${stop.year} · ${point.label}: ${stop.event}</title>
            </g>
          `;
        })
        .join("")}
    </svg>
  `;
}

function openRouteModal(stopId) {
  const stop = routeStopLookup[stopId];
  const modal = document.getElementById("route-modal");
  if (!stop || !modal) {
    return;
  }

  document.getElementById("route-modal-kicker").textContent = stop.routeLabel;
  document.getElementById("route-modal-title").textContent = stop.event;
  document.getElementById("route-modal-meta").textContent = `${stop.year} · ${stop.locationLabel}`;
  document.getElementById("route-modal-body").innerHTML = `<p>${stop.detail}</p>`;
  modal.hidden = false;
  modal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
}

function closeRouteModal() {
  const modal = document.getElementById("route-modal");
  if (!modal) {
    return;
  }

  modal.hidden = true;
  modal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
}

function renderSources() {
  const switcher = document.getElementById("lens-switch");
  const stage = document.getElementById("source-cards");
  const activeLens = sourceLenses.find((lens) => lens.id === state.activeLens) || sourceLenses[0];

  switcher.innerHTML = sourceLenses
    .map(
      (lens) => `
        <button type="button" class="${lens.id === activeLens.id ? "is-active" : ""}" data-lens="${lens.id}">
          ${lens.label}
        </button>
      `
    )
    .join("");

  stage.innerHTML = `
    <article class="source-card">
      <p class="card-kicker">Perspektive</p>
      <h3>${activeLens.label}</h3>
      <p>${activeLens.intro}</p>
    </article>
    ${activeLens.cards
      .map(
        (card) => `
          <article class="source-card">
            <div>
              <p class="card-kicker">${card.source}</p>
              <h3>${card.title}</h3>
            </div>
            <div class="source-meta">
              ${card.tags.map((tag) => `<span class="pill">${tag}</span>`).join("")}
            </div>
            <div class="quote-box">
              <p>${card.text}</p>
            </div>
            <div class="feedback-box">
              <strong>Didaktischer Gewinn</strong>
              <p class="feedback-text">${card.insight}</p>
            </div>
            <div class="insight-actions">
              <button class="btn ghost" type="button" data-insight="${escapeHtml(card.insight)}">Merksatz sichern</button>
            </div>
          </article>
        `
      )
      .join("")}
  `;
}

function renderContext() {
  const switcher = document.getElementById("context-switch");
  const stage = document.getElementById("context-stage");
  const activeContext =
    contextModules.find((item) => item.id === state.activeContext) || contextModules[0];

  switcher.innerHTML = contextModules
    .map(
      (item) => `
        <button type="button" class="${item.id === activeContext.id ? "is-active" : ""}" data-context="${item.id}">
          ${item.label}
        </button>
      `
    )
    .join("");

  stage.innerHTML = `
    <article class="context-card">
      <div>
        <p class="card-kicker">${activeContext.kicker}</p>
        <h3>${activeContext.title}</h3>
      </div>
      <div class="context-meta">
        <span class="pill">Historische Einbettung</span>
        <span class="pill">${activeContext.label}</span>
      </div>
      <div class="feedback-box">
        <strong>Kontext</strong>
        <p class="feedback-text">${activeContext.context}</p>
      </div>
      <div class="feedback-box">
        <strong>Warum das für Regula Engel-Egli zählt</strong>
        <p class="feedback-text">${activeContext.relevance}</p>
      </div>
      <div class="insight-actions">
        <button class="btn ghost" type="button" data-insight="${escapeHtml(activeContext.insight)}">Merksatz sichern</button>
      </div>
    </article>
  `;
}

function renderScenarios() {
  const switcher = document.getElementById("scenario-tabs");
  const stage = document.getElementById("scenario-stage");
  const activeScenario = scenarios.find((item) => item.id === state.activeScenario) || scenarios[0];
  const selectedChoice = state.decisions[activeScenario.id];

  switcher.innerHTML = scenarios
    .map(
      (item, index) => `
        <button type="button" class="${item.id === activeScenario.id ? "is-active" : ""}" data-scenario="${item.id}">
          Fall ${index + 1}
        </button>
      `
    )
    .join("");

  stage.innerHTML = `
    <article class="scenario-card">
      <div>
        <p class="card-kicker">Deutungsaufgabe</p>
        <h3>${activeScenario.title}</h3>
        <p>${activeScenario.prompt}</p>
      </div>
      ${activeScenario.choices
        .map((choice) => {
          const isSelected = selectedChoice === choice.id;
          return `
            <div class="scenario-choice ${selectedChoice ? "is-answered" : ""}">
              <button class="choice-btn ${isSelected ? "is-selected" : ""}" type="button" data-scenario-choice="${activeScenario.id}" data-choice="${choice.id}">
                ${choice.label}
              </button>
              ${isSelected ? `<div class="scenario-outcome">${choice.outcome}</div>` : ""}
            </div>
          `;
        })
        .join("")}
      <div class="insight-actions">
        <button class="btn ghost" type="button" data-insight="${escapeHtml(bestScenarioInsight(activeScenario.id))}">Merksatz sichern</button>
      </div>
    </article>
  `;
}

function bestScenarioInsight(id) {
  if (id === "s1") {
    return "Memoiren sind besonders wertvoll, wenn man Erlebnisnähe und Selbstinszenierung zugleich mitliest.";
  }

  if (id === "s2") {
    return "Begriffe wie «Schweizer Amazone» sind nicht neutral, sondern Teil späterer Erinnerungskultur.";
  }

  return "Regula Engel-Egli schrieb nicht nur aus Erinnerungswillen, sondern auch aus sozialer und wirtschaftlicher Not.";
}

function renderQuiz() {
  const form = document.getElementById("quiz-form");

  form.innerHTML = quizQuestions
    .map((question, index) => {
      const selected = state.quizAnswers[question.id];

      return `
        <article class="quiz-card">
          <p class="card-kicker">Frage ${index + 1}</p>
          <h3>${question.question}</h3>
          <div class="quiz-options">
            ${question.options
              .map(
                (option, optionIndex) => `
                  <label class="quiz-option">
                    <input type="radio" name="${question.id}" value="${optionIndex}" ${
                      Number(selected) === optionIndex ? "checked" : ""
                    } />
                    <span>${option}</span>
                  </label>
                `
              )
              .join("")}
          </div>
        </article>
      `;
    })
    .join("");
}

function renderInsightList() {
  const list = document.getElementById("insight-list");
  if (!state.insights.length) {
    list.innerHTML = `<li class="empty-state">Noch keine Merksätze gespeichert.</li>`;
    return;
  }

  list.innerHTML = state.insights.map((insight) => `<li>${insight}</li>`).join("");
}

function renderReflections() {
  document.getElementById("reflection-main").value = state.reflectionMain;
  document.getElementById("reflection-transfer").value = state.reflectionTransfer;
}

function addInsight(text) {
  const cleaned = decodeHtml(text).trim();
  if (!cleaned || state.insights.includes(cleaned)) {
    return;
  }

  state.insights.push(cleaned);
  saveState();
}

function escapeHtml(text) {
  return text
    .replaceAll("&", "&amp;")
    .replaceAll('"', "&quot;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}

function decodeHtml(text) {
  const element = document.createElement("textarea");
  element.innerHTML = text;
  return element.value;
}

function scoreQuiz() {
  let score = 0;
  const feedbackLines = [];

  for (const question of quizQuestions) {
    const selected = Number(state.quizAnswers[question.id]);
    const correct = selected === question.answer;
    if (correct) {
      score += 1;
    }

    feedbackLines.push(
      `<p><strong>${question.question}</strong><br>${correct ? "Richtig." : "Noch nicht überzeugend."} ${question.explanation}</p>`
    );
  }

  state.quizScore = score;
  saveState();

  document.getElementById("quiz-feedback").innerHTML = `
    <p><strong>Ergebnis:</strong> ${score} von ${quizQuestions.length}</p>
    ${feedbackLines.join("")}
  `;
}

function resetQuiz() {
  state.quizAnswers = {};
  state.quizScore = null;
  document.getElementById("quiz-feedback").innerHTML = "";
  renderQuiz();
  saveState();
}

function saveReflections() {
  state.reflectionMain = document.getElementById("reflection-main").value.trim();
  state.reflectionTransfer = document.getElementById("reflection-transfer").value.trim();
  saveState();
  document.getElementById("reflection-status").textContent = "Antworten lokal gespeichert.";
}

function resetAll() {
  Object.assign(state, JSON.parse(JSON.stringify(initialState)));
  document.getElementById("quiz-feedback").innerHTML = "";
  document.getElementById("reflection-status").textContent = "Lernstand gelöscht.";
  renderAll();
  saveState();
}

function exportMarkdown() {
  const markdown = [
    "# Regula Engel-Egli: Lernexport",
    "",
    "## Merksätze",
    state.insights.length ? state.insights.map((item) => `- ${item}`).join("\n") : "- Keine Merksätze gespeichert.",
    "",
    "## Eigene Auswertung",
    state.reflectionMain || "_Keine Antwort gespeichert._",
    "",
    "## Methodischer Transfer",
    state.reflectionTransfer || "_Keine Antwort gespeichert._",
    "",
    "## Quiz",
    Number.isInteger(state.quizScore)
      ? `Ergebnis: ${state.quizScore} / ${quizQuestions.length}`
      : "Noch nicht ausgewertet.",
  ].join("\n");

  const blob = new Blob([markdown], { type: "text/markdown;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "regula-engel-lerneinheit-export.md";
  link.click();
  URL.revokeObjectURL(url);
}

function renderAll() {
  renderWarmup();
  renderTimeline();
  renderRoutes();
  renderSources();
  renderContext();
  renderScenarios();
  renderQuiz();
  renderInsightList();
  renderReflections();
  updateDashboard();
}

document.addEventListener("click", (event) => {
  const warmupButton = event.target.closest("[data-warmup]");
  if (warmupButton) {
    const { warmup, value } = warmupButton.dataset;
    state.warmupAnswers[warmup] = value;
    renderWarmup();
    saveState();
    return;
  }

  const timelineOpenButton = event.target.closest("[data-timeline-open]");
  if (timelineOpenButton) {
    const { timelineOpen } = timelineOpenButton.dataset;
    if (state.openedTimeline.includes(timelineOpen)) {
      state.openedTimeline = state.openedTimeline.filter((item) => item !== timelineOpen);
    } else {
      state.openedTimeline.push(timelineOpen);
      if (!state.visitedTimeline.includes(timelineOpen)) {
        state.visitedTimeline.push(timelineOpen);
      }
    }
    renderTimeline();
    saveState();
    return;
  }

  const lensButton = event.target.closest("[data-lens]");
  if (lensButton) {
    const { lens } = lensButton.dataset;
    state.activeLens = lens;
    if (!state.visitedLenses.includes(lens)) {
      state.visitedLenses.push(lens);
    }
    renderSources();
    saveState();
    return;
  }

  const routeButton = event.target.closest("[data-route]");
  if (routeButton) {
    const { route } = routeButton.dataset;
    state.activeRoute = route;
    const routeConfig = routeSets.find((item) => item.id === route);
    if (routeConfig && !state.routeViewSelections[route]) {
      state.routeViewSelections[route] = routeConfig.views[0];
    }
    if (!state.visitedRoutes.includes(route)) {
      state.visitedRoutes.push(route);
    }
    renderRoutes();
    saveState();
    return;
  }

  const routeViewButton = event.target.closest("[data-route-view]");
  if (routeViewButton) {
    state.routeViewSelections[state.activeRoute] = routeViewButton.dataset.routeView;
    renderRoutes();
    saveState();
    return;
  }

  const routeStopButton = event.target.closest("[data-route-stop]");
  if (routeStopButton) {
    openRouteModal(routeStopButton.dataset.routeStop);
    return;
  }

  const routeModalClose = event.target.closest("[data-route-modal-close]");
  if (routeModalClose) {
    closeRouteModal();
    return;
  }

  const contextButton = event.target.closest("[data-context]");
  if (contextButton) {
    const { context } = contextButton.dataset;
    state.activeContext = context;
    if (!state.visitedContexts.includes(context)) {
      state.visitedContexts.push(context);
    }
    renderContext();
    saveState();
    return;
  }

  const scenarioButton = event.target.closest("[data-scenario]");
  if (scenarioButton) {
    state.activeScenario = scenarioButton.dataset.scenario;
    renderScenarios();
    saveState();
    return;
  }

  const choiceButton = event.target.closest("[data-scenario-choice]");
  if (choiceButton) {
    const scenarioId = choiceButton.dataset.scenarioChoice;
    const choiceId = choiceButton.dataset.choice;
    state.decisions[scenarioId] = choiceId;
    renderScenarios();
    saveState();
    return;
  }

  const insightButton = event.target.closest("[data-insight]");
  if (insightButton) {
    addInsight(insightButton.dataset.insight);
  }
});

document.addEventListener("change", (event) => {
  const timelineMark = event.target.closest("[data-timeline-mark]");
  if (timelineMark) {
    const { timelineMark: eventId } = timelineMark.dataset;
    if (timelineMark.checked) {
      if (!state.highlightedTimeline.includes(eventId)) {
        state.highlightedTimeline.push(eventId);
      }
    } else {
      state.highlightedTimeline = state.highlightedTimeline.filter((item) => item !== eventId);
    }
    saveState();
    return;
  }

  if (event.target.matches(".quiz-option input")) {
    state.quizAnswers[event.target.name] = Number(event.target.value);
    saveState();
  }
});

document.getElementById("quiz-submit").addEventListener("click", scoreQuiz);
document.getElementById("quiz-reset").addEventListener("click", resetQuiz);
document.getElementById("save-reflection").addEventListener("click", saveReflections);
document.getElementById("export-markdown").addEventListener("click", exportMarkdown);
document.getElementById("reset-progress").addEventListener("click", resetAll);
document.getElementById("route-modal-close").addEventListener("click", closeRouteModal);

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeRouteModal();
  }

  const routeStopTarget = event.target.closest ? event.target.closest("[data-route-stop]") : null;
  if (
    routeStopTarget &&
    (event.key === "Enter" || event.key === " ")
  ) {
    event.preventDefault();
    openRouteModal(routeStopTarget.dataset.routeStop);
  }
});

if (!state.visitedLenses.length) {
  state.visitedLenses = [sourceLenses[0].id];
}

if (!state.visitedRoutes.length) {
  state.visitedRoutes = [routeSets[0].id];
}

if (!Object.keys(state.routeViewSelections).length) {
  state.routeViewSelections = Object.fromEntries(
    routeSets.map((route) => [route.id, route.views[0]])
  );
}

if (!state.visitedContexts.length) {
  state.visitedContexts = [contextModules[0].id];
}

renderAll();
saveState();

const storageKey = "regula-engel-lerneinheit-progress";
const totalModules = 7;
const authSessionKey = "regula-engel-auth-ok";
const authPassword = "regula_engel";

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
  fluntern: { label: "Fluntern/Zürich", query: "Fluntern, Zurich, Switzerland", position: { lat: 47.3828, lng: 8.5736 } },
  zurich: { label: "Zürich", query: "Zurich, Switzerland", position: { lat: 47.3769, lng: 8.5417 } },
  chur: { label: "Chur", query: "Chur, Switzerland", position: { lat: 46.8508, lng: 9.5329 } },
  zizers: { label: "Zizers", query: "Zizers, Switzerland", position: { lat: 46.9356, lng: 9.5647 } },
  langwies: { label: "Langwies", query: "Langwies, Arosa, Switzerland", position: { lat: 46.8197, lng: 9.7077 } },
  strassburg: { label: "Straßburg", query: "Strasbourg, France", position: { lat: 48.5734, lng: 7.7521 } },
  rotterdam: { label: "Rotterdam", query: "Rotterdam, Netherlands", position: { lat: 51.9244, lng: 4.4777 } },
  brussels: { label: "Brüssel", query: "Brussels, Belgium", position: { lat: 50.8503, lng: 4.3517 } },
  paris: { label: "Paris", query: "Paris, France", position: { lat: 48.8566, lng: 2.3522 } },
  toulon: { label: "Toulon", query: "Toulon, France", position: { lat: 43.1242, lng: 5.928 } },
  nice: { label: "Nizza", query: "Nice, France", position: { lat: 43.7102, lng: 7.262 } },
  marengo: { label: "Marengo", query: "Spinetta Marengo, Alessandria, Italy", position: { lat: 44.9124, lng: 8.6293 } },
  malta: { label: "Malta", query: "Malta", position: { lat: 35.9375, lng: 14.3754 } },
  alexandria: { label: "Alexandria", query: "Alexandria, Egypt", position: { lat: 31.2001, lng: 29.9187 } },
  cairo: { label: "Kairo", query: "Cairo, Egypt", position: { lat: 30.0444, lng: 31.2357 } },
  acre: { label: "Saint-Jean-d'Acre", query: "Acre, Israel", position: { lat: 32.923, lng: 35.0818 } },
  rome: { label: "Rom", query: "Rome, Italy", position: { lat: 41.9028, lng: 12.4964 } },
  livorno: { label: "Livorno", query: "Livorno, Italy", position: { lat: 43.5485, lng: 10.3106 } },
  turin: { label: "Turin", query: "Turin, Italy", position: { lat: 45.0703, lng: 7.6869 } },
  milan: { label: "Mailand", query: "Milan, Italy", position: { lat: 45.4642, lng: 9.19 } },
  geneva: { label: "Genf", query: "Geneva, Switzerland", position: { lat: 46.2044, lng: 6.1432 } },
  lausanne: { label: "Lausanne", query: "Lausanne, Switzerland", position: { lat: 46.5197, lng: 6.6323 } },
  bern: { label: "Bern", query: "Bern, Switzerland", position: { lat: 46.948, lng: 7.4474 } },
  elba: { label: "Elba", query: "Elba, Italy", position: { lat: 42.781, lng: 10.3 } },
  waterloo: { label: "Waterloo", query: "Waterloo, Belgium", position: { lat: 50.714, lng: 4.3997 } },
  malmaison: { label: "Malmaison", query: "Chateau de Malmaison, Rueil-Malmaison, France", position: { lat: 48.8607, lng: 2.168 } },
  lehavre: { label: "Le Havre", query: "Le Havre, France", position: { lat: 49.4944, lng: 0.1079 } },
  london: { label: "London", query: "London, UK", position: { lat: 51.5072, lng: -0.1276 } },
  calais: { label: "Calais", query: "Calais, France", position: { lat: 50.9513, lng: 1.8587 } },
  charleroi: { label: "Charleroi", query: "Charleroi, Belgium", position: { lat: 50.4108, lng: 4.4446 } },
  lyon: { label: "Lyon", query: "Lyon, France", position: { lat: 45.764, lng: 4.8357 } },
  newyork: { label: "New York", query: "New York, NY, USA", position: { lat: 40.7128, lng: -74.006 } },
  philadelphia: { label: "Philadelphia", query: "Philadelphia, PA, USA", position: { lat: 39.9526, lng: -75.1652 } },
  charleston: { label: "Charleston", query: "Charleston, SC, USA", position: { lat: 32.7765, lng: -79.9311 } },
  neworleans: { label: "New Orleans", query: "New Orleans, LA, USA", position: { lat: 29.9511, lng: -90.0715 } },
};

const mapViewPresets = {
  overview: {
    id: "overview",
    label: "Gesamtkarte",
    center: { lat: 36, lng: 5 },
    zoom: 2,
    hint: "Alle Großräume im Zusammenhang",
  },
  swiss: {
    id: "swiss",
    label: "Schweiz",
    center: { lat: 46.8182, lng: 8.2275 },
    zoom: 7,
    hint: "Zürich, Chur und Bündner Raum im Detail",
  },
  centralEurope: {
    id: "centralEurope",
    label: "Mitteleuropa",
    center: { lat: 47.8, lng: 6.8 },
    zoom: 5,
    hint: "Rheinraum, Niederlande, Paris und Norditalien",
  },
  mediterranean: {
    id: "mediterranean",
    label: "Mittelmeer",
    center: { lat: 36.8, lng: 19.5 },
    zoom: 4,
    hint: "Toulon, Malta, Ägypten, Syrien und Elba",
  },
  atlantic: {
    id: "atlantic",
    label: "Atlantik/USA",
    center: { lat: 39, lng: -38 },
    zoom: 3,
    hint: "Häfen, Atlantikquerung und US-Ostküste",
  },
  usaEast: {
    id: "usaEast",
    label: "USA-Reise",
    center: { lat: 35.4, lng: -79.2 },
    zoom: 4,
    hint: "New York, Philadelphia, Charleston und New Orleans im US-Raum",
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
    googleAction: "directions",
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
    googleAction: "directions",
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
    googleAction: "map",
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
    googleAction: "map",
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
    googleAction: "map",
    views: ["usaEast", "overview", "atlantic", "centralEurope", "swiss"],
    sourceCheck:
      "Quellencheck: Die in dieser Einheit genutzten Texte stützen für die Amerika-Reise besonders New York und New Orleans. Wikipedia nennt New Orleans als Ort, an dem sie ihren Sohn Caspar sterbend fand; SRF nennt die Ankunft in New York nach 76 Tagen auf See. Houston ist in diesen Leitquellen nicht belegt.",
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
        year: "1816",
        event: "Ankunft in New York nach der Atlantiküberquerung",
        detail:
          "SRF nennt New York als Hafen ihrer Ankunft nach 76 Tagen auf See. Damit beginnt die amerikanische Phase ihres Suchwegs nach den überlebenden Kindern in einem neuen politischen und sozialen Umfeld.",
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
        year: "1816/17",
        event: "Reise nach New Orleans zum Sohn Caspar",
        detail:
          "Wikipedia und SRF nennen New Orleans als den Ort, an dem sie ihren Sohn Caspar krank und sterbend auffindet. Für die hier verwendete Quellenlage ist deshalb New Orleans klar belegt, nicht Houston.",
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

const sourceAnalysisTasks = {
  memoiren: {
    question: "Was macht die Memoiren als Quelle besonders ergiebig und zugleich heikel?",
    placeholder: "Formuliere 3 bis 5 Sätze zu Quellenwert und Quellenkritik.",
    criteria: [
      {
        label: "Selbstzeugnis und Nähe",
        keywords: ["selbstzeugnis", "ich", "erlebnis", "naehe", "nähe", "augenzeugin", "innensicht", "erfahrung"],
      },
      {
        label: "Dramatisierung oder Selbstinszenierung",
        keywords: ["inszenierung", "dramatisierung", "selbstdarstellung", "stilisierung", "ueberzeichnung", "überzeichnung"],
      },
      {
        label: "Vergleich mit anderen Quellen",
        keywords: ["vergleichen", "andere quellen", "quellenkritik", "abgleichen", "lexikon", "museum", "journalismus"],
      },
    ],
    feedbackStrong:
      "Das ist eine starke Quellenanalyse: Du erkennst die Memoiren als dichte Innensicht und hältst zugleich ihre Selbstinszenierung und den Abgleich mit anderen Quellen fest.",
    feedbackMedium:
      "Das trägt schon gut. Noch überzeugender wird es, wenn du Erlebnisnähe und Inszenierung ausdrücklich zusammendenkst.",
    feedbackWeak:
      "Hier fehlt noch der doppelte Blick: Memoiren liefern Nähe, aber sie sind keine neutrale Abschrift der Wirklichkeit.",
    emptyPrompt:
      "Nützlich sind hier drei Punkte: Selbstzeugnis, mögliche Dramatisierung und der Vergleich mit anderen Quellentypen.",
  },
  lexikon: {
    question: "Welchen Nutzen hat ein Lexikoneintrag, und was kann er allein gerade nicht leisten?",
    placeholder: "Erkläre in 2 bis 4 Sätzen Stärken und Grenzen des HLS-Eintrags.",
    criteria: [
      {
        label: "Fakten und Orientierung",
        keywords: ["daten", "fakten", "ueberblick", "überblick", "orientierung", "biografisch", "eckdaten"],
      },
      {
        label: "Verdichtung und Knappheit",
        keywords: ["kurz", "knapp", "verdichtet", "zusammenfassung", "kompakt"],
      },
      {
        label: "Grenze ohne Erfahrungsnähe",
        keywords: ["keine innensicht", "keine emotion", "keine erfahrung", "ergänzen", "memoiren", "andere quellen"],
      },
    ],
    feedbackStrong:
      "Das ist historisch überzeugend: Du nutzt den Lexikoneintrag als verlässlichen Rahmen, ohne seine knappe Form mit vollständiger Erklärung zu verwechseln.",
    feedbackMedium:
      "Ein guter Ansatz. Noch stärker wäre, wenn du klar sagst, dass das Lexikon Orientierung gibt, aber keine Erfahrungsnähe bietet.",
    feedbackWeak:
      "Der Kern fehlt noch etwas. Ein Lexikoneintrag ordnet und verdichtet, ersetzt aber keine dichte Quellenarbeit.",
    emptyPrompt:
      "Hilfreich sind hier Faktenüberblick, knappe Verdichtung und die Grenze gegenüber Memoiren oder anderen Quellen.",
  },
  journalismus: {
    question: "Wie rahmen moderne Medienbeiträge Regula Engel-Egli für heutige Leserinnen und Leser?",
    placeholder: "Achte auf Vermittlung, Zuspitzung und Nutzen im Unterricht.",
    criteria: [
      {
        label: "Heutige Vermittlung",
        keywords: ["heute", "modern", "vermitteln", "zugang", "leser", "publikum", "journalistisch"],
      },
      {
        label: "Zuspitzung oder Schlagwortlogik",
        keywords: ["amazone", "titel", "zuspitzung", "zugespitzt", "schlagwort", "heroisch", "spektakulär", "spektakulaer"],
      },
      {
        label: "Didaktischer Nutzen mit Vorsicht",
        keywords: ["unterricht", "einstieg", "nutzen", "quellenkritik", "kritisch", "einordnung"],
      },
    ],
    feedbackStrong:
      "Das ist eine reife Antwort: Du erkennst Medienbeiträge als guten Zugang, benennst aber auch ihre Tendenz zur Zuspitzung.",
    feedbackMedium:
      "Das geht schon in die richtige Richtung. Ergänze noch klarer, dass mediale Titel Aufmerksamkeit erzeugen, aber auch vereinfachen können.",
    feedbackWeak:
      "Noch zu allgemein. Wichtig ist hier der Spagat zwischen Zugänglichkeit und journalistischer Zuspitzung.",
    emptyPrompt:
      "Wichtige Aspekte sind heutige Vermittlung, Schlagwörter wie «Amazone» und der didaktische Nutzen mit Vorsicht.",
  },
  museum: {
    question: "Was macht eine Museumsdarstellung mit der historischen Figur Regula Engel-Egli?",
    placeholder: "Erkläre Auswahl, Inszenierung und regionale Perspektive.",
    criteria: [
      {
        label: "Auswahl und Verdichtung",
        keywords: ["auswahl", "verdichtung", "zuspitzung", "erzählen", "ausstellung", "kuratiert"],
      },
      {
        label: "Visuelle oder narrative Inszenierung",
        keywords: ["bild", "uniform", "inszenierung", "darstellung", "sichtbar", "figur"],
      },
      {
        label: "Regionale Erinnerung",
        keywords: ["bünden", "regional", "erinnerung", "museum", "öffentlichkeit", "public history"],
      },
    ],
    feedbackStrong:
      "Das trifft den Kern: Du liest das Museum nicht als neutrale Ablage, sondern als kuratierte und regional geprägte Erinnerungserzählung.",
    feedbackMedium:
      "Schon gut. Noch präziser wäre, wenn du neben der Inszenierung auch die regionale Perspektive ausdrücklich benennst.",
    feedbackWeak:
      "Hier fehlt noch der Blick auf das Kuratieren. Museen zeigen Geschichte immer durch Auswahl und Inszenierung.",
    emptyPrompt:
      "Denk an drei Punkte: kuratierte Auswahl, visuelle Inszenierung und regionale Erinnerungskultur.",
  },
  ueberlieferung: {
    question: "Warum ist die digitale Überlieferung für die Arbeit mit Regula Engel-Egli historisch wichtig?",
    placeholder: "Verbinde Edition, Zugänglichkeit und Nachleben.",
    criteria: [
      {
        label: "Edition und Digitalisierung",
        keywords: ["digital", "digitalisierung", "edition", "e-rara", "zugang", "online"],
      },
      {
        label: "Nachleben und Rezeption",
        keywords: ["nachleben", "rezeption", "weiterleben", "bibliografie", "viceversa", "publiziert"],
      },
      {
        label: "Forschung und Unterricht",
        keywords: ["forschung", "unterricht", "arbeiten", "vergleich", "verfügbar", "zugänglich"],
      },
    ],
    feedbackStrong:
      "Das ist überzeugend: Du machst deutlich, dass Überlieferung nicht nur Bewahrung, sondern aktive Wiederverfügbarkeit und kulturelles Nachleben bedeutet.",
    feedbackMedium:
      "Ein guter Anfang. Noch stärker wäre, wenn du neben der Digitalisierung auch das bibliografische Nachleben der Figur benennst.",
    feedbackWeak:
      "Noch zu schmal. Hier geht es nicht nur um online verfügbare Dateien, sondern um Edition, Nachleben und neue Nutzungskontexte.",
    emptyPrompt:
      "Hilfreich sind hier Digitalisierung, bibliografisches Nachleben und Nutzen für Forschung oder Unterricht.",
  },
};

const contextAnalysisTasks = {
  soldwesen: {
    question: "Warum verändert der Kontext des Schweizer Soldwesens den Blick auf Regula Engel-Eglis Biografie?",
    placeholder: "Formuliere eine kurze historische Einordnung mit 2 bis 4 Sätzen.",
    criteria: [
      {
        label: "Fremddienstsystem",
        keywords: ["soldwesen", "fremddienst", "fremde dienste", "soeldner", "söldner", "regiment"],
      },
      {
        label: "Migration und Mobilität",
        keywords: ["migration", "mobilitaet", "mobilität", "unterwegs", "transnational", "frankreich"],
      },
      {
        label: "Ent-Exotisierung des Lebenswegs",
        keywords: ["nicht einzigartig", "nicht exotisch", "kontext", "einbettung", "sozialgeschichtlich", "rahmen"],
      },
    ],
    feedbackStrong:
      "Das ist historisch tragfähig: Du zeigst, dass ihr Lebensweg nicht isoliert, sondern im schweizerischen Fremddienstsystem verankert war.",
    feedbackMedium:
      "Schon gut. Noch stärker wird die Antwort, wenn du klar sagst, dass der Kontext ihren Lebensweg weniger exotisch und stärker sozialgeschichtlich verständlich macht.",
    feedbackWeak:
      "Im Moment fehlt die eigentliche Einbettung. Das Soldwesen erklärt die transnationale Bewegung der Familie.",
    emptyPrompt:
      "Wichtig sind Fremddienst, Mobilität und die Einordnung ihres Lebenswegs in einen breiteren historischen Rahmen.",
  },
  frauen: {
    question: "Warum hilft der Kontext «Frauen im Krieg», Regula Engel-Egli genauer zu verstehen?",
    placeholder: "Zeige, warum sie besonders ist, aber nicht völlig isoliert.",
    criteria: [
      {
        label: "Frauen im Kriegsraum",
        keywords: ["frauen", "krieg", "tross", "versorgung", "cantin", "arbeit", "präsenz", "praesenz"],
      },
      {
        label: "Nicht völlig singulär",
        keywords: ["nicht allein", "nicht isoliert", "nicht einzigartig", "kontinuum", "breiter"],
      },
      {
        label: "Amazone als Überzeichnung",
        keywords: ["amazone", "ueberzeichnung", "überzeichnung", "zuspitzung", "ausnahme"],
      },
    ],
    feedbackStrong:
      "Das ist differenziert: Du machst Regula Engel-Egli als besondere Figur sichtbar, ohne sie aus der allgemeinen weiblichen Kriegspräsenz herauszulösen.",
    feedbackMedium:
      "Das trägt schon. Noch besser wäre, wenn du deutlicher sagst, dass der Begriff «Amazone» das Außergewöhnliche zusätzlich zuspitzt.",
    feedbackWeak:
      "Hier fehlt noch der Vergleichsrahmen. Historisch wichtig ist gerade, dass Frauen im Kriegsraum präsenter waren, als der Ausnahmebegriff vermuten lässt.",
    emptyPrompt:
      "Denk an weibliche Arbeit im Kriegsraum, ihre besondere, aber nicht isolierte Rolle und die Zuspitzung durch «Amazone».",
  },
  napoleon: {
    question: "Wie greifen in Regula Engel-Eglis Leben Napoleon und Familiengeschichte ineinander?",
    placeholder: "Verbinde politische Großereignisse mit biografischen Folgen.",
    criteria: [
      {
        label: "Aufstieg und Sturz Napoleons",
        keywords: ["napoleon", "aufstieg", "sturz", "elba", "waterloo", "1814", "1815"],
      },
      {
        label: "Verzahnung von Politik und Biografie",
        keywords: ["biografie", "familie", "persönlich", "persoenlich", "machtpolitik", "verzahnung", "verbunden"],
      },
      {
        label: "Wendepunkte als Lebensbruch",
        keywords: ["wendepunkt", "bruch", "verlust", "zusammenbruch", "krieg", "lebensweg"],
      },
    ],
    feedbackStrong:
      "Das ist eine starke Einordnung: Du machst sichtbar, dass Napoleons Machtverlauf nicht Hintergrund, sondern Strukturprinzip ihrer eigenen Lebensgeschichte ist.",
    feedbackMedium:
      "Schon tragfähig. Noch präziser wäre, wenn du Elba oder Waterloo als konkrete Knotenpunkte zwischen Politik und Privatleben benennst.",
    feedbackWeak:
      "Noch zu allgemein. Hier geht es gerade darum, große Politik und Familienbiografie miteinander zu verschränken.",
    emptyPrompt:
      "Wichtige Begriffe sind Napoleon, Elba oder Waterloo, Familie und biografischer Bruch.",
  },
  erinnerung: {
    question: "Warum ist Erinnerungskultur für Regula Engel-Egli nicht nur Nachgeschichte, sondern Teil ihres historischen Bildes?",
    placeholder: "Erkläre in 2 bis 4 Sätzen Auswahl, Medien und spätere Deutung.",
    criteria: [
      {
        label: "Spätere Auswahl und Erzählung",
        keywords: ["auswahl", "später", "spaeter", "erzählung", "deutung", "nachgeschichte"],
      },
      {
        label: "Medien und Museen",
        keywords: ["museum", "medien", "srf", "nationalmuseum", "öffentlichkeit", "oeffentlichkeit"],
      },
      {
        label: "Nicht neutrales Bild",
        keywords: ["nicht neutral", "sichtbar", "rezeption", "erinnerungskultur", "rahmung", "inszenierung"],
      },
    ],
    feedbackStrong:
      "Das ist überzeugend: Du verstehst ihr Bild nicht als bloße Überlieferung, sondern als Ergebnis späterer Auswahl, Rahmung und Öffentlichkeit.",
    feedbackMedium:
      "Ein guter Ansatz. Noch stärker wäre, wenn du konkrete Akteure wie Medien oder Museum ausdrücklich nennst.",
    feedbackWeak:
      "Hier fehlt noch der Gedanke, dass historische Figuren erst durch spätere Auswahl und Erzählung sichtbar bleiben.",
    emptyPrompt:
      "Hilfreich sind hier spätere Auswahl, Medien oder Museen und die Einsicht, dass ihr Bild nicht neutral entstanden ist.",
  },
};

const scenarioAnalysisTasks = {
  s1: {
    question: "Formuliere selbst eine tragfähige Regel dafür, wie man Regula Engel-Eglis Memoiren historisch lesen sollte.",
    placeholder: "Schreibe eine kurze Deutung in 2 bis 4 Sätzen.",
    criteria: [
      {
        label: "Selbstzeugnis ernst nehmen",
        keywords: ["selbstzeugnis", "memoiren", "erfahrung", "nähe", "naehe", "innensicht"],
      },
      {
        label: "Mit anderen Quellen vergleichen",
        keywords: ["vergleichen", "andere quellen", "abgleichen", "quellenkritik", "lexikon", "museum"],
      },
      {
        label: "Inszenierung mitdenken",
        keywords: ["inszenierung", "dramatisierung", "selbstdarstellung", "stilisierung"],
      },
    ],
    feedbackStrong:
      "Das ist eine historisch belastbare Regel: Du vermeidest sowohl blinden Glauben als auch pauschales Misstrauen.",
    feedbackMedium:
      "Schon gut. Noch stärker wird die Deutung, wenn du ausdrücklich sagst, dass Nähe und Selbstinszenierung gleichzeitig gelesen werden müssen.",
    feedbackWeak:
      "Hier fehlt noch die Balance. Gute Quellenarbeit nimmt Memoiren ernst, ohne sie wörtlich mit Wahrheit gleichzusetzen.",
    emptyPrompt:
      "Nützlich sind hier Selbstzeugnis, Vergleich mit anderen Quellen und die Idee von Inszenierung oder Dramatisierung.",
  },
  s2: {
    question: "Deute selbst den Ausdruck «Schweizer Amazone» und erkläre seine Chancen und Risiken.",
    placeholder: "Formuliere eine begründete Deutung in 2 bis 4 Sätzen.",
    criteria: [
      {
        label: "Sichtbarkeit oder Aufmerksamkeit",
        keywords: ["sichtbar", "aufmerksamkeit", "interesse", "zugang", "prägnant", "praegnant"],
      },
      {
        label: "Verkürzung oder Heroisierung",
        keywords: ["verkürzung", "verkuerzung", "heroisierung", "zuspitzung", "überzeichnung", "ueberzeichnung"],
      },
      {
        label: "Erinnerungskulturelle Deutung",
        keywords: ["erinnerung", "rezeption", "später", "spaeter", "deutung", "nachleben"],
      },
    ],
    feedbackStrong:
      "Das ist differenziert: Du liest das Etikett als wirkungsvolles Schlagwort und zugleich als problematische spätere Rahmung.",
    feedbackMedium:
      "Ein guter Ansatz. Noch stärker wäre, wenn du neben der Zuspitzung auch den erinnerungskulturellen Charakter des Begriffs benennst.",
    feedbackWeak:
      "Noch zu einseitig. Der Begriff ist weder bloß hilfreich noch bloß falsch, sondern gerade wegen seiner Ambivalenz analytisch interessant.",
    emptyPrompt:
      "Denke an Sichtbarkeit, Heroisierung oder Verkürzung und an spätere Erinnerungskultur.",
  },
  s3: {
    question: "Begründe selbst, warum die Publikation ihrer Lebensgeschichte nach 1815 historisch plausibel ist.",
    placeholder: "Verbinde soziale Lage, Schreibabsicht und Selbstdeutung.",
    criteria: [
      {
        label: "Prekäre Lage oder Armut",
        keywords: ["not", "armut", "prekär", "prekaer", "lebensunterhalt", "geld", "existenz"],
      },
      {
        label: "Publikation als Strategie",
        keywords: ["publikation", "veröffentlichung", "veroeffentlichung", "strategie", "überleben", "ueberleben", "hilfe"],
      },
      {
        label: "Eigene Geschichte erzählbar machen",
        keywords: ["lebensgeschichte", "erinnerung", "selbstdeutung", "erzählen", "sichtbarkeit", "autorin"],
      },
    ],
    feedbackStrong:
      "Das ist überzeugend: Du verbindest soziale Not, Veröffentlichung und bewusste Selbstdeutung zu einer historisch plausiblen Gesamtdeutung.",
    feedbackMedium:
      "Schon gut. Noch stärker wird die Antwort, wenn du neben der wirtschaftlichen Not ausdrücklich den erzählerischen Selbstentwurf nennst.",
    feedbackWeak:
      "Hier fehlt noch der soziale und publizistische Zusammenhang. Die Publikation war nicht nur Erinnern, sondern auch Strategie.",
    emptyPrompt:
      "Wichtige Punkte sind prekäre Lage, Veröffentlichung als Strategie und ihre eigene Lebensgeschichte als Erzählung.",
  },
};

const quizQuestions = [
  {
    id: "q1",
    question: "Warum ist das Schweizer Soldwesen zentral, um Regula Engel-Eglis Biografie zu verstehen?",
    placeholder: "Formuliere 2 bis 4 Sätze mit eigenem historischen Zusammenhang.",
    criteria: [
      {
        label: "Schweizer in fremden Diensten",
        keywords: ["soldwesen", "fremddienst", "fremden dienst", "fremde dienste", "fremdenregiment", "soeldner", "söldner", "militaerdienst", "militärdienst"],
      },
      {
        label: "Transnationale Mobilität",
        keywords: ["migration", "mobilitaet", "mobilität", "wanderung", "unterwegs", "transnational", "europaweit", "frankreich", "franzoesisch", "französisch"],
      },
      {
        label: "Biografische Einbettung",
        keywords: ["erklaert", "erklärt", "kontext", "lebensweg", "biografie", "familie", "regiment"],
      },
    ],
    feedbackStrong:
      "Deine Antwort ist historisch tragfähig: Du verknüpfst Regulas Biografie mit dem schweizerischen Fremddienstsystem und machst die Mobilität der Familie verständlich.",
    feedbackMedium:
      "Das geht schon in die richtige Richtung. Noch stärker wird die Antwort, wenn du das Soldwesen ausdrücklich als schweizerischen Fremddienst und als Rahmen für die Familienmigration benennst.",
    feedbackWeak:
      "Im Moment bleibt die Antwort noch zu allgemein. Entscheidend ist, dass das Schweizer Soldwesen erklärt, warum eine Schweizer Familie überhaupt in französischen Kriegsräumen unterwegs war.",
    emptyPrompt:
      "Wichtig wären hier mindestens die Begriffe Fremddienst oder Soldwesen, die Mobilität der Familie und die Einbettung in französische Dienste.",
  },
  {
    id: "q2",
    question: "Wie sollte man Regula Engel-Eglis Memoiren historisch lesen?",
    placeholder: "Nenne, was der Text leisten kann und wo man kritisch bleiben muss.",
    criteria: [
      {
        label: "Selbstzeugnis",
        keywords: ["selbstzeugnis", "memoiren", "ich-erzaehlung", "ich-erzählung", "augenzeugin", "erinnerungstext"],
      },
      {
        label: "Quellenkritik und Vergleich",
        keywords: ["vergleichen", "andere quellen", "quellenkritik", "abgleichen", "lexikon", "museum", "journalistisch", "perspektiven"],
      },
      {
        label: "Selbstinszenierung",
        keywords: ["inszenierung", "selbstdarstellung", "dramatisierung", "stilisierung", "erzaehlkonstruktion", "erzählkonstruktion"],
      },
    ],
    feedbackStrong:
      "Das ist eine starke quellenkritische Antwort: Du erkennst die Memoiren zugleich als wertvolles Selbstzeugnis und als bewusst gestaltete Erzählung.",
    feedbackMedium:
      "Ein guter Ansatz. Ergänze noch klarer, dass die Memoiren nicht nur berichten, sondern auch inszenieren und deshalb mit anderen Quellentypen verglichen werden sollten.",
    feedbackWeak:
      "Hier fehlt noch die quellenkritische Spannung. Wichtig ist gerade das Zusammenspiel aus Erlebnisnähe, Erinnerung und Selbststilisierung.",
    emptyPrompt:
      "Nützlich sind hier Begriffe wie Selbstzeugnis, Vergleich mit anderen Quellen und Selbstinszenierung oder Dramatisierung.",
  },
  {
    id: "q3",
    question: "Warum ist Waterloo der zentrale Wendepunkt in ihrer Lebensgeschichte?",
    placeholder: "Beziehe Krieg, Familie und Biografie zusammen aufeinander.",
    criteria: [
      {
        label: "Verluste in der Familie",
        keywords: ["mann", "ehemann", "soehne", "söhne", "tod", "verlust", "familie"],
      },
      {
        label: "Eigene Verwundung",
        keywords: ["verwundet", "verwundung", "wunde", "schwer verletzt", "verletzung"],
      },
      {
        label: "Biografischer Bruch",
        keywords: ["bruch", "wendepunkt", "zusammenbruch", "lebensbruch", "neuanfang", "absturz"],
      },
    ],
    feedbackStrong:
      "Deine Antwort trifft den Kern: Waterloo ist nicht nur eine Schlacht, sondern der Punkt, an dem Krieg, Familienverlust und persönlicher Absturz zusammenfallen.",
    feedbackMedium:
      "Das ist schon tragfähig. Noch besser wäre, wenn du neben dem Tod des Mannes oder der Söhne auch ihre eigene Verwundung oder den biografischen Bruch ausdrücklich nennst.",
    feedbackWeak:
      "Bisher bleibt Waterloo noch zu abstrakt. Historisch zentral wird die Station durch die Verbindung von Schlacht, Familienverlust und eigener Verwundung.",
    emptyPrompt:
      "Für eine gute Antwort brauchst du mindestens den Familienverlust, ihre eigene Verwundung oder den biografischen Bruch nach 1815.",
  },
  {
    id: "q4",
    question: "Warum ist der Titel «Schweizer Amazone» zugleich nützlich und problematisch?",
    placeholder: "Erkläre die Ambivalenz des Begriffs in 2 bis 4 Sätzen.",
    criteria: [
      {
        label: "Sichtbarkeit",
        keywords: ["sichtbar", "aufmerksamkeit", "auffaellig", "auffällig", "markant", "medial", "interesse"],
      },
      {
        label: "Heroisierung oder Zuspitzung",
        keywords: ["heroisch", "heroisierung", "ueberzeichnung", "überzeichnung", "zuspitzung", "spektakulaer", "spektakulär", "vereinfachung"],
      },
      {
        label: "Erinnerungskultur",
        keywords: ["erinnerung", "erinnerungskultur", "rezeption", "nachleben", "spaetere deutung", "spätere deutung"],
      },
    ],
    feedbackStrong:
      "Das ist eine qualifizierte Antwort: Du zeigst, dass der Begriff Aufmerksamkeit schafft, aber zugleich eine spätere, vereinfachende Deutung mittransportiert.",
    feedbackMedium:
      "Schon gut. Noch stärker wird die Antwort, wenn du nicht nur die Zuspitzung erwähnst, sondern auch den Begriff als Teil späterer Erinnerungskultur beschreibst.",
    feedbackWeak:
      "Im Moment fehlt die Ambivalenz. Der Begriff ist weder rein positiv noch rein falsch, sondern zugleich sichtbar machend und verzerrend.",
    emptyPrompt:
      "Hilfreich sind hier drei Aspekte: Sichtbarkeit, Heroisierung oder Vereinfachung und spätere Erinnerungskultur.",
  },
  {
    id: "q5",
    question: "Warum veröffentlichte Regula Engel-Egli ihre Lebensgeschichte nach 1815?",
    placeholder: "Antworte mit sozialer Lage und möglicher Schreibabsicht.",
    criteria: [
      {
        label: "Wirtschaftliche Not",
        keywords: ["not", "armut", "prekär", "unterhalt", "wirtschaftlich", "geld", "existenz", "lebensunterhalt"],
      },
      {
        label: "Publikation als Strategie",
        keywords: ["publikation", "veroeffentlichung", "veröffentlichung", "strategie", "unterstuetzung", "unterstützung", "hilfe", "ueberleben", "überleben"],
      },
      {
        label: "Erinnerung oder Selbstdeutung",
        keywords: ["erinnerung", "lebensgeschichte", "selbstdeutung", "selbstdarstellung", "erzählen", "autor", "autorin"],
      },
    ],
    feedbackStrong:
      "Die Antwort ist überzeugend: Du verbindest ihre prekäre Lage mit der Publikation als Überlebensstrategie und mit dem Wunsch, das eigene Leben erzählbar zu machen.",
    feedbackMedium:
      "Das trägt schon. Noch stärker wäre, wenn du neben der wirtschaftlichen Not ausdrücklich sagst, dass das Schreiben auch eine bewusste Form von Selbstdeutung und öffentlicher Sichtbarkeit war.",
    feedbackWeak:
      "Hier fehlt noch der soziale Hintergrund. Historisch wichtig ist gerade, dass das Schreiben nicht nur Erinnerung, sondern auch materielle Strategie war.",
    emptyPrompt:
      "Gute Antworten nennen ihre prekäre Lage, die Veröffentlichung als Strategie und eine Form von Erinnerung oder Selbstdeutung.",
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
  lensResponses: {},
  activeLens: sourceLenses[0].id,
  visitedContexts: [],
  contextResponses: {},
  activeContext: contextModules[0].id,
  decisions: {},
  activeScenario: scenarios[0].id,
  scenarioResponses: {},
  insights: [],
  reflectionMain: "",
  reflectionTransfer: "",
  quizAnswers: {},
  quizScore: null,
};

const state = loadState();
let googleMapsPromise = null;
let routeMapRenderToken = 0;

const routePalette = {
  schweiz: "#1e3a4c",
  europa: "#7b2f33",
  aegypten: "#b04b43",
  "elba-waterloo": "#8b5e34",
  "amerika-rueckkehr": "#2d5b87",
};

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

function initAuthGate() {
  const gate = document.getElementById("auth-gate");
  const form = document.getElementById("auth-form");
  const input = document.getElementById("auth-password");
  const status = document.getElementById("auth-status");

  if (!gate || !form || !input || !status) {
    return;
  }

  if (sessionStorage.getItem(authSessionKey) === "true") {
    unlockPage();
    return;
  }

  document.body.classList.add("auth-locked");
  gate.setAttribute("aria-hidden", "false");

  setTimeout(() => input.focus(), 40);

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const entered = input.value.trim();

    if (entered === authPassword) {
      sessionStorage.setItem(authSessionKey, "true");
      status.textContent = "";
      input.value = "";
      unlockPage();
      return;
    }

    status.textContent = "Das Passwort stimmt noch nicht.";
    input.select();
  });
}

function unlockPage() {
  const gate = document.getElementById("auth-gate");
  if (gate) {
    gate.setAttribute("aria-hidden", "true");
  }

  document.body.classList.remove("auth-locked");
}

function initBuildBadge() {
  const badge = document.getElementById("build-badge");
  if (!badge) {
    return;
  }

  const appScript = Array.from(document.scripts).find((script) =>
    typeof script.src === "string" && script.src.includes("app.js")
  );

  if (!appScript) {
    badge.textContent = "Build unbekannt";
    return;
  }

  try {
    const url = new URL(appScript.src, window.location.href);
    const version = url.searchParams.get("v");
    badge.textContent = version ? `Build ${version}` : "Build ohne Versionsmarke";
  } catch (error) {
    badge.textContent = "Build unbekannt";
  }
}

function moduleDoneFlags() {
  const warmupDone = Object.keys(state.warmupAnswers).length === warmupItems.length;
  const timelineDone = state.visitedTimeline.length >= 6;
  const routeDone = state.visitedRoutes.length === routeSets.length;
  const sourceDone = sourceLenses.every((lens) => hasTextResponse(state.lensResponses[lens.id]));
  const contextDone = contextModules.every((item) => hasTextResponse(state.contextResponses[item.id]));
  const decisionsDone = scenarios.every((scenario) => hasTextResponse(state.scenarioResponses[scenario.id]));
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

function hasTextResponse(value) {
  return typeof value === "string" && value.trim().length > 0;
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
  const cardsMarkup = warmupItems
    .map((item) => {
      const selected = state.warmupAnswers[item.id];
      const isCorrect = selected === item.category;
      const feedback = selected
        ? `<div class="feedback-box"><strong>${isCorrect ? "Treffer" : "Noch nicht ganz"}</strong><p class="feedback-text">${item.feedback}</p><p class="feedback-text"><strong>Gemeint ist hier:</strong> ${warmupCategoryHint(item.category)}</p></div>`
        : "";

      return `
        <article class="warmup-card ${selected ? "flash" : ""}">
          <div>
            <p class="card-kicker">Aussage</p>
            <h3>${item.statement}</h3>
          </div>
          <div class="warmup-choices">
            ${renderWarmupChoice(item, "ereignis", "Lebensstation", "eine überprüfbare Information oder ein konkreter Schritt im Lebenslauf")}
            ${renderWarmupChoice(item, "kontext", "Historischer Hintergrund", "eine Einordnung, die erklärt, warum etwas historisch sinnvoll wird")}
            ${renderWarmupChoice(item, "deutung", "Spätere Bewertung", "eine Sichtweise, ein Urteil oder eine Deutung über die Figur")}
          </div>
          ${selected ? `<p class="meta-line"><strong>Deine Zuordnung:</strong> ${labelForCategory(selected)}</p>` : ""}
          ${feedback}
        </article>
      `;
    })
    .join("");

  container.innerHTML = `
    <article class="warmup-guide panel">
      <div class="section-header">
        <p class="card-kicker">So Gehst Du Vor</p>
        <h3>Drei Leitfragen für jede Aussage</h3>
      </div>
      <div class="warmup-definitions">
        <div class="warmup-definition">
          <strong>Lebensstation</strong>
          <p>Frage dich: Beschreibt die Aussage etwas Konkretes, das Regula Engel-Egli erlebt oder getan hat?</p>
        </div>
        <div class="warmup-definition">
          <strong>Historischer Hintergrund</strong>
          <p>Frage dich: Liefert die Aussage Wissen, das ihre Biografie historisch einordnet und erklärt?</p>
        </div>
        <div class="warmup-definition">
          <strong>Spätere Bewertung</strong>
          <p>Frage dich: Wird Regula Engel-Egli hier eher beurteilt, bezeichnet oder aus späterer Sicht interpretiert?</p>
        </div>
      </div>
    </article>
    ${cardsMarkup}
  `;
}

function renderWarmupChoice(item, value, label, note) {
  const isActive = state.warmupAnswers[item.id] === value ? "is-active" : "";
  return `
    <button class="tag-btn ${isActive}" type="button" data-warmup="${item.id}" data-value="${value}">
      <span>${label}</span>
      <span class="choice-note">${note}</span>
    </button>
  `;
}

function labelForCategory(category) {
  if (category === "ereignis") return "Lebensstation";
  if (category === "kontext") return "Historischer Hintergrund";
  return "Spätere Bewertung";
}

function warmupCategoryHint(category) {
  if (category === "ereignis") {
    return "eine konkrete Lebensstation oder überprüfbare Einzelinformation";
  }

  if (category === "kontext") {
    return "eine historische Einordnung, die den Lebensweg verständlicher macht";
  }

  return "eine spätere Bewertung oder Deutung der Figur";
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
        <div class="google-maps-shell">
          <div class="route-map-canvas" id="route-map-canvas" aria-label="Interaktive Google-Karte zur Route ${escapeHtml(activeRoute.label)}"></div>
          <div class="route-map-toolbar">
            <div class="route-map-status" id="route-map-status" aria-live="polite">Google Maps wird geladen...</div>
            <div class="google-maps-actions">
              <a class="btn primary" href="${buildGoogleMapsPrimaryUrl(activeRoute, activeView.id)}" target="_blank" rel="noreferrer">
                ${activeRoute.googleAction === "directions" ? "Route in Google Maps öffnen" : "Ansicht in Google Maps öffnen"}
              </a>
              <a class="btn ghost" href="${buildGoogleMapsViewUrl(activeView.id)}" target="_blank" rel="noreferrer">
                ${activeView.label} separat öffnen
              </a>
            </div>
          </div>
          <div class="route-map-legend">
            <span><strong>Linie:</strong> Hauptverlauf der Reisephase</span>
            <span><strong>Marker:</strong> datierte Stationen, anklickbar für Details</span>
          </div>
          <div class="feedback-box">
            <strong>Aktuelle Ansicht</strong>
            <p class="feedback-text">${activeView.hint}</p>
          </div>
          <p class="route-note">
            Die Basiskarte ist modern, die eingezeichnete Route folgt aber den historisch relevanten Stationen dieser Reisephase.
          </p>
        </div>
      </article>
      <article class="route-card route-info-card">
        <div>
          <p class="card-kicker">Routenfokus</p>
          <h3>${activeRoute.title}</h3>
          <p>${activeRoute.summary}</p>
        </div>
        <p class="route-view-note"><strong>Aktuelle Ansicht:</strong> ${activeView.label}</p>
        ${activeRoute.sourceCheck ? `
          <div class="feedback-box">
            <strong>Quellencheck zur Routenrekonstruktion</strong>
            <p class="feedback-text">${activeRoute.sourceCheck}</p>
          </div>
        ` : ""}
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
                      <a class="btn ghost" href="${buildGoogleMapsSearchUrl(mapLocations[stop.location].query)}" target="_blank" rel="noreferrer">Ort in Google Maps</a>
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

  renderEmbeddedRouteMap(activeRoute, activeView);
}

function buildGoogleMapsSearchUrl(query) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
}

function buildGoogleMapsViewUrl(viewId) {
  const view = mapViewPresets[viewId] || mapViewPresets.overview;
  const center = `${view.center.lat},${view.center.lng}`;
  return `https://www.google.com/maps/@?api=1&map_action=map&center=${encodeURIComponent(center)}&zoom=${view.zoom}&basemap=roadmap`;
}

function buildGoogleMapsPrimaryUrl(route, viewId) {
  if (route.googleAction === "directions") {
    return buildGoogleMapsDirectionsUrl(route);
  }

  return buildGoogleMapsViewUrl(viewId);
}

function buildGoogleMapsDirectionsUrl(route) {
  const queries = route.stops.map((stop) => mapLocations[stop.location].query);
  const origin = queries[0];
  const destination = queries[queries.length - 1];
  const waypoints = queries.slice(1, -1).slice(0, 7);
  let url = `https://www.google.com/maps/dir/?api=1&origin=${encodeURIComponent(origin)}&destination=${encodeURIComponent(destination)}&travelmode=driving`;

  if (waypoints.length) {
    url += `&waypoints=${encodeURIComponent(waypoints.join("|"))}`;
  }

  return url;
}

function renderEmbeddedRouteMap(route, view) {
  const canvas = document.getElementById("route-map-canvas");
  const status = document.getElementById("route-map-status");
  const renderToken = ++routeMapRenderToken;

  if (!canvas || !status) {
    return;
  }

  canvas.innerHTML = "";
  canvas.classList.remove("is-error");
  status.textContent = "Google Maps wird geladen...";

  ensureGoogleMapsLoaded()
    .then(() => {
      if (renderToken !== routeMapRenderToken) {
        return;
      }

      drawRouteMap(canvas, status, route, view);
    })
    .catch((error) => {
      if (renderToken !== routeMapRenderToken) {
        return;
      }

      showRouteMapFallback(canvas, status, route, view, error);
    });
}

function ensureGoogleMapsLoaded() {
  if (window.google && window.google.maps) {
    return Promise.resolve(window.google.maps);
  }

  if (googleMapsPromise) {
    return googleMapsPromise;
  }

  const apiKey = window.GOOGLE_MAPS_API_KEY;
  if (!apiKey || apiKey === "HIER_DEIN_API_KEY") {
    return Promise.reject(new Error("missing_api_key"));
  }

  googleMapsPromise = new Promise((resolve, reject) => {
    const existing = document.querySelector('script[data-google-maps-loader="true"]');
    if (existing) {
      existing.addEventListener("load", () => resolve(window.google.maps), { once: true });
      existing.addEventListener("error", () => reject(new Error("load_failed")), { once: true });
      return;
    }

    const script = document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/js?key=${encodeURIComponent(apiKey)}&loading=async`;
    script.async = true;
    script.defer = true;
    script.dataset.googleMapsLoader = "true";
    script.onload = () => {
      if (window.google && window.google.maps) {
        resolve(window.google.maps);
        return;
      }

      reject(new Error("maps_unavailable"));
    };
    script.onerror = () => reject(new Error("load_failed"));
    document.head.appendChild(script);
  });

  return googleMapsPromise.catch((error) => {
    googleMapsPromise = null;
    throw error;
  });
}

function drawRouteMap(canvas, status, route, view) {
  const googleMaps = window.google.maps;
  const routeColor = routePalette[route.id] || routePalette.europa;
  const stops = route.stops.map((stop, index) => ({
    ...stop,
    order: index + 1,
    locationData: mapLocations[stop.location],
  }));
  const path = stops.map((stop) => stop.locationData.position);
  const map = new googleMaps.Map(canvas, {
    center: view.center,
    zoom: view.zoom,
    mapTypeControl: true,
    streetViewControl: false,
    fullscreenControl: true,
    gestureHandling: "cooperative",
  });

  const infoWindow = new googleMaps.InfoWindow();
  const bounds = new googleMaps.LatLngBounds();

  path.forEach((point) => bounds.extend(point));

  new googleMaps.Polyline({
    path,
    geodesic: true,
    strokeColor: routeColor,
    strokeOpacity: 0.92,
    strokeWeight: 4,
    map,
  });

  stops.forEach((stop) => {
    const marker = new googleMaps.Marker({
      position: stop.locationData.position,
      map,
      title: `${stop.year} - ${stop.event}`,
      label: {
        text: String(stop.order),
        color: "#fffaf2",
        fontWeight: "700",
      },
      icon: {
        path: googleMaps.SymbolPath.CIRCLE,
        fillColor: routeColor,
        fillOpacity: 1,
        strokeColor: "#fffaf2",
        strokeWeight: 2,
        scale: 13,
      },
    });

    marker.addListener("click", () => {
      infoWindow.setContent(`
        <div class="map-infowindow">
          <p class="map-infowindow-meta">${stop.year} · ${stop.locationData.label}</p>
          <strong>${escapeHtml(stop.event)}</strong>
          <p>${escapeHtml(stop.detail)}</p>
          <button type="button" class="map-infowindow-button" data-map-modal="${stop.id}">Großes Detailfenster öffnen</button>
        </div>
      `);
      infoWindow.open({ anchor: marker, map });
    });

    marker.addListener("dblclick", () => {
      openRouteModal(stop.id);
    });
  });

  if (view.id === "overview" && path.length > 1) {
    map.fitBounds(bounds, 72);
  } else {
    map.setCenter(view.center);
    map.setZoom(view.zoom);
  }

  googleMaps.event.addListener(infoWindow, "domready", () => {
    const detailButton = document.querySelector(".map-infowindow-button[data-map-modal]");
    if (!detailButton) {
      return;
    }

    detailButton.addEventListener("click", () => {
      openRouteModal(detailButton.dataset.mapModal);
    }, { once: true });
  });

  status.textContent = `${route.stops.length} Stationen sichtbar. Marker anklicken für Kurzinfos, Detailfenster per Button öffnen.`;
}

function showRouteMapFallback(canvas, status, route, view, error) {
  const fallbackMessage = mapFallbackMessage(error);

  canvas.classList.add("is-error");
  canvas.innerHTML = `
    <div class="route-map-fallback">
      <strong>Karte konnte nicht geladen werden.</strong>
      <p>${fallbackMessage}</p>
      <div class="google-maps-actions">
        <a class="btn primary" href="${buildGoogleMapsPrimaryUrl(route, view.id)}" target="_blank" rel="noreferrer">
          Google Maps separat öffnen
        </a>
      </div>
    </div>
  `;
  status.textContent = "Fallback aktiv: Die eingebettete Karte ist derzeit nicht verfügbar.";
}

function mapFallbackMessage(error) {
  if (error && error.message === "missing_api_key") {
    return "In config.js ist noch kein Google-Maps-Schlüssel hinterlegt oder der Platzhalter wurde nicht ersetzt.";
  }

  return "Prüfe bitte den API-Schlüssel, die Website-Einschränkung und ob Google Maps auf dieser Seite geladen werden darf.";
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
  const task = sourceAnalysisTasks[activeLens.id];
  const answer = typeof state.lensResponses[activeLens.id] === "string" ? state.lensResponses[activeLens.id] : "";

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
    <article class="source-card source-workspace">
      <div>
        <p class="card-kicker">Arbeitsauftrag</p>
        <h3>${task.question}</h3>
      </div>
      <label class="analysis-prompt" for="source-response">${task.placeholder}</label>
      <textarea
        class="analysis-answer"
        id="source-response"
        rows="5"
        data-source-answer="${activeLens.id}"
        placeholder="${task.placeholder}"
      >${escapeHtml(answer)}</textarea>
      <div class="analysis-live-feedback" id="source-feedback-${activeLens.id}"></div>
      <div class="insight-actions">
        <button class="btn ghost" type="button" data-insight="${escapeHtml(activeLens.cards[0].insight)}">Merksatz sichern</button>
      </div>
    </article>
  `;

  updateSourceLiveFeedback(activeLens.id);
}

function renderContext() {
  const switcher = document.getElementById("context-switch");
  const stage = document.getElementById("context-stage");
  const activeContext =
    contextModules.find((item) => item.id === state.activeContext) || contextModules[0];
  const task = contextAnalysisTasks[activeContext.id];
  const answer =
    typeof state.contextResponses[activeContext.id] === "string" ? state.contextResponses[activeContext.id] : "";

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
    <article class="context-card context-workspace">
      <div>
        <p class="card-kicker">Transferaufgabe</p>
        <h3>${task.question}</h3>
      </div>
      <label class="analysis-prompt" for="context-response">${task.placeholder}</label>
      <textarea
        class="analysis-answer"
        id="context-response"
        rows="5"
        data-context-answer="${activeContext.id}"
        placeholder="${task.placeholder}"
      >${escapeHtml(answer)}</textarea>
      <div class="analysis-live-feedback" id="context-feedback-${activeContext.id}"></div>
    </article>
  `;

  updateContextLiveFeedback(activeContext.id);
}

function renderScenarios() {
  const switcher = document.getElementById("scenario-tabs");
  const stage = document.getElementById("scenario-stage");
  const activeScenario = scenarios.find((item) => item.id === state.activeScenario) || scenarios[0];
  const task = scenarioAnalysisTasks[activeScenario.id];
  const answer =
    typeof state.scenarioResponses[activeScenario.id] === "string" ? state.scenarioResponses[activeScenario.id] : "";

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
      <div class="scenario-reference-list">
        ${activeScenario.choices
          .map(
            (choice, index) => `
              <div class="scenario-reference">
                <strong>Orientierung ${index + 1}</strong>
                <p>${choice.label}</p>
              </div>
            `
          )
          .join("")}
      </div>
      <label class="analysis-prompt" for="scenario-response">${task.placeholder}</label>
      <textarea
        class="analysis-answer"
        id="scenario-response"
        rows="5"
        data-scenario-answer="${activeScenario.id}"
        placeholder="${task.placeholder}"
      >${escapeHtml(answer)}</textarea>
      <div class="analysis-live-feedback" id="scenario-feedback-${activeScenario.id}"></div>
      <div class="insight-actions">
        <button class="btn ghost" type="button" data-insight="${escapeHtml(bestScenarioInsight(activeScenario.id))}">Merksatz sichern</button>
      </div>
    </article>
  `;

  updateScenarioLiveFeedback(activeScenario.id);
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

const quizQuestionLookup = Object.fromEntries(quizQuestions.map((question) => [question.id, question]));

function renderQuiz() {
  const form = document.getElementById("quiz-form");

  form.innerHTML = quizQuestions
    .map((question, index) => {
      const answer = typeof state.quizAnswers[question.id] === "string" ? state.quizAnswers[question.id] : "";

      return `
        <article class="quiz-card">
          <p class="card-kicker">Frage ${index + 1}</p>
          <h3>${question.question}</h3>
          <label class="quiz-prompt" for="${question.id}">${question.placeholder}</label>
          <textarea
            class="quiz-answer"
            id="${question.id}"
            rows="5"
            data-quiz-answer="${question.id}"
            placeholder="${question.placeholder}"
          >${escapeHtml(answer)}</textarea>
          <div class="quiz-live-feedback" id="quiz-live-${question.id}"></div>
        </article>
      `;
    })
    .join("");

  quizQuestions.forEach((question) => {
    updateQuizLiveFeedback(question.id);
  });
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

function normalizeText(text) {
  return text
    .toLowerCase()
    .replaceAll("ä", "ae")
    .replaceAll("ö", "oe")
    .replaceAll("ü", "ue")
    .replaceAll("ß", "ss")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^\p{L}\p{N}\s-]/gu, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function evaluateOpenAnswer(question, answer) {
  const rawAnswer = typeof answer === "string" ? answer.trim() : "";
  if (!rawAnswer) {
    return {
      tone: "empty",
      title: "Noch offen",
      message: question.emptyPrompt,
      matched: [],
      missing: question.criteria.map((criterion) => criterion.label),
      isStrong: false,
    };
  }

  const normalized = normalizeText(rawAnswer);
  const matchedCriteria = question.criteria.filter((criterion) =>
    criterion.keywords.some((keyword) => normalized.includes(normalizeText(keyword)))
  );
  const missingCriteria = question.criteria.filter((criterion) => !matchedCriteria.includes(criterion));
  const ratio = matchedCriteria.length / question.criteria.length;

  if (ratio >= 1) {
    return {
      tone: "strong",
      title: "Sehr tragfähig",
      message: question.feedbackStrong,
      matched: matchedCriteria.map((criterion) => criterion.label),
      missing: [],
      isStrong: true,
    };
  }

  if (ratio >= 0.67) {
    return {
      tone: "medium",
      title: "Schon gut",
      message: question.feedbackMedium,
      matched: matchedCriteria.map((criterion) => criterion.label),
      missing: missingCriteria.map((criterion) => criterion.label),
      isStrong: true,
    };
  }

  return {
    tone: "weak",
    title: "Noch ausbauen",
    message: question.feedbackWeak,
    matched: matchedCriteria.map((criterion) => criterion.label),
    missing: missingCriteria.map((criterion) => criterion.label),
    isStrong: false,
  };
}

function renderQuizLiveFeedbackMarkup(evaluation) {
  return `
    <strong>${evaluation.title}</strong>
    <p>${evaluation.message}</p>
    ${evaluation.matched.length ? `<p class="quiz-feedback-meta"><strong>Erkannt:</strong> ${evaluation.matched.join(", ")}</p>` : ""}
    ${evaluation.missing.length ? `<p class="quiz-feedback-meta"><strong>Noch sinnvoll:</strong> ${evaluation.missing.join(", ")}</p>` : ""}
  `;
}

function renderAnalysisFeedbackMarkup(evaluation) {
  return `
    <strong>${evaluation.title}</strong>
    <p>${evaluation.message}</p>
    ${evaluation.matched.length ? `<p class="quiz-feedback-meta"><strong>Erkannt:</strong> ${evaluation.matched.join(", ")}</p>` : ""}
    ${evaluation.missing.length ? `<p class="quiz-feedback-meta"><strong>Noch sinnvoll:</strong> ${evaluation.missing.join(", ")}</p>` : ""}
  `;
}

function updateSourceLiveFeedback(lensId) {
  const task = sourceAnalysisTasks[lensId];
  const feedback = document.getElementById(`source-feedback-${lensId}`);
  if (!task || !feedback) {
    return;
  }

  const evaluation = evaluateOpenAnswer(task, state.lensResponses[lensId]);
  feedback.className = `analysis-live-feedback is-${evaluation.tone}`;
  feedback.innerHTML = renderAnalysisFeedbackMarkup(evaluation);
}

function updateContextLiveFeedback(contextId) {
  const task = contextAnalysisTasks[contextId];
  const feedback = document.getElementById(`context-feedback-${contextId}`);
  if (!task || !feedback) {
    return;
  }

  const evaluation = evaluateOpenAnswer(task, state.contextResponses[contextId]);
  feedback.className = `analysis-live-feedback is-${evaluation.tone}`;
  feedback.innerHTML = renderAnalysisFeedbackMarkup(evaluation);
}

function updateScenarioLiveFeedback(scenarioId) {
  const task = scenarioAnalysisTasks[scenarioId];
  const feedback = document.getElementById(`scenario-feedback-${scenarioId}`);
  if (!task || !feedback) {
    return;
  }

  const evaluation = evaluateOpenAnswer(task, state.scenarioResponses[scenarioId]);
  feedback.className = `analysis-live-feedback is-${evaluation.tone}`;
  feedback.innerHTML = renderAnalysisFeedbackMarkup(evaluation);
}

function updateQuizLiveFeedback(questionId) {
  const question = quizQuestionLookup[questionId];
  const feedback = document.getElementById(`quiz-live-${questionId}`);

  if (!question || !feedback) {
    return;
  }

  const evaluation = evaluateOpenAnswer(question, state.quizAnswers[questionId]);
  feedback.className = `quiz-live-feedback is-${evaluation.tone}`;
  feedback.innerHTML = renderQuizLiveFeedbackMarkup(evaluation);
}

function scoreQuiz() {
  let score = 0;
  const feedbackLines = [];

  for (const question of quizQuestions) {
    const evaluation = evaluateOpenAnswer(question, state.quizAnswers[question.id]);
    if (evaluation.isStrong) {
      score += 1;
    }

    feedbackLines.push(
      `<p><strong>${question.question}</strong><br>${evaluation.title}. ${evaluation.message}</p>`
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
    if (routeConfig) {
      if (!state.routeViewSelections[route]) {
        state.routeViewSelections[route] = routeConfig.views[0];
      }

      if (
        route === "amerika-rueckkehr" &&
        (!state.routeViewSelections[route] || state.routeViewSelections[route] === "overview")
      ) {
        state.routeViewSelections[route] = "usaEast";
      }
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

  const mapModalButton = event.target.closest("[data-map-modal]");
  if (mapModalButton) {
    openRouteModal(mapModalButton.dataset.mapModal);
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
});

document.addEventListener("input", (event) => {
  const sourceAnswer = event.target.closest("[data-source-answer]");
  if (sourceAnswer) {
    state.lensResponses[sourceAnswer.dataset.sourceAnswer] = sourceAnswer.value;
    updateSourceLiveFeedback(sourceAnswer.dataset.sourceAnswer);
    saveState();
    return;
  }

  const contextAnswer = event.target.closest("[data-context-answer]");
  if (contextAnswer) {
    state.contextResponses[contextAnswer.dataset.contextAnswer] = contextAnswer.value;
    updateContextLiveFeedback(contextAnswer.dataset.contextAnswer);
    saveState();
    return;
  }

  const scenarioAnswer = event.target.closest("[data-scenario-answer]");
  if (scenarioAnswer) {
    state.scenarioResponses[scenarioAnswer.dataset.scenarioAnswer] = scenarioAnswer.value;
    updateScenarioLiveFeedback(scenarioAnswer.dataset.scenarioAnswer);
    saveState();
    return;
  }

  const quizAnswer = event.target.closest("[data-quiz-answer]");
  if (!quizAnswer) {
    return;
  }

  state.quizAnswers[quizAnswer.dataset.quizAnswer] = quizAnswer.value;
  updateQuizLiveFeedback(quizAnswer.dataset.quizAnswer);
  saveState();
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

initAuthGate();
initBuildBadge();
renderAll();
saveState();

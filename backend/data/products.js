const products = [
  {
    title: 'MSI GeForce RTX 3090 Gaming X Trio',
    display_image:
      'https://cyberport.scene7.com/is/image/cyberport/200910112702600301900093O?$Zoom_1000$',
    description:
      'Die Grafikprozessoren der GeForce RTX™ 30-Serie bieten die ultimative Leistung für Gamer und Entwickler. Angetrieben von Ampere, NVIDIAS RTX-Architektur der 2. Generation, und mit neuen RT- und Tensor-Recheneinheiten und Streaming-Multiprozessoren für die realistischste Raytracing-Grafik und die neuesten KI-Funktionen.',
    brand: 'MSI',
    category: 'Graphics Card',
    available: true,
    is_best_seller: false,
    price: 2399,
  },
  {
    title: 'Logitech MX Master 3',
    display_image:
      'https://cyberport.scene7.com/is/image/cyberport/210112143155500301900023V?$Zoom_1000$',
    description:
      'MX Master 3 steht für Präzision und unbegrenztes Potenzial. Das elektromagnetische MagSpeed-Scrollrad bietet bis zu 90 % mehr Geschwindigkeit, 87 % höhere Präzision ** und wechselt nahezu lautlos zwischen den Modi. App-spezifische Tastenanpassungen beschleunigen Ihren Workflow. Und der Darkfield-Sensor mit 4.000 DPI ermöglicht die Abtastung auf quasi allen Oberflächen – selbst auf Glas.',
    brand: 'Logitech',
    category: 'Peripherals',
    available: true,
    is_best_seller: true,
    price: 97,
  },
  {
    title: 'Apple MacBook Air 13,3 Zoll',
    display_image:
      'https://cyberport.scene7.com/is/image/cyberport/201113143743500701900177C?$Zoom_1000$',
    description:
      'Das MacBook Air ist das dünnste und leichteste Apple Notebook – jetzt verwandelt durch den leistungsstarken Apple M1 Chip. Für einen gigantischen Sprung bei der CPU und Grafikleistung und bis zu 18 Stunden Batterielaufzeit. Das dünnste und leichteste Apple Notebook bekommt die Power des Apple M1 Chip. Erledige deine Projekte mit der superschnellen 8-Core CPU. Bring grafikintensive Apps und Games mit einer bis zu 8-Core GPU aufs nächste Level. Und beschleunige Aufgaben für maschinelles Lernen mit der 16-Core Neural Engine. Alles mit einem leisen, lüfterlosen Design und der längsten Batterielaufzeit, die es je gab – bis zu 18 Stunden. 1 MacBook Air. Immer noch perfekt zum Mitnehmen. Aber jetzt noch viel leistungsstärker.',
    brand: 'Apple',
    category: 'Laptop',
    available: false,
    is_best_seller: true,
    price: 1449,
  },
  {
    title: 'HP B3P06A Druckkopf 727',
    display_image:
      'https://cyberport.scene7.com/is/image/cyberport/141015144036500701900067K?$Zoom_1000$',
    description:
      'Mit HP 727 Designjet Druckköpfen erzielen Sie mühelos professionelle Ergebnisse in konsistenter Qualität. Dieser Original HP Druckkopf für 6 Farben wurde gemeinsam mit Ihrem Drucker als optimiertes Drucksystem konzipiert. Schwarz matt, schwarz Foto, cyan, magenta, gelb, grau',
    brand: 'HP',
    category: 'Printers & Ink',
    available: true,
    is_best_seller: false,
    price: 2500,
  },
  {
    title: 'Apple iPhone 12',
    display_image:
      'https://cyberport.scene7.com/is/image/cyberport/201015094757300301900048Z?$Zoom_1000$',
    description:
      'Das iPhone 12 bringt alles in eine neue Dimension mit superschnellem 5G. 1 A14 Bionic, dem schnellsten Chip in einem Smartphone. Einem neuen Zwei-Kamera-System. Und einem faszinierenden Super Retina XDR Display, mit dem du alles in brillanten Details sehen kannst.',
    brand: 'Apple',
    category: 'Smartphone',
    available: true,
    is_best_seller: true,
    price: 769,
  },
  {
    title: 'Nintendo Switch',
    display_image:
      'https://cyberport.scene7.com/is/image/cyberport/190827093705200601900068F?$Zoom_1000$',
    description:
      'Hast du schon mal ein Spiel abgebrochen, weil du nicht genug Zeit zum Spielen hattest? Die Nintendo Switch-Konsole passt sich deiner Situation an, damit du trotz der täglichen Hektik die Spiele spielen kannst, die du spielen willst. In dieser neuen Ära musst du dein Leben nicht anpassen, um Spiele spielen zu können – stattdessen passt sich deine Konsole deinen Umständen an. Spiele wann, wo und mit wem du willst, mit der Freiheit und Flexibilität der verschiedenen Spielmodi.',
    brand: 'Nintendo',
    category: 'Gaming',
    available: false,
    is_best_seller: false,
    price: 305,
  },
  {
    title: 'SanDisk Ultra Dual Drive Go 128 GB',
    display_image:
      'https://cyberport.scene7.com/is/image/cyberport/191022093731900601900136T?$Zoom_1000$',
    description:
      'Geben Sie Speicherplatz auf Ihrem Smartphone2 frei oder nutzen Sie den schnellen Dateitransfer zwischen Geräten mit der schnellen USB 3.1-Geschwindigkeit von bis zu 130MB/s. Das SanDisk Ultra® Dual Drive USB Type-C™ verfügt über einen reversiblen USB Type-C™ Anschluss und einen herkömmlichen USB Anschluss zur schnellen und einfachen Dateiübertragung zwischen Smartphones, Tablets und Computern. Mit der SanDisk® Memory Zone App für Android™ (erhältlich auf Google Play™) können Sie den Speicher und die Inhalte Ihres Geräts bequem verwalten. Das SanDisk Ultra Dual Drive USB Type-C ist die perfekte Lösung für Ihre neuen USB Type-C Geräte und Geräte mit herkömmlichen USB Anschlüssen.',
    brand: 'SanDisk',
    category: 'Storage & Memory',
    available: true,
    is_best_seller: false,
    price: 18,
  },
  {
    title: 'Corsair Vengeance LPX 16GB',
    display_image:
      'https://cyberport.scene7.com/is/image/cyberport/210428101520600301900045F?$Zoom_1000$',
    description:
      'Der VENGEANCE LPX Speicher wurde speziell für leistungsstarke Übertaktung konzipiert. Der Wärmeverteiler besteht aus reinem Aluminium, um die Wärme schneller abzuleiten, während die maßgeschneiderte Hochleistungs-PCB die Wärme kanalisiert und hervorragendes Übertaktungspotenzial bietet. Jeder integrierte Schaltkreis wurde einzeln auf höchstes Leistungspotenzial überprüft.',
    brand: 'Corsair',
    category: 'Storage & Memory',
    available: true,
    is_best_seller: false,
    price: 60,
  },
  {
    title: 'Siemens TI9578X1DE EQ.9 plus',
    display_image:
      'https://cyberport.scene7.com/is/image/cyberport/200331115846000701900070W?$Zoom_1000$',
    description:
      ' Steuern Sie Ihren Kaffeevollautomaten von überall aus mit der innovativen Home Connect App. Individuellere Geschmacksvariationen dank der zusätzlichen Feinaroma-Einstellung im baristaMode. Speichern Sie bis zu zehn individuelle Nutzerprofile und deren persönliche Einstellungen dank individualCoffee System. Zwei Bohnenbehälter mit eigenem Mahlwerk für unverfälschten Geschmack dank des dualBean Systems. Optimale Zubereitung und perfekter Geschmack dank der ausgefeilten Technologie iAroma System',
    brand: 'Siemens',
    category: 'Household',
    available: true,
    is_best_seller: false,
    price: 1945,
  },
  {
    title: 'Reishunger Digitaler Mini Reiskocher',
    display_image:
      'https://cyberport.scene7.com/is/image/cyberport/200121165559200301900046O?$Zoom_1000$',
    description:
      ' Der Digitale Mini Reishunger Reiskocher ist ein vollautomatischer Reis- und Multikocher mit insgesamt 8 verschiedenen Programmen. Neben unterschiedlichen Programmen für die Reiszubereitung, verfügt er über eine Dämpffunktion sowie eine Backfunktion. Sobald der Reis gar ist, schaltet sich das Gerät ganz automatisch in den Warmhaltemodus. Im Warmhaltemodus kann der Reis für bis zu 24 Stunden warm gehalten werden. Insgesamt fasst der Reiskocher 0,6l und ist daher perfekt geeignet für 1-3 Personen. Der herausnehmbare Innentopf hat eine Antihaftbeschichtung aus Keramik, sodass der Reis nicht anbrennt. Abnehmen und reinigen lassen sich auch der Innendeckel, das Dampfventil sowie der Auffangbehälter für das Kondenswasser.',
    brand: 'Reishunger',
    category: 'Household',
    available: true,
    is_best_seller: false,
    price: 107,
  },
]

export default products

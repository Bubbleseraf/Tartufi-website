import creamImage from '../assets/images/crema-tartufo.webp'
import oilImage from '../assets/images/olio-tartufo.webp'
import taglioliniImage from '../assets/images/tagliolini-tartufo.webp'

export const recipes = [
  {
    slug: 'tagliolini-al-tartufo-nero',
    title: 'Tagliolini al tartufo nero',
    category: 'Primi piatti',
    time: '20 minuti',
    difficulty: 'Facile',
    servings: '4 persone',
    ingredientsCount: 5,
    image: taglioliniImage,
    excerpt: 'Burro, pasta fresca e tartufo nero: pochi elementi legati dalla giusta temperatura.',
    introduction: 'Un piatto essenziale, costruito perché il profumo del tartufo resti al centro. La mantecatura deve essere morbida e veloce; le lamelle si aggiungono soltanto alla fine, quando il calore della pasta può liberarne l’aroma senza disperderlo.',
    ingredients: [
      '320 g di tagliolini freschi all’uovo',
      '60 g di burro',
      '40 g di tartufo nero fresco',
      '30 g di Parmigiano Reggiano grattugiato finemente',
      'Sale fino',
    ],
    steps: [
      {
        title: 'Prepara il tartufo',
        copy: 'Rimuovi i residui di terra con una spazzolina morbida appena inumidita e asciuga con cura. Grattugia circa un terzo del tartufo e conserva il resto per le lamelle finali.',
      },
      {
        title: 'Crea la base aromatica',
        copy: 'Sciogli il burro in una padella ampia a fiamma dolcissima. Spegni il fuoco, aggiungi il tartufo grattugiato e lascia che il profumo si apra lentamente senza friggere.',
      },
      {
        title: 'Cuoci e manteca',
        copy: 'Cuoci i tagliolini in acqua salata e scolali molto al dente, conservando una tazza d’acqua di cottura. Trasferiscili nella padella e manteca con il Parmigiano e poca acqua, fino a ottenere una consistenza lucida.',
      },
      {
        title: 'Completa al momento',
        copy: 'Distribuisci subito nei piatti caldi. Affetta il tartufo rimasto direttamente sui tagliolini e servi senza attendere.',
      },
    ],
    note: 'Il punto decisivo è il calore: la salsa deve accogliere il tartufo, non cuocerlo. Tieni la fiamma bassa e aggiungi le lamelle soltanto a piatto finito.',
    productPath: '/prodotto/tartufo-nero-pregiato',
    productLabel: 'Scopri il tartufo nero',
  },
  {
    slug: 'uovo-morbido-e-crema-di-tartufo',
    title: 'Uovo morbido e crema di tartufo',
    category: 'Antipasti',
    time: '15 minuti',
    difficulty: 'Facile',
    servings: '2 persone',
    ingredientsCount: 5,
    image: creamImage,
    excerpt: 'Il tuorlo cremoso incontra una salsa al tartufo avvolgente e pane tostato.',
    introduction: 'L’uovo è uno degli abbinamenti più naturali per il tartufo: la sua morbidezza trattiene gli aromi e li accompagna senza coprirli. Il contrasto con il pane croccante rende il piatto completo pur mantenendolo semplice.',
    ingredients: [
      '2 uova fresche medie',
      '60 g di crema di tartufo',
      '2 fette di pane rustico',
      '1 cucchiaio di olio extravergine di oliva',
      'Sale e pepe nero',
    ],
    steps: [
      {
        title: 'Tosta il pane',
        copy: 'Taglia il pane a bastoncini, condiscilo con poco olio e tostalo in padella o in forno finché risulta dorato e croccante.',
      },
      {
        title: 'Cuoci le uova',
        copy: 'Porta a leggero bollore una casseruola d’acqua. Immergi delicatamente le uova e cuocile per 6 minuti e 30 secondi, quindi passale per un minuto in acqua fredda.',
      },
      {
        title: 'Scalda la crema',
        copy: 'Intiepidisci la crema di tartufo a bagnomaria o in un pentolino a fiamma minima. Deve diventare fluida senza raggiungere il bollore.',
      },
      {
        title: 'Componi il piatto',
        copy: 'Distribuisci la crema sul fondo, sguscia le uova con delicatezza e adagiale al centro. Completa con sale, pepe e i bastoncini di pane caldo.',
      },
    ],
    note: 'Per un tuorlo più fluido riduci la cottura di circa 20 secondi. La crema va scaldata dolcemente: temperature troppo alte ne appiattiscono il profilo aromatico.',
    productPath: '/prodotto/crema-di-tartufo',
    productLabel: 'Scopri la crema di tartufo',
  },
  {
    slug: 'crostini-caprino-e-miele-al-tartufo',
    title: 'Crostini, caprino e miele al tartufo',
    category: 'Aperitivo',
    time: '10 minuti',
    difficulty: 'Facile',
    servings: '4 persone',
    ingredientsCount: 6,
    image: oilImage,
    excerpt: 'Cremoso, dolce e aromatico: un piccolo assaggio costruito sui contrasti.',
    introduction: 'La freschezza leggermente acidula del caprino bilancia la dolcezza del miele, mentre il tartufo dona profondità. È un aperitivo rapido, da preparare all’ultimo momento per mantenere il pane fragrante.',
    ingredients: [
      '8 fette sottili di pane casereccio',
      '160 g di caprino fresco',
      '2 cucchiai di miele al tartufo',
      '20 g di noci sgusciate',
      'Olio extravergine di oliva',
      'Timo fresco e un pizzico di sale',
    ],
    steps: [
      {
        title: 'Rendi il pane croccante',
        copy: 'Spennella le fette con un velo d’olio e tostale da entrambi i lati. Devono essere dorate ai bordi ma ancora piacevoli da mordere.',
      },
      {
        title: 'Lavora il caprino',
        copy: 'Mescola il formaggio con un pizzico di sale e poche foglioline di timo, fino a ottenere una crema soffice. Tritura grossolanamente le noci.',
      },
      {
        title: 'Completa i crostini',
        copy: 'Spalma il caprino sul pane ancora tiepido, aggiungi le noci e termina con un filo sottile di miele al tartufo. Servi immediatamente.',
      },
    ],
    note: 'Usa il miele con misura: deve creare una nota aromatica, non coprire il formaggio. Per un gusto più delicato scegli un caprino fresco e poco stagionato.',
    productPath: '/shop',
    productLabel: 'Esplora la bottega',
  },
]

export const getRecipeBySlug = (slug) => recipes.find((recipe) => recipe.slug === slug)

// data/productsData.ts

export interface Product {
  image: string;
  title: string;
  price: number;
  description: string;
  category: string;
  categorySlug: string; // الحقل الجديد
}

const productsData: Product[] = [
  // Panini
  {
    image: '/images/drinks.webp',
    title: 'Panino con Porchetta',
    price: 5.5,
    description: 'Porchetta artigianale e pane caldo',
    category: 'Panini',
    categorySlug: 'panini',
  },
  {
    image: '/images/drinks.webp',
    title: 'Crudo e Mozzarella',
    price: 6,
    description: 'Prosciutto crudo e mozzarella fresca',
    category: 'Panini',
    categorySlug: 'panini',
  },
  {
    image: '/images/drinks.webp',
    title: 'Salsiccia e Friarielli',
    price: 6.5,
    description: 'Classico napoletano',
    category: 'Panini',
    categorySlug: 'panini',
  },
  {
    image: '/images/drinks.webp',
    title: 'Panino con Pollo',
    price: 5,
    description: 'Pollo grigliato e verdure fresche',
    category: 'Panini',
    categorySlug: 'panini',
  },
  {
    image: '/images/drinks.webp',
    title: 'Tonno e Cipolla',
    price: 5.5,
    description: 'Tonno fresco e cipolla caramellata',
    category: 'Panini',
    categorySlug: 'panini',
  },
  {
    image: '/images/drinks.webp',
    title: 'Vegetariano',
    price: 5,
    description: 'Verdure grigliate e formaggio',
    category: 'Panini',
    categorySlug: 'panini',
  },

  // Sfiziosità
  {
    image: '/images/drinks.webp',
    title: 'Patatine Fritte',
    price: 3,
    description: 'Croccanti e dorate',
    category: 'Sfiziosità',
    categorySlug: 'sfiziosità',
  },
  {
    image: '/images/drinks.webp',
    title: 'Arancini',
    price: 4,
    description: 'Riso, ragù e mozzarella',
    category: 'Sfiziosità',
    categorySlug: 'sfiziosità',
  },
  {
    image: '/images/drinks.webp',
    title: 'Frittatina di Pasta',
    price: 4,
    description: 'Classica napoletana',
    category: 'Sfiziosità',
    categorySlug: 'sfiziosità',
  },
  {
    image: '/images/drinks.webp',
    title: 'Mozzarella in Carrozza',
    price: 3.5,
    description: 'Pane fritto e mozzarella filante',
    category: 'Sfiziosità',
    categorySlug: 'sfiziosità',
  },
  {
    image: '/images/drinks.webp',
    title: 'Olive Ascolane',
    price: 4,
    description: 'Olive ripiene e fritte',
    category: 'Sfiziosità',
    categorySlug: 'sfiziosità',
  },
  {
    image: '/images/drinks.webp',
    title: 'Crocchette di Patate',
    price: 3.5,
    description: 'Patate morbide e dorate',
    category: 'Sfiziosità',
    categorySlug: 'sfiziosità',
  },

  // Prima Colazione
  {
    image: '/images/drinks.webp',
    title: 'Cornetto alla Crema',
    price: 1.5,
    description: 'Crema pasticcera',
    category: 'Prima Colazione',
    categorySlug: 'prima-colazione',
  },
  {
    image: '/images/drinks.webp',
    title: 'Brioche',
    price: 1.5,
    description: 'Soffice e fragrante',
    category: 'Prima Colazione',
    categorySlug: 'prima-colazione',
  },
  {
    image: '/images/drinks.webp',
    title: 'Cornetto al Cioccolato',
    price: 1.7,
    description: 'Ripieno di crema al cioccolato',
    category: 'Prima Colazione',
    categorySlug: 'prima-colazione',
  },
  {
    image: '/images/drinks.webp',
    title: 'Cornetto alla Marmellata',
    price: 1.6,
    description: 'Ripieno di marmellata di fragole',
    category: 'Prima Colazione',
    categorySlug: 'prima-colazione',
  },
  {
    image: '/images/drinks.webp',
    title: 'Fagottino di Mele',
    price: 1.8,
    description: 'Pasta sfoglia e mele caramellate',
    category: 'Prima Colazione',
    categorySlug: 'prima-colazione',
  },
  {
    image: '/images/drinks.webp',
    title: 'Cappuccino e Cornetto',
    price: 2.5,
    description: 'Colazione completa con caffè e cornetto',
    category: 'Prima Colazione',
    categorySlug: 'prima-colazione',
  },

  // Caffetteria
  {
    image: '/images/drinks.webp',
    title: 'Caffè Espresso',
    price: 1,
    description: 'Miscela italiana',
    category: 'Caffetteria',
    categorySlug: 'caffetteria',
  },
  {
    image: '/images/drinks.webp',
    title: 'Cappuccino',
    price: 1.5,
    description: 'Latte caldo e caffè',
    category: 'Caffetteria',
    categorySlug: 'caffetteria',
  },
  {
    image: '/images/drinks.webp',
    title: 'Caffè Latte',
    price: 1.8,
    description: 'Caffè con latte caldo',
    category: 'Caffetteria',
    categorySlug: 'caffetteria',
  },
  {
    image: '/images/drinks.webp',
    title: 'Macchiato',
    price: 1.2,
    description: 'Espresso con una punta di latte',
    category: 'Caffetteria',
    categorySlug: 'caffetteria',
  },
  {
    image: '/images/drinks.webp',
    title: 'Caffè Americano',
    price: 1.5,
    description: 'Caffè lungo e leggerو',
    category: 'Caffetteria',
    categorySlug: 'caffetteria',
  },
  {
    image: '/images/drinks.webp',
    title: 'Caffè Mocha',
    price: 2,
    description: 'Caffè con cioccolato e latte',
    category: 'Caffetteria',
    categorySlug: 'caffetteria',
  },

  // Bevande
  {
    image: '/images/drinks.webp',
    title: 'Acqua Naturale',
    price: 1,
    description: '50cl',
    category: 'Bevande',
    categorySlug: 'bevande',
  },
  {
    image: '/images/drinks.webp',
    title: 'Coca-Cola',
    price: 2.5,
    description: 'Lattina',
    category: 'Bevande',
    categorySlug: 'bevande',
  },
  {
    image: '/images/drinks.webp',
    title: 'Fanta',
    price: 2.5,
    description: 'Lattina',
    category: 'Bevande',
    categorySlug: 'bevande',
  },
  {
    image: '/images/drinks.webp',
    title: 'Sprite',
    price: 2.5,
    description: 'Lattina',
    category: 'Bevande',
    categorySlug: 'bevande',
  },
  {
    image: '/images/drinks.webp',
    title: "Succo d'Arancia",
    price: 2,
    description: '250ml di succo fresco',
    category: 'Bevande',
    categorySlug: 'bevande',
  },
  {
    image: '/images/drinks.webp',
    title: 'Tè Freddo',
    price: 2,
    description: 'Tè alla pesca',
    category: 'Bevande',
    categorySlug: 'bevande',
  },

  // Birre
  {
    image: '/images/drinks.webp',
    title: 'Peroni 33cl',
    price: 2.5,
    description: 'Birra chiara italiana',
    category: 'Birre',
    categorySlug: 'birre',
  },
  {
    image: '/images/drinks.webp',
    title: 'Heineken',
    price: 3,
    description: 'Lager classica',
    category: 'Birre',
    categorySlug: 'birre',
  },
  {
    image: '/images/drinks.webp',
    title: 'Birra Artigianale',
    price: 5,
    description: 'IPA locale',
    category: 'Birre',
    categorySlug: 'birre',
  },

  // Vini e Bollicine
  {
    image: '/images/drinks.webp',
    title: 'Prosecco Calice',
    price: 4,
    description: 'Bollicine venete',
    category: 'Vini e Bollicine',
    categorySlug: 'vini-e-bollicine',
  },
  {
    image: '/images/drinks.webp',
    title: 'Vino Rosso della Casa',
    price: 3,
    description: 'Calice di Aglianico',
    category: 'Vini e Bollicine',
    categorySlug: 'vini-e-bollicine',
  },
  {
    image: '/images/drinks.webp',
    title: 'Vino Bianco Greco',
    price: 3.5,
    description: 'Calice di Greco di Tufo',
    category: 'Vini e Bollicine',
    categorySlug: 'vini-e-bollicine',
  },
];

export { productsData };
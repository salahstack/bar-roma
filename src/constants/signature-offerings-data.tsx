import { Utensils, Wine, House } from 'lucide-react';
const signatureOfferingsData = [
  {
    title: 'Cocktail e bevande',
    description:
      'Cocktail artigianali che valorizzano i nostri spritz esclusivi e una selezione curata di pregiati vini italiani',
    image: '/images/drinks.webp',
    label: 'Visualizza il menu delle bevande',
    href: '#menu',
    icon: Wine,
    category: 'Bevande',
  },
  {
    title: 'TAPAS & ANTIPASTI',
    description:
      'Piccoli piatti autentici, perfetti da condividere, dalle croccanti croquetas alla fresca bruschetta',
    image: '/images/food.webp',
    label: 'Visualizza il menu del cibo',
    href: '#menu',
    category: 'Panini',
    icon: Utensils,
  },
  {
    title: 'ATMOSFERA',
    description:
      'Immergiti nel nostro spazio caldo e accogliente, pensato per conversazioni memorabili.',
    image: '/images/space.webp',
    label: 'Scopri il nostro spazio',
    href: '#spazio',
    icon: House,
  },
];

export { signatureOfferingsData };

/**
 * Node modules
 */
import { type FC } from 'react';
/**
 * Components
 */
import { Button } from './Button';
/**
 * Hooks
 */
import { useFoodCategory } from '../hooks/useFoodCategory';
/**
 * Interfaces
 */
interface CategoryProps {
  label: string;
  href: string;
}

interface FoodCategoriesProps {
  categories: CategoryProps[];
}

const FoodCategories: FC<FoodCategoriesProps> = ({ categories }) => {
  const { activeCategory } = useFoodCategory();
  return (
    <div className='mt-16 pb-1.5 flex items-center gap-2 overflow-x-auto snap-x snap-mandatory'>
      { categories.map(({ label, href }, index) => (
        <Button
          to={`?category=${href}#menu`}
          classes='rounded-3xl text-nowrap snap-center'
          variant={activeCategory === href ? 'primary' : 'secondary'}
          key={index}
        >
          {label}
        </Button>
      ))}
    </div>
  );
};

export default FoodCategories;

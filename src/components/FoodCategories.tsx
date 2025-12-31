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

interface FoodCategoriesProps {
  categories: string[]
}


const FoodCategories: FC<FoodCategoriesProps> = ({ categories }) => {
  const { activeCategory, updateCategory } = useFoodCategory();
  return (
    <div className='mt-16 pb-1.5 flex items-center gap-2 overflow-x-auto snap-x snap-mandatory'>
      {categories.map((category, index) => (
        <Button
        onClick={() => updateCategory(category)}
          classes='rounded-3xl text-nowrap snap-center'
          variant={activeCategory === category ? 'primary' : 'secondary'}
          key={index}
        >
          {category}
        </Button>
      ))}
    </div>
  );
};

export default FoodCategories;

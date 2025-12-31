/**
 * Node modules
 */
import { useState } from 'react';
/**
 * Components
 */
import { Button } from './Button';
/**
 * Constants
 */
import { menuCategoriesData } from '../constants/menu-categories-data';


const FoodCategories = () => {
  const [activeCategory, setActiveCategory] = useState(menuCategoriesData[0]);
  return (
    <div className='mt-16 pb-1.5 flex items-center gap-2 overflow-x-auto snap-x snap-mandatory'>
      {menuCategoriesData.map((category, index) => (
        <Button
        onClick={() => setActiveCategory(category)}
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

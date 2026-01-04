/**
 * Components
 */
import FoodCategories from './FoodCategories';
import Products from './Products';
/**
 * Constants
 */
import { productsData } from '../constants/products-data';
import { menuCategoriesData } from '../constants/menu-categories-data';

const Menu = () => {
  return (
    <section
      className='section bg-roma-cream py-5 reveal-up'
      id='menu'
    >
      <div className='container'>
        <div className='text-center'>
          <p className='uppercase text-roma-gold text-md font-playfair font-medium mb-2'>
            Sapori della casa
          </p>
          <h2 className='font-playfair text-5xl font-bold relative after:absolute after:w-28 after:h-1 after:rounded-lg after:bg-roma-gold after:left-1/2 after:-translate-x-1/2 after:-bottom-7 reveal-up'>
            gusto del bar roma
          </h2>
        </div>
        <FoodCategories categories={menuCategoriesData} />
        <Products products={productsData} />
      </div>
    </section>
  );
};

export default Menu;

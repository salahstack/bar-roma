/**
 * Node modules
 */
import type { FC } from 'react';
/**
 * Components
 */
import ProductCard from './ProductCard';
/**
 * Hooks
 */
import { useFoodCategory } from '../hooks/useFoodCategory';
/**
 * Interfaces
 */

interface ProductCardProps {
  image: string;
  title: string;
  price: number;
  description: string;
  category: string;
}

interface ProductsProps {
  products: ProductCardProps[];
}

const Products: FC<ProductsProps> = ({ products }) => {
  const { activeCategory } = useFoodCategory();

  const filteredProducts = activeCategory ===  'Tutti' ? products : products.filter((product) => product.category === activeCategory);
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-10'>
      {filteredProducts.map(({ image, title, description, price }, index) => (
        <ProductCard
          image={image}
          title={title}
          description={description}
          price={price}
          key={index}
        />
      ))}
    </div>
  );
};

export default Products;

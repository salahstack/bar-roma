/**
 * Node modules
 */
import { useState, type FC } from 'react';
/**
 * Components
 */
import ProductCard from './ProductCard';
import { Button } from './Button';
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
  classes?: string
}

interface ProductsProps {
  products: ProductCardProps[];
}

const Products: FC<ProductsProps> = ({ products }) => {
  const { activeCategory } = useFoodCategory();
  const [showAll, setShowAll] = useState(false);

  let filteredProducts =
    activeCategory === 'Tutti'
      ? products
      : products.filter((product) => product.category === activeCategory);

  const displayedProducts = showAll
    ? filteredProducts
    : filteredProducts.slice(0, 6);

  const handleShowAll = () => setShowAll(true);

  filteredProducts =
    filteredProducts.length <= 6
      ? filteredProducts
      : filteredProducts.slice(0, 6);
  return (
    <>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-10'>
        {displayedProducts.map(({ image, title, description, price }, index) => (
          <ProductCard
            image={image}
            title={title}
            description={description}
            price={price}
            key={index}
            classes='reveal-up'
          />
        ))}
      </div>
      {!showAll && (
        <Button
          classes='mt-5 w-full max-w-sm mx-auto'
          onClick={handleShowAll}
        >
          Load more
        </Button>
      )}
    </>
  );
};

export default Products;

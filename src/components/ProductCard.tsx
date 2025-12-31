/**
 * Node modules
 */
import type { FC } from 'react';
/**
 * Components
 */
import { Button } from './Button';
/**
 * Icons
 */
import { Euro, Plus } from 'lucide-react';
/**
 * Interfaces
 */

interface ProductCardProps {
  image: string;
  title: string;
  price: number;
  description: string;
}

const ProductCard: FC<ProductCardProps> = ({
  image,
  title,
  price,
  description,
}) => {
  return (
    <div className='product-card'>
      <figure className='img-box card-banner'>
        <img
          src={image}
          alt={title}
          width={580}
          height={388}
          loading='lazy'
          className='img-cover'
        />
      </figure>
      <div className='card-content'>
        <div className='flex items-center justify-between gap-3'>
          <h4 className='card-title'>{title}</h4>
          <span className='card-price'>{price} <Euro size={18} /></span>
        </div>
        <p className='card-description'>{description}</p>
        <Button classes='text-xs font-montserrat gap-2 text-nowrap'>
          <Plus /> AGGIUNGERE AL CARRELLO
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;

/**
 * Node modules
 */
import type { FC } from 'react';
/**
 * Icons
 */
import { Euro } from 'lucide-react';
/**
 * Interfaces
 */

interface ProductCardProps {
  image: string;
  title: string;
  price: number;
  description: string;
  classes?: string;
}

const ProductCard: FC<ProductCardProps> = ({
  image,
  title,
  price,
  description,
  classes = ''
}) => {
  return (
    <div className={`product-card ${classes}`}>
      <div>
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
      </div>
      <div className='card-content'>
        <div className='flex items-center justify-between gap-3'>
          <h3 className='card-title'>{title}</h3>
          <span className='card-price'>
            {price} <Euro size={18} />
          </span>
        </div>
        <p className='card-description'>{description}</p>

      </div>
    </div>
  );
};

export default ProductCard;

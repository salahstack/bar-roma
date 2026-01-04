/**
 * Node modules
 */
import type { ComponentType, FC } from 'react';
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

interface SignatureOfferingsCardProps {
  image: string;
  title: string;
  description: string;
  label: string;
  href: string;
  category?: string;
  icon: ComponentType<{ className?: string }>;
  classes?: string
}

const SignatureOfferingsCard: FC<SignatureOfferingsCardProps> = ({
  image,
  title,
  description,
  label,
  href,
  category,
  icon: Icon,
  classes = ''
}) => {
  const { updateCategory } = useFoodCategory();
  return (
    <div className={`signature-offerings-card  ${classes}`}>
      <div className='card-label'>
        <Icon />
      </div>
      <figure className='img-box card-banner'>
        <img
          src={image}
          alt={title}
          loading='lazy'
          width={580}
          height={380}
          className='img-cover'
        />
      </figure>
      <div className='card-content '>
        <h4 className='card-title'>{title}</h4>
        <p className='card-description'>{description}</p>
        <Button
          onClick={() => category && updateCategory(category)}

          to={href}
          classes='text-sm font-montserrat gap-2 text-nowrap'
        >
          {label}
        </Button>
      </div>
    </div>
  );
};

export default SignatureOfferingsCard;

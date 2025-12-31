import type { ComponentType, FC, } from 'react';
import { Button } from './Button';

interface SignatureOfferingsCardProps {
  image: string;
  title: string;
  description: string;
  label: string;
  href: string;
  icon: ComponentType<{ className?: string }>;
}

const SignatureOfferingsCard: FC<SignatureOfferingsCardProps> = ({
  image,
  title,
  description,
  label,
  href,
  icon: Icon,
}) => {
  return (
    <div className='signature-offerings-card'>
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
          to={href}
          classes='text-nowrap uppercase'
        >
          {label}
        </Button>
      </div>
    </div>
  );
};

export default SignatureOfferingsCard;

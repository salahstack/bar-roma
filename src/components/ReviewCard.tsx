/**
 * Node modules
 */
import type { FC } from 'react';
/**
 * Icons
 */
import { Quote, Star } from 'lucide-react';
/**
 * Interfaces
 */

interface ReviewCardProps {
  review: string;
  starsNumber: number;
  reviewerName: string;
}

const ReviewCard: FC<ReviewCardProps> = ({
  review,
  starsNumber,
  reviewerName,
}) => {
  return (
    <div className='review-card'>
      <Quote
        className='mx-auto text-roma-gold fill-roma-gold stroke-none'
        size={40}
      />
      <p className='review-text'>{review}</p>
      <div className='card-stars'>
        {Array.from({ length: starsNumber }).map((_, index) => (
          <Star
            className='text-roma-gold fill-roma-gold stroke-none'
            key={index}
          />
        ))}
      </div>
      <div className='card-metadata'>
        <div className='reviewer-name'>{reviewerName}</div>
        <div className='review-source'>VIA GOOGLE REVIEWS</div>
      </div>
    </div>
  );
};

export default ReviewCard;

/**
 * Icons
 */
import { ChevronLeft, ChevronRight } from 'lucide-react';
/**
 * Swiper
 */
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
/**
 * Components
 */
import ReviewCard from './ReviewCard';
import { IconButton } from './Button';
/**
 * Constants
 */
import { reviewsData } from '../constants/reviews-data';

const Testimonials = () => {
  return (
    <section className='section reveal-up'>
      <div className='container'>
        <div className='text-center'>
          <p className='uppercase text-roma-gold text-md font-playfair font-medium mb-2'>
            Recensioni degli ospiti
          </p>
          <h2 className='font-playfair text-5xl font-bold relative after:absolute after:w-28 after:h-1 after:rounded-lg after:bg-roma-gold after:left-1/2 after:-translate-x-1/2 after:-bottom-7 reveal-up'>
            Cosa dicono i nostri ospiti
          </h2>
        </div>
        <div className='relative'>
          <Swiper
            modules={[Autoplay, Pagination, Navigation]}
            autoplay={{
              delay: 3500,
              disableOnInteraction: true,
            }}
            navigation={{
              nextEl: '.swiper-button-next-custom',
              prevEl: '.swiper-button-prev-custom',
            }}
            pagination={{
              clickable: true,
              bulletClass: 'swiper-pagination-bullet',
              bulletActiveClass: 'swiper-pagination-bullet-active',
            }}
            spaceBetween={24}
            slidesPerView={1}
            className='mt-16'
          >
            {reviewsData.map(({ review, starsNumber, reviewerName }, key) => (
              <SwiperSlide key={key}>
                <ReviewCard
                  review={review}
                  starsNumber={starsNumber}
                  reviewerName={reviewerName}
                />
              </SwiperSlide>
            ))}
          </Swiper>
          <IconButton classes='swiper-button-prev-custom absolute left-0 md:left-10 lg:left-22 xl:left-40 top-[calc(50%-24px)] -translate-y-1/2 z-10 disabled:opacity-40 disabled:pointer-events-none'>
            <ChevronLeft className='w-6 h-6' />
          </IconButton>
          <IconButton classes='swiper-button-next-custom absolute right-0 md:right-10 lg:right-22 xl:right-40 top-[calc(50%-24px)] -translate-y-1/2 z-10 disabled:opacity-40 disabled:pointer-events-none'>
            <ChevronRight className='w-6 h-6' />
          </IconButton>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

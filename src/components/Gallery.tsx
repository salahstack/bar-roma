/**
 * Constants
 */
import { Camera } from 'lucide-react';
import { galleryData } from '../constants/gallery-data';
import { Button } from './Button';

const Gallery = () => {
  return (
    <section
      className='section reveal-up'
      id='galleria'
    >
      <div className='container'>
        <div className='font-playfair text-center'>
          <p className='uppercase text-roma-gold text-md font-playfair font-medium mb-2'>
            Viaggio visivo
          </p>
          <h2 className='font-playfair text-5xl font-bold reveal-up'>
            Momenti al Bar Roma
          </h2>
          <p className='text-roma-gray/70 text-md mx-auto max-w-md mt-7 relative after:absolute after:w-28 after:h-1 after:rounded-lg after:bg-roma-gold after:left-1/2 after:-translate-x-1/2 after:-bottom-7'>
            Vivi l’arte dell’ospitalità italiana attraverso il nostro sguardo,
            dall’espresso del mattino all’aperitivo della sera.
          </p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-16'>
          {galleryData.map((item, index) => (
            <figure
              className='img-box gallery-card reveal-up'
              key={index}
            >
              <img
                src={item}
                alt='gallery'
                loading='lazy'
                className='img-cover'
              />
            </figure>
          ))}
        </div>
        <div className='mt-8'>
          <div className='text-center font-playfair mb-5'>
            <h3 className='text-3xl font-semibold'>Segui il nostro viaggio</h3>
            <p className='text-roma-gold text-xl'>@barroma</p>
          </div>
          <div className='w-full max-w-96 grid grid-cols-3 gap-2 mx-auto mb-4'>
            {galleryData.map((item, key) => (
              <figure
                className='img-box'
                key={key}
              >
                <img
                  src={item}
                  alt='gallery'
                  className='img-cover'
                  loading='lazy'
                />
              </figure>
            ))}
          </div>
          <Button
            to='https://www.instagram.com/bar_roma_nocera_inferiore/'
            target='_blank'
            classes='gap-4 w-fit rounded-xl mx-auto'
          >
            <Camera /> Seguici su instgram
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Gallery;

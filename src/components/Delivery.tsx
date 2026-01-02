/**
 * Icons
 */
import { Motorbike } from 'lucide-react';
/**
 * Components
 */
import { Button } from './Button';

const Delivery = () => {
  return (
    <section className='section'>
      <div className='container'>
        <div className='text-center'>
          <p className='uppercase text-roma-gold text-md font-playfair font-medium mb-2'>
            CONSEGNATO A CASA TUA
          </p>
          <h2 className='font-playfair text-5xl font-bold relative after:absolute after:w-28 after:h-1 after:rounded-lg after:bg-roma-gold after:left-1/2 after:-translate-x-1/2 after:-bottom-7'>
            Il Bar Roma arriva da te
          </h2>
        </div>
        <figure className='img-box rounded-3xl mt-14 max-w-xl mx-auto'>
          <img
            src='/images/delivery.webp'
            alt='panino hamburger'
            loading='lazy'
            className='img-cover'
          />
        </figure>
        <Button
          to='https://deliveroo.it/en/menu/napoli/nocera-superiore/bar-roma-nocera'
          classes='uppercase gap-3 max-w-md mx-auto text-nowrap my-3'
        >
          <Motorbike className='shrink-0' /> Ordina con Deliveroo
        </Button>
        <p className='text-xs text-gray-500 text-center text-nowrap'>
          Delivery powered by{' '}
          <span className='text-roma-red font-semibold'>Deliveroo</span>
        </p>
      </div>
    </section>
  );
};

export default Delivery;

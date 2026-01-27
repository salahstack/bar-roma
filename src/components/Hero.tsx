/**
 * Components
 */
import { memo } from 'react';
import { Button } from './Button';
/**
 * Icons
 */
import { ArrowRight, ChevronDown } from 'lucide-react';

const Hero = () => {
  return (
    <section
      className='hero'
      id='casa'
    >
      <div className='container h-full flex flex-col items-center justify-center'>
        <div className='text-center relative z-1'>
          <p className='text-roma-gold uppercase font-montserrat font-medium'>
            AUTENTICA ESPERIENZA DI CAFFÈ ITALIANO
          </p>
          <h1>
            <span className='block font-playfair text-white text-5xl font-medium mt-4'>
              Dove La Tradizione
            </span>

            <span className='block font-playfair text-roma-gold text-3xl italic font-semibold mt-2'>
              Incontra Il Gusto
            </span>

            <span className='block font-cormorant text-white text-5xl font-bold mt-2'>
              Dal 1908
            </span>
          </h1>
        </div>
        <div className='mt-6 w-full relative z-1 md:flex items-center gap-4 md:max-w-lg md:mx-auto'>
          <Button
            classes='text-nowrap'
            to='https://deliveroo.it/en/menu/napoli/nocera-superiore/bar-roma-nocera'
            target='_blank'
          >
            Ordina su Deliveroo
          </Button>
          <Button
            classes='mt-4 md:mt-0 gap-3'
            to='#menu'
            variant='secondary'
            aria-label='scopri in nostro menù'
          >
            <span className='whitespace-nowrap'>Scopri in nostro menù</span>
            <ArrowRight aria-hidden='true' />
          </Button>
        </div>
        <div className='text-white relative z-1 w-full text-center mt-10'>
          <a
            href='#la-nostra-storia'
            className='block'
          >
            <span className='block mb-4'> SCORRI</span>
            <ChevronDown className='mx-auto animate-bounce' />
          </a>
        </div>
      </div>
      <div className='hero-overlay'></div>
    </section>
  );
};

export default memo(Hero);

/**
 * Components
 */
import { Button } from './Button';
/**
 * Icons
 */
import { ArrowRight, ChevronDown } from 'lucide-react';

const Hero = () => {
  return (
    <section className='hero' id='casa'>
      <div className='container h-full flex flex-col items-center justify-center'>
        <div className='text-center relative z-1'>
          <p className='text-roma-gold uppercase font-montserrat font-medium'>
            AUTENTICA ESPERIENZA DI CAFFÈ ITALIANO
          </p>
          <h1 className='font-playfair text-white text-5xl font-medium mt-4'>
            Dove La Tradizione
          </h1>
          <h1 className='font-playfair text-roma-gold text-3xl italic font-semibold'>
            Incontra Il Gusto
          </h1>
          <h1 className='font-cormorant text-white text-5xl font-bold'>
            Dal 1908
          </h1>
        </div>
        <div className='mt-6 w-full relative z-1 md:flex items-center gap-4 md:max-w-lg md:mx-auto'>
          <Button>Prenota ora</Button>
          <Button
            classes='mt-4 md:mt-0 gap-3'
            variant='secondary'
            aria-label='scopri in nostro menù'
          >
            <span className='whitespace-nowrap'>Scopri in nostro menù</span>
            <ArrowRight aria-hidden="true" />
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

export default Hero;

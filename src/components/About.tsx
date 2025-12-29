import { ArrowLeft } from 'lucide-react';
import { IconButton } from './Button';
import Tabs from './Tabs';
import Tab from './Tab';

const About = () => {
  const date = new Date();
  const currentYear = date.getFullYear();
  return (
    <section
      className='section bg-roma-cream'
      id='about'
    >
      <div className='container'>
        <div className='flex item-center gap-4 py-10'>
          <IconButton
            variant='secondary'
            aria-label='tornare a casa'
          >
            <ArrowLeft aria-hidden='true' />
          </IconButton>
          <h3 className='text-2xl font-playfair font-semibold mx-auto'>
            Chi siamo / Storia
          </h3>
        </div>

        {/*  */}
        <div className='grid grid-col md:grid-cols-2 gap-4'>
          <Tabs>
            <Tab label='1905'>
              <figure className='img-box rounded-xl h-72 relative border-2 border-roma-gold'>
                <span className='absolute left-0 top-0 bg-roma-red text-white rounded-md h-8 px-2 flex items-center justify-center text-sm font-semibold'>
                  EST. 1905
                </span>
                <img
                  src='/images/bar-roma-1905.webp'
                  alt='bar roma nel 1905'
                  className='img-cover'
                  width={500}
                  height={288}
                  loading='lazy'
                />
              </figure>
            </Tab>
            <Tab label='1950'>
              <figure className='img-box rounded-xl h-72 relative border-2 border-roma-gold'>
                <span className='absolute left-0 top-0 bg-roma-red text-white rounded-md h-8 px-2 flex items-center justify-center text-sm font-semibold'>
                  EST. 1950
                </span>

                <img
                  src='/images/bar-roma-1950.webp'
                  alt='bar roma nel 1950'
                  className='img-cover'
                  width={500}
                  height={288}
                  loading='lazy'
                />
              </figure>
            </Tab>
            <Tab label='1990'>
              <figure className='img-box rounded-xl h-72 relative border-2 border-roma-gold'>
                <span className='absolute left-0 top-0 bg-roma-red text-white rounded-md h-8 px-2 flex items-center justify-center text-sm font-semibold'>
                  EST. 1990
                </span>

                <img
                  src='/images/bar-roma-1990.webp'
                  alt='bar roma nel 1990'
                  className='img-cover'
                  width={500}
                  height={288}
                  loading='lazy'
                />
              </figure>
            </Tab>
            <Tab label={currentYear.toString()}>
              <figure className='img-box rounded-xl h-72 relative border-2 border-roma-gold'>
                <span className='absolute left-0 top-0 bg-roma-red text-white rounded-md h-8 px-2 flex items-center justify-center text-sm font-semibold'>
                  EST. {currentYear.toString()}
                </span>

                <img
                  src='/images/bar-roma-2026.webp'
                  alt='bar roma nel 2026'
                  className='img-cover'
                  width={500}
                  height={288}
                  loading='lazy'
                />
              </figure>
            </Tab>
          </Tabs>
          <div className='text-center pt-10 border-t border-t-roma-gray/20 md:pt-0 md:border-none'>
            <p className='uppercase text-roma-gold text-md font-playfair font-medium mb-2'>
              La nostra eredità
            </p>
            <h2 className='font-playfair text-5xl font-bold relative after:absolute after:w-28 after:h-1 after:rounded-lg after:bg-roma-gold after:left-1/2 after:-translate-x-1/2 after:-bottom-7'>
              115 Anni di Storia
            </h2>
            <q className='font-playfair text-roma-dark/60 font-semibold text-xl text-center block mt-14 mb-4 italic'>
              Un'eredità di Eccellenza Italiana
            </q>
            <p className='font-playfair text-lg text-roma-dark/70 text-center'>
              Dall’apertura nel vivace cuore della città, Bar Roma è rimasto un
              faro costante della vera cultura italiana. Ciò che è iniziato come
              un umile bar per espresso per i lavoratori locali si è evoluto in
              una meta celebrata dagli appassionati di cucina di tutto il mondo.
              Attraverso guerre, cambiamenti culturali e skyline in continua
              trasformazione, la nostra dedizione alla tostatura perfetta e
              all’arte dell’ospitalità non è mai venuta meno.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

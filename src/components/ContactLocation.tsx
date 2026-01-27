/**
 * Icons
 */
import {
  CircleParking,
  Facebook,
  Instagram,
  MessageSquareMore,
  Motorbike,
  Phone,
  Send,
  MapPin,
  Wifi,
} from 'lucide-react';
/**
 * Components
 */
import { Button, IconButton } from './Button';
import MapWithDirections from './MapWithDirections';

/**
 * Constants
 */
import { openingHours } from '../constants/opening-hours';
import { memo } from 'react';

const ContactLocation = () => {
  const date = new Date();
  const currentDayIndex = (date.getDay() + 6) % 7;
  return (
    <section
      className='section bg-roma-cream py-7 mb-0'
      id='contatti'
    >
      <div className='container'>
        <div className='text-center mb-5'>
          <p className='uppercase text-roma-gold text-md font-playfair font-medium mb-2'>
            Visitaci
          </p>
          <h2 className='font-playfair text-5xl font-bold reveal-up'>trova Bar Roma</h2>
        </div>
        {/* Map */}
        <MapWithDirections />
        {/* Map */}

        <div className='p-5 bg-white rounded-xl'>
          <h3 className='text-2xl font-semibold leading-9 border-b-2 border-b-roma-gold mb-8 w-fit reveal-up'>
            Informazioni sui contatti
          </h3>
          <ul className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            <li className='flex items-center lg:justify-center gap-4'>
              <MapPin className=' text-roma-gold' />
              <address className='not-italic font-medium'>
                {' '}
                Via Giuseppe Garibaldi, 13, 84014 Nocera Inferiore SA
              </address>
            </li>
            <li className='flex items-center lg:justify-center gap-4'>
              <Phone className=' text-roma-gold' />
              <div>
                <span className='not-italic font-medium'> 081 517 6727</span>
                <span className='block text-sm text-gray-500 mt-2'>
                  Disponibile 24h
                </span>
              </div>
            </li>

            <li className='flex items-center lg:justify-center gap-4'>
              <Motorbike className=' text-roma-gold' />
              <Button
                classes='text-nowrap'
                to='https://deliveroo.it/en/menu/napoli/nocera-superiore/bar-roma-nocera'
              >
                Ordina su Deliveroo
              </Button>
            </li>
          </ul>
          <div className='mt-4'>
            <h3 className='text-2xl font-semibold leading-9 border-b-2 border-b-roma-gold mb-8 w-fit'>
              Seguici su:
            </h3>
            <div className='flex items-center gap-4'>
              <IconButton to='https://www.instagram.com/bar_roma_nocera_inferiore' aria-label='seguici su Instgram'>
                <Instagram />
              </IconButton>
              <IconButton to='https://www.facebook.com/barromanocera' aria-label='seguici su Facebook'>
                <Facebook />
              </IconButton>
            </div>
          </div>
          <div className='mt-4'>
            <h4 className='text-2xl font-semibold mb-4'>Orari di apertura</h4>
            <ul className='grid grid-cols-1 gap-2'>
              {openingHours.map(({ day, open, close, status }, index) => (
                <li
                  key={index}
                  className={`flex items-center justify-between gap-4 p-2 rounded-md  ${
                    currentDayIndex === index
                      ? 'bg-roma-beige font-medium text-roma-dark border-l-4 border-l-roma-gold'
                      : 'bg-white text-gray-500'
                  }`}
                >
                  <span>{day}</span>
                  {status ? (
                    <span>{status}</span>
                  ) : (
                    <div className='flex items-center gap-1'>
                      <span>{open}</span>
                      <span>-</span>
                      <span>{close}</span>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>
          <div className='flex flex-col gap-3 mt-4 w-full max-w-md mx-auto'>
            <Button
              classes='gap-4 text-nowrap'
              to='https://www.google.com/maps/dir/?api=1&destination=40.74721,14.64332'
            >
              <Send /> ottenere indicazioni
            </Button>
            <Button
              classes='gap-4 bg-green-500'
              to='https://www.instagram.com/bar_roma_nocera_inferiore'
            >
              <MessageSquareMore /> Contattaci
            </Button>
          </div>
          <div className='mt-4 w-full max-w-md mx-auto flex items-center justify-center gap-3 text-gray-500'>
            <div className='p-3 text-center border border-gray-200 bg-gray-100 rounded-xl w-32'>
              <Wifi className='text-roma-gold mx-auto mb-2' />
              <span className='text-xs font-medium'> wifi gratuito per gli ospiti</span>
            </div>
            <div className='p-3 text-center border border-gray-200 bg-gray-100 rounded-xl w-32'>
              <CircleParking className='text-roma-gold mx-auto mb-2' />
              <span className='text-xs font-medium'> parcheggio in strada disponibile</span>
            </div>
          </div>
          <p className='mt-10 text-gray-400 text-sm text-center'>Vicino a Piazza del Corso • a pochi passi da Bar Roma</p>
        </div>
      </div>
    </section>
  );
};

export default memo(ContactLocation);

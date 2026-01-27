/**
 * Node modules
 */
import { memo, type FC } from 'react';
/**
 * Constants
 */
import { navLinks } from '../constants/nav-links';
/**
 * Components
 */
import { IconButton } from './Button';
/**
 * Icons
 */
import { Copyright, Facebook, Instagram, MapPin, Phone } from 'lucide-react';


const Footer: FC = () => {
  return (
    <footer className='bg-roma-dark py-10'>
      <div className='container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
        <div className='pb-8 md:pb-0 border-b border-gray-600 md:border-none'>
          <h5 className='text-white text-4xl font-bold mb-1 reveal-up-footer'>Bar Roma</h5>
          <span className='text-roma-gold uppercase'>Dal 1908</span>
          <p className='text-gray-500 mt-3'>
            Autentica esperienza di caffè italiano situata nel cuore della
            città. Tradizione servita quotidianamente.
          </p>
          <div className='flex items-center gap-4 mt-5'>
            <IconButton to='https://www.instagram.com/bar_roma_nocera_inferiore' classes='reveal-up-footer' aria-label='seguici su Instgram'>
              <Instagram />
            </IconButton>
            <IconButton to='https://www.facebook.com/barromanocera' classes='reveal-up-footer' aria-label='seguici su Facebook'>
              <Facebook />
            </IconButton>
          </div>
        </div>

        <div className='pb-8 md:pb-0 border-b border-gray-600 md:border-none'>
          <h5 className='text-white text-2xl font-bold reveal-up-footer'>Link rapidi</h5>
          <ul className='mt-8 text-gray-400 grid grid-cols-1 gap-3'>
            {navLinks.map(({ label, href }, index) => (
              <li key={index}>
                <a
                  className='font-medium transition-all active:scale-95 hover:text-roma-gold reveal-up-footer'
                  href={href}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className='pb-8 md:pb-0 border-b border-gray-600 md:border-none'>
          <h5 className='text-white text-2xl font-bold reveal-up-footer'>Contatto</h5>
          <ul className='mt-8 text-gray-400 grid grid-cols-1 gap-3'>
            <li className='flex items-center gap-4'>
              <MapPin className='text-roma-gold' />
              <div>
                <span className='text-lg text-white font-semibold block'>
                  Visitaci
                </span>
                <address className='not-italic text-sm'>
                  Via Giuseppe Garibaldi, 13, 84014 Nocera Inferiore SA
                </address>
              </div>
            </li>
            <li className='flex items-center gap-4'>
              <Phone className='text-roma-gold' />
              <div>
                <span className='text-lg text-white font-semibold block'>
                  Chaiamaci
                </span>
                <span className='text-sm'>081 517 6727</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className='mt-7'>
        <p className='text-sm text-gray-400 text-center flex justify-center items-center gap-2'>
          <Copyright size={14} /> {new Date().getFullYear()} Bar Roma. Tutti i diritti
          riservati
        </p>
        <p className='text-center text-sm text-gray-400 flex justify-center items-center gap-2 mt-3'>Sviluppato da<a href="https://www.linkedin.com/in/salaheddine-mjydila" target='_blank' className='text-roma-gold font-medium'>salaheddine mjydila</a></p>
      </div>
    </footer>
  );
};

export default memo(Footer);

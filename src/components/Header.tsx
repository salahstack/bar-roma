/**
 * Components
 */
import { useState } from 'react';
import { IconButton } from './Button';
import Navbar from './Navbar';
/**
 * Icons
 */
import { Menu, X } from 'lucide-react';
/**
 * Constants
 */
import { navLinks } from '../constants/nav-links';

const Header = () => {
  const [isScrolling, setIsScrolling] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => setIsOpen((prev) => !prev);

  window.addEventListener('scroll', () => setIsScrolling(scrollY > 50));
  return (
    <header className={`header ${isScrolling ? 'active' : ''}`}>
      <div className='container flex items-center justify-between gap-4 h-full relative'>
        <a href='#casa'>
          <h1 className='text-xl md:text-3xl font-playfair font-medium text-white whitespace-nowrap'>
            Bar Roma
          </h1>
          <span className='font-cormorant text-roma-gold font-bold'>Dal 1908</span>
        </a>
        <Navbar
          links={navLinks}
          isOpen={isOpen}
        />
        <div className='flex items-center gap-4'>
          <div className='bg-white px-2 py-1 rounded-md flex items-center gap-2 shadow'>
            <span className='block size-2 rounded-full bg-red-600'></span>
            <span className='text-xs font-medium text-red-600 whitespace-nowrap'>
              {' '}
              ILLY PARTNER
            </span>
          </div>
          <IconButton
            variant='outline'
            aria-label='menù'
            classes='md:hidden'
            onClick={handleToggle}
          >
            {isOpen ? (
              <X
                className='text-white'
                aria-hidden='true'
              />
            ) : (
              <Menu
                className='text-white'
                aria-hidden='true'
              />
            )}
          </IconButton>
        </div>
      </div>
    </header>
  );
};

export default Header;

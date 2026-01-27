/**
 * Node modules
 */
import { useCallback, useEffect, useState } from 'react';
/**
 * Components
 */
import { ArrowUp } from 'lucide-react';
import About from './components/About';
import { IconButton } from './components/Button';
import ContactLocation from './components/ContactLocation';
import Delivery from './components/Delivery';
import Footer from './components/Footer';
import Gallery from './components/Gallery';
import Header from './components/Header';
import Hero from './components/Hero';
import Menu from './components/Menu';
import SignatureOfferings from './components/SignatureOfferings';
import Testimonials from './components/Testimonials';
/**
 * Hooks
 */
import { useThrottle } from './hooks/useThrottle';
/**
 * Functions
 */
import { scrollToTop } from './functions/scrollToTop';

function App() {
  const [scrollY, setScrollY] = useState(0);
  const handleScroll = useCallback(() => {
    setScrollY(window.scrollY);
  }, []);

  const throttledScrollY = useThrottle(handleScroll);

  useEffect(() => {
    // scroll function

    // link scroll function to scroll event
    window.addEventListener('scroll', throttledScrollY);

    // Cleanup function
    return () => window.removeEventListener('scroll', throttledScrollY);
  }, [throttledScrollY]);

  return (
    <div className='relative'>
      {/* Header */}
      <Header />
      <main>
        {/* Hero Section */}
        <Hero />
        {/* About Section */}
        <About />
        {/* Signature Offerings Section */}
        <SignatureOfferings />
        {/* Menu */}
        <Menu />
        {/* Gallery */}
        <Gallery />
        {/* Testimonials */}
        <Testimonials />
        {/* Delivery */}
        <Delivery />
        {/* Contact And Location */}
        <ContactLocation />
      </main>
      {/* Footer */}
      <Footer />
      {scrollY > 700 && (
        <IconButton
          classes='fixed bottom-6 right-6 z-1700 shadow-lg'
          onClick={scrollToTop}
        >
          <ArrowUp size={22} />
        </IconButton>
      )}
    </div>
  );
}

export default App;

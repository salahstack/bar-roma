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
 * Functions
 */
import { scrollToTop } from './functions/scrollToTop';
import { useEffect, useState } from 'react';

function App() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    // scroll function
    const handleScroll = () => setIsScrolled(scrollY >= 700);

    // link scroll function to scroll event
    window.addEventListener('scroll', handleScroll);

    // Cleanup function
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
      {isScrolled && (
        <IconButton
          classes='fixed bottom-6 right-6 z-500 shadow-lg'
          onClick={scrollToTop}
        >
          <ArrowUp size={22} />
        </IconButton>
      )}
    </div>
  );
}

export default App;

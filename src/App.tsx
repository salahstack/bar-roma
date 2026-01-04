/**
 * Components
 */
import About from './components/About';
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
 * Gsap
 */
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

/**
 * Register PLugin
 */

gsap.registerPlugin(ScrollTrigger);

function App() {
  useGSAP(() => {
    const elements = gsap.utils.toArray<HTMLElement>('.reveal-up');
    elements.forEach((element) => {
      gsap.to(element, {
        scrollTrigger: {
          trigger: element,
          start: '-200 bottom',
          end: 'bottom 80%',
          scrub: true,
        },

        y: 0,
        opacity: 1,
        duration: 1,
        ease: 'power2.out',
      });
    });
  });
  return (
    <>
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
    </>
  );
}

export default App;

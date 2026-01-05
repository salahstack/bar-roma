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

function App() {
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

/**
 * Components
 */
import About from './components/About';
import Delivery from './components/Delivery';
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
    </>
  );
}

export default App;

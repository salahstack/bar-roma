/**
 * Components
 */
import About from './components/About';
import Gallery from './components/Gallery';
import Header from './components/Header';
import Hero from './components/Hero';
import Menu from './components/Menu';
import SignatureOfferings from './components/SignatureOfferings';

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
    </>
  );
}

export default App;

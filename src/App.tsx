/**
 * Components
 */
import About from "./components/About";
import Header from "./components/Header";
import Hero from "./components/Hero";
import SignatureOfferings from "./components/SignatureOfferings";

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
    </>
  );
}

export default App;

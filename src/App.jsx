import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ServicesLayers from './components/ServicesLayers';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <ServicesLayers />
      <About />
      <Contact />
    </div>
  );
}

export default App;

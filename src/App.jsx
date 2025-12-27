import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ServicesLayers from './components/ServicesLayers';
import About from './components/About';
import Contact from './components/Contact';

import SmoothScroll from './components/SmoothScroll';

function App() {
  return (
    <SmoothScroll>
      <div className="app">
        <Navbar />
        <Hero />
        <ServicesLayers />
        <About />
        <Contact />
      </div>
    </SmoothScroll>
  );
}

export default App;

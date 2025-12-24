import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ServicesFunction from './components/ServicesFunction';
import ServicesIndustry from './components/ServicesIndustry';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <ServicesFunction />
      <ServicesIndustry />
      <About />
      <Contact />
    </div>
  );
}

export default App;

import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Process from './components/Process';
import WhyUs from './components/WhyUs';
import CTA from './components/CTA';
import Footer from './components/Footer';
import SmoothScroll from './components/SmoothScroll';

function App() {
  return (
    <SmoothScroll>
      <div className="min-h-screen bg-background-light dark:bg-background-dark">
        <Navbar />
        <main>
          <Hero />
          <Services />
          <Process />
          <WhyUs />
          <CTA />
        </main>
        <Footer />
      </div>
    </SmoothScroll>
  );
}

export default App;


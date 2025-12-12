import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ScrollShowcase from './components/ScrollShowcase';
import Benefits from './components/Benefits';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden">
      <Navbar scrolled={scrolled} />
      
      <main className="flex-grow">
        <Hero />
        
        {/* Infinite Scroll Section (Design ref #2) */}
        <section id="showcase" className="py-20 border-t border-studio-text/5 relative z-10 scroll-mt-24">
          <div className="mb-10 text-center px-4">
             <h3 className="text-xl font-medium tracking-wide text-studio-text/60 uppercase">
                Learn Animations
             </h3>
          </div>
          <ScrollShowcase />
        </section>

        <Benefits />
        <Testimonials />
        <Contact />
      </main>

      <Footer />
    </div>
  );
};

export default App;
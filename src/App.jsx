import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import TopBanner from './components/TopBanner';
import MobileBottomBar from './components/MobileBottomBar';
import Hero from './components/Hero';
import About from './components/About';
import Evaluation from './components/Evaluation';
import Differentials from './components/Differentials';
import Gallery from './components/Gallery';
import CallToAction from './components/CallToAction';
import BeforeAfter from './components/BeforeAfter';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Location from './components/Location';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import Footer from './components/Footer';
import './index.css';

function App() {
  useEffect(() => {
    let isNavigating = false;
    
    const handleClick = (e) => {
      const link = e.target.closest('a');
      if (link && link.href && link.href.includes('wa.me')) {
        if (isNavigating) {
          e.preventDefault();
          e.stopPropagation();
          e.stopImmediatePropagation();
          return;
        }
        
        isNavigating = true;
        setTimeout(() => {
          isNavigating = false;
        }, 2000); // Prevent double clicks for 2 seconds
      }
    };

    // Use capture phase to intercept before GTM tracking
    document.addEventListener('click', handleClick, true);
    
    return () => {
      document.removeEventListener('click', handleClick, true);
    };
  }, []);

  return (
    <div className="app-container">
      <header style={{ position: 'fixed', top: 0, left: 0, width: '100%', zIndex: 100, display: 'flex', flexDirection: 'column' }}>
        <TopBanner />
        <Navbar />
      </header>
      <main>
        <Hero />
        <Evaluation />
        <Differentials />
        <BeforeAfter />
        <Gallery />
        <CallToAction />
        <Location />
        <About />
        <Testimonials />
        <FAQ />
      </main>
      <FloatingWhatsApp />
      <MobileBottomBar />
      <Footer />
    </div>
  );
}

export default App;

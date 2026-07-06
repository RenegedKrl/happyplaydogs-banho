import React from 'react';
import Navbar from './components/Navbar';
import TopBanner from './components/TopBanner';
import MobileBottomBar from './components/MobileBottomBar';
import Hero from './components/Hero';
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
        <Testimonials />
        <FAQ />
        <Location />
      </main>
      <FloatingWhatsApp />
      <MobileBottomBar />
      <Footer />
    </div>
  );
}

export default App;

import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import PortfolioSlider from './components/PortfolioSlider';
import ServiceCards from './components/ServiceCards';
import AboutSection from './components/AboutSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import FloatingButtons from './components/FloatingButtons';
//import './index.css';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <PortfolioSlider />
        <ServiceCards />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
      <FloatingButtons />
    </div>
  );
}

export default App;
import React from 'react';
import Navbar from './components/layout/Navbar';
import Hero from './components/home/Hero';
import Services from './components/home/Services';
import GoalsVision from './components/home/GoalsVision';
import WhyChooseUs from './components/home/WhyChooseUs';
import Portfolio from './components/home/Portfolio';
import Team from './components/home/Team';
import Pricing from './components/home/Pricing';
import ContactForm from './components/home/ContactForm';
import QRCodeSection from './components/home/QRCodeSection';
import Footer from './components/layout/Footer';
import { Toaster } from 'sonner';
import { LanguageProvider } from './context/LanguageContext';

function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-white">
        <Toaster position="top-right" richColors />
        <Navbar />
        <main>
          <Hero />
          <Services />
          <GoalsVision />
          <WhyChooseUs />
          <Portfolio />
          <Team />
          <Pricing />
          <QRCodeSection />
          <section id="contact">
            <ContactForm />
          </section>
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}

export default App;
import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage, Language } from '../../context/LanguageContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { t, setLanguage, language } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t('navbar.services'), href: '#services' },
    { name: t('navbar.portfolio'), href: '#portfolio' },
    { name: t('navbar.vision'), href: '#vision-goals' },
    { name: t('navbar.pricing'), href: '#pricing' },
    { name: t('navbar.contact'), href: '#contact' },
  ];

  const phoneNumber = "0900578063";

  const languages: { code: Language; label: string }[] = [
    { code: 'en', label: 'EN' },
    { code: 'am', label: 'አማ' },
    { code: 'om', label: 'OM' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-slate-950/90 backdrop-blur-md py-4 shadow-xl' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <a href="#" className="flex items-center gap-3 text-2xl font-bold tracking-tighter text-yellow-500 group">
            <span className="lowercase lg:inline-block text-xl tracking-tight">www.king digital marketing.et</span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-4 lg:gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-slate-300 hover:text-yellow-500 transition-colors whitespace-nowrap"
              >
                {link.name}
              </a>
            ))}
            
            <div className="flex items-center bg-slate-800/50 rounded-full p-1 border border-slate-700/50">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => setLanguage(lang.code)}
                  className={`px-3 py-1 rounded-full text-xs font-bold transition-all ${
                    language === lang.code 
                    ? 'bg-yellow-500 text-slate-950' 
                    : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {lang.label}
                </button>
              ))}
            </div>

            <a 
              href={`tel:${phoneNumber}`} 
              className="flex items-center gap-2 text-yellow-500 font-bold hover:text-yellow-400 transition-colors border-l border-slate-700 pl-4"
            >
              <Phone className="w-4 h-4" />
              <span className="text-sm">{phoneNumber}</span>
            </a>

            <a
              href="#contact"
              className="bg-yellow-500 hover:bg-yellow-600 text-slate-950 px-5 py-2 rounded-full font-bold transition-all transform hover:scale-105 text-sm"
            >
              {t('navbar.getStarted')}
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex md:hidden items-center gap-2">
            <div className="flex bg-slate-800/80 rounded-full p-1 border border-slate-700/50 mr-2">
               {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => setLanguage(lang.code)}
                    className={`px-2 py-1 rounded-full text-[10px] font-bold transition-all ${
                      language === lang.code 
                      ? 'bg-yellow-500 text-slate-950' 
                      : 'text-slate-400'
                    }`}
                  >
                    {lang.code.toUpperCase()}
                  </button>
                ))}
            </div>
            <button className="text-slate-300 flex items-center" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-slate-900 border-b border-slate-800 overflow-hidden shadow-2xl"
          >
            <div className="flex flex-col gap-4 p-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-lg font-medium text-slate-300"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              
              <a 
                href={`tel:${phoneNumber}`} 
                className="flex items-center gap-3 text-yellow-500 font-bold text-xl py-2"
                onClick={() => setIsOpen(false)}
              >
                <Phone className="w-6 h-6" />
                <span>{phoneNumber}</span>
              </a>

              <a
                href="#contact"
                className="bg-yellow-500 text-slate-950 text-center py-4 rounded-xl font-bold text-lg"
                onClick={() => setIsOpen(false)}
              >
                {t('navbar.getStarted')}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
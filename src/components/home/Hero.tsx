import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play, Rocket, Target } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

const Hero = () => {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-slate-950">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/3be579af-199d-4cb1-b400-9f4f8da3b236/hero-background-8e6389c2-1772806278442.webp"
          alt="Modern Agency Office"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-transparent" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-4 mb-6">
                <span className="px-4 py-1.5 text-sm font-semibold tracking-wider text-yellow-500 uppercase bg-yellow-500/10 border border-yellow-500/20 rounded-full">
                  {t('hero.badge')}
                </span>
              </div>
              
              <h1 className="text-4xl md:text-7xl font-extrabold text-white leading-tight mb-6">
                {t('hero.title')} <span className="text-yellow-500">{t('hero.brand')}</span>
              </h1>
              
              <p className="text-lg md:text-xl text-slate-300 mb-8 max-w-2xl leading-relaxed">
                {t('hero.description')}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a
                href="#contact"
                className="group bg-yellow-500 hover:bg-yellow-600 text-slate-950 px-8 py-4 rounded-full font-bold flex items-center justify-center gap-2 transition-all transform hover:scale-105"
              >
                {t('hero.cta_primary')}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#portfolio"
                className="group bg-slate-800/50 hover:bg-slate-800 text-white border border-slate-700 px-8 py-4 rounded-full font-bold flex items-center justify-center gap-2 transition-all"
              >
                <Play className="w-5 h-5 fill-white" />
                {t('hero.cta_secondary')}
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="mt-12 flex items-center gap-8 text-slate-400"
            >
              <div className="flex items-center gap-2">
                <Target className="w-5 h-5 text-yellow-500" />
                <span className="text-sm font-medium">{t('hero.stat1')}</span>
              </div>
              <div className="flex items-center gap-2">
                <Rocket className="w-5 h-5 text-yellow-500" />
                <span className="text-sm font-medium">{t('hero.stat2')}</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Background decorative elements */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-500/10 blur-[120px] rounded-full -mr-48 -mb-48" />
    </section>
  );
};

export default Hero;
import React from 'react';
import { motion } from 'framer-motion';
import { Share2, Video, TrendingUp, Presentation, ShoppingBag, Globe } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

const Services = () => {
  const { t } = useLanguage();

  const icons = [
    <Share2 className="w-8 h-8" />,
    <TrendingUp className="w-8 h-8" />,
    <ShoppingBag className="w-8 h-8" />,
    <Presentation className="w-8 h-8" />,
    <Video className="w-8 h-8" />,
    <Globe className="w-8 h-8" />,
  ];

  const colors = [
    { color: 'text-blue-500', bg: 'bg-blue-500/10' },
    { color: 'text-pink-500', bg: 'bg-pink-500/10' },
    { color: 'text-yellow-500', bg: 'bg-yellow-500/10' },
    { color: 'text-purple-500', bg: 'bg-purple-500/10' },
    { color: 'text-green-500', bg: 'bg-green-500/10' },
    { color: 'text-cyan-500', bg: 'bg-cyan-500/10' },
  ];

  const servicesData = t('services.items');

  return (
    <section id="services" className="py-24 bg-slate-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-6 text-white"
          >
            {t('services.title')} <span className="text-yellow-500">{t('services.title_accent')}</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-400 text-lg"
          >
            {t('services.description')}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service: any, index: number) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-8 rounded-2xl bg-slate-950 border border-slate-800 hover:border-yellow-500/50 transition-all group"
            >
              <div className={`w-16 h-16 rounded-xl ${colors[index % colors.length].bg} flex items-center justify-center mb-6 transition-transform group-hover:scale-110`}>
                <div className={colors[index % colors.length].color}>
                  {icons[index % icons.length]}
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">{service.title}</h3>
              <p className="text-slate-400 leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
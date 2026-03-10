import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, PlayCircle } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

const Portfolio = () => {
  const { t } = useLanguage();
  
  const images = [
    'https://storage.googleapis.com/dala-prod-public-storage/generated-images/3be579af-199d-4cb1-b400-9f4f8da3b236/tiktok-service-603e6c78-1772806278110.webp',
    'https://storage.googleapis.com/dala-prod-public-storage/generated-images/3be579af-199d-4cb1-b400-9f4f8da3b236/social-media-marketing-a5e295ce-1772806277657.webp',
    'https://storage.googleapis.com/dala-prod-public-storage/generated-images/3be579af-199d-4cb1-b400-9f4f8da3b236/video-production-32c523a8-1772806277797.webp',
  ];

  const statsData = t('portfolio.stats');
  const projectsData = t('portfolio.projects');

  const safeStats = Array.isArray(statsData) ? statsData : [];
  const safeProjects = Array.isArray(projectsData) ? projectsData : [];

  return (
    <section id="portfolio" className="py-24 bg-slate-950">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-bold mb-6 text-white"
            >
              {t('portfolio.title')} <span className="text-yellow-500">{t('portfolio.title_accent')}</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-slate-400 text-lg"
            >
              {t('portfolio.description')}
            </motion.p>
          </div>
          <motion.button
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-yellow-500 font-bold flex items-center gap-2 hover:gap-3 transition-all underline underline-offset-8"
          >
            {t('portfolio.viewAll')} <ExternalLink className="w-5 h-5" />
          </motion.button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {safeProjects.map((project: any, index: number) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-2xl bg-slate-900 border border-slate-800"
            >
              <div className="aspect-[4/5] relative">
                <img
                  src={images[index % images.length]}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <PlayCircle className="w-16 h-16 text-yellow-500" />
                </div>

                <div className="absolute bottom-0 left-0 p-6 w-full">
                  <span className="text-yellow-500 text-sm font-bold uppercase tracking-widest mb-2 block">
                    {project.category}
                  </span>
                  <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                  <div className="flex items-center gap-2">
                    {safeStats.length > 0 && (
                      <span className="px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-xs font-semibold text-white">
                        {safeStats[index % safeStats.length]}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
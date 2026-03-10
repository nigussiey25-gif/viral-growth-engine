import React from 'react';
import { motion } from 'framer-motion';
import { Target, Eye, TrendingUp, Award, Rocket, Globe, Crown } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

const GoalsVision = () => {
  const { t } = useLanguage();
  
  const icons = [
    <VideoIcon className="w-6 h-6" />,
    <TrendingUp className="w-6 h-6" />,
    <Rocket className="w-6 h-6" />,
    <Globe className="w-6 h-6" />,
  ];

  const goalsData = t('vision.goals');

  return (
    <section id="vision-goals" className="py-24 bg-slate-950 overflow-hidden relative">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-yellow-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          {/* Vision Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-500/10 border border-yellow-500/20 text-yellow-500 font-medium text-sm">
              <Eye className="w-4 h-4" />
              <span>{t('vision.badge')}</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold leading-tight text-white">
              {t('vision.title')} <span className="text-yellow-500 text-glow">{t('vision.title_accent')}</span> {t('vision.title_suffix')}
            </h2>
            
            <p className="text-slate-400 text-lg leading-relaxed">
              {t('vision.description')}
            </p>

            <div className="relative rounded-2xl overflow-hidden aspect-video border border-slate-800 group">
              <img 
                src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/3be579af-199d-4cb1-b400-9f4f8da3b236/company-vision-and-goals-background-3f40ab85-1772866446546.webp" 
                alt="Digital Vision" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60" />
            </div>
          </motion.div>

          {/* Goals Section */}
          <div className="space-y-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-500 font-medium text-sm">
                <Target className="w-4 h-4" />
                <span>{t('vision.goals_badge')}</span>
              </div>
              <h3 className="text-3xl font-bold text-white">{t('vision.goals_title')}</h3>
            </motion.div>

            <div className="grid sm:grid-cols-2 gap-6">
              {goalsData.map((goal: any, index: number) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-6 rounded-xl bg-slate-900 border border-slate-800 hover:border-yellow-500/30 transition-all group"
                >
                  <div className="w-12 h-12 rounded-lg bg-slate-800 flex items-center justify-center mb-4 text-yellow-500 group-hover:bg-yellow-500 group-hover:text-slate-950 transition-colors">
                    {icons[index % icons.length]}
                  </div>
                  <h4 className="text-xl font-bold mb-2 text-white">{goal.title}</h4>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {goal.description}
                  </p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="p-8 rounded-2xl bg-gradient-to-br from-yellow-500 to-yellow-600 text-slate-950"
            >
              <div className="flex items-start gap-4">
                <div className="bg-white/20 p-2 rounded-lg backdrop-blur-sm">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">{t('vision.commitment_title')}</h4>
                  <p className="font-medium opacity-90">
                    {t('vision.commitment_description')}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Content is King Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-24 pt-24 border-t border-slate-800"
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 relative rounded-3xl overflow-hidden border-2 border-yellow-500/20 shadow-2xl shadow-yellow-500/5 group">
              <img 
                src="https://storage.googleapis.com/dala-prod-public-storage/attachments/201d360c-2fda-4c7b-9b41-704547f5bebf/1772866656992_Content-The-Real-King-or-Just-a-Digital-Marketing-Myth-2-scaled.webp" 
                alt="Content is King - Digital Marketing Power" 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-60" />
            </div>

            <div className="order-1 lg:order-2 space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-500/10 border border-yellow-500/20 text-yellow-500 font-medium text-sm">
                <Crown className="w-4 h-4" />
                <span>{t('vision.content_king_badge')}</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold leading-tight text-white">
                {t('vision.content_king_title')} <span className="text-yellow-500 text-glow">{t('vision.content_king_accent')}</span>
              </h2>
              
              <div className="space-y-4 text-slate-400 text-lg leading-relaxed">
                <p>
                  {t('vision.content_king_p1')}
                </p>
                <p>
                  {t('vision.content_king_p2')}
                </p>
                <p className="font-semibold text-white italic border-l-4 border-yellow-500 pl-4 py-2 bg-yellow-500/5">
                  {t('vision.content_king_quote')}
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const VideoIcon = ({ className }: { className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.934a.5.5 0 0 0-.777-.416L16 11" />
    <rect width="14" height="12" x="2" y="6" rx="2" />
  </svg>
);

export default GoalsVision;
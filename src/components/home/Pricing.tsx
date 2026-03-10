import React from 'react';
import { motion } from 'framer-motion';
import { Check, Video, Calendar, Sparkles, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useLanguage } from '../../context/LanguageContext';

const Pricing = () => {
  const { t } = useLanguage();
  
  const icons = [
    <Calendar key="cal" className="w-6 h-6 text-yellow-500" />,
    <Sparkles key="spark" className="w-6 h-6 text-yellow-500" />,
  ];

  const prices = ['15,000', '25,000'];
  const durations = [t('pricing.week'), t('pricing.month')];
  const isPopular = [false, true];

  const plansData = t('pricing.plans');
  const safePlans = Array.isArray(plansData) ? plansData : [];

  return (
    <section id="pricing" className="py-24 relative overflow-hidden bg-slate-950">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
        <img 
          src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/3be579af-199d-4cb1-b400-9f4f8da3b236/pricing-background-0470b140-1772861220366.webp" 
          alt="Background" 
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 mb-6 rounded-full bg-yellow-500/10 border border-yellow-500/20 text-yellow-500 text-sm font-medium"
          >
            {t('pricing.badge')}
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-6 text-white"
          >
            {t('pricing.title')} <span className="text-yellow-500">{t('pricing.title_accent')}</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-400 text-lg"
          >
            {t('pricing.description')}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {safePlans.map((plan: any, index: number) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative"
            >
              {isPopular[index] && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20">
                  <Badge className="bg-yellow-500 text-slate-950 hover:bg-yellow-400 px-4 py-1 font-bold">
                    {t('pricing.most_popular')}
                  </Badge>
                </div>
              )}
              
              <Card className={`h-full flex flex-col bg-slate-900 border-slate-800 transition-all duration-300 hover:border-yellow-500/50 ${isPopular[index] ? 'ring-2 ring-yellow-500/50' : ''}`}>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <div className="p-2 rounded-lg bg-slate-800">
                      {icons[index % icons.length]}
                    </div>
                    {isPopular[index] && <TrendingUp className="text-yellow-500 w-5 h-5" />}
                  </div>
                  <CardTitle className="text-2xl font-bold text-white">{plan.title}</CardTitle>
                  <CardDescription className="text-slate-400">{plan.description}</CardDescription>
                </CardHeader>
                
                <CardContent className="flex-grow">
                  <div className="mb-8">
                    <div className="flex items-baseline gap-1">
                      <span className="text-4xl md:text-5xl font-bold text-white">{prices[index % prices.length]}</span>
                      <span className="text-slate-400 text-lg">{t('pricing.currency')}</span>
                      <span className="text-slate-500 ml-1">/{durations[index % durations.length]}</span>
                    </div>
                    <div className="mt-4 flex items-center gap-2 text-yellow-500 font-semibold">
                      <Video className="w-5 h-5" />
                      <span>{plan.videos}</span>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    {Array.isArray(plan.features) && plan.features.map((feature: string, i: number) => (
                      <div key={i} className="flex items-start gap-3">
                        <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-yellow-500/10 flex items-center justify-center">
                          <Check className="w-3.5 h-3.5 text-yellow-500" />
                        </div>
                        <span className="text-slate-300 text-sm md:text-base">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
                
                <CardFooter>
                  <Button 
                    className={`w-full py-6 text-lg font-bold transition-all ${
                      isPopular[index] 
                      ? 'bg-yellow-500 text-slate-950 hover:bg-yellow-400' 
                      : 'bg-slate-800 text-white hover:bg-slate-700'
                    }`}
                  >
                    {t('pricing.getStarted')}
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-12 text-center"
        >
          <p className="text-slate-500 text-sm">
            {t('pricing.custom_package')} <a href="#contact" className="text-yellow-500 hover:underline">{t('pricing.contact_us')}</a> for a tailored solution.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;
import React from 'react';
import { motion } from 'framer-motion';
import { Smartphone, ArrowRight } from 'lucide-react';
import QRCodeDisplay from '../common/QRCodeDisplay';
import { useLanguage } from '../../context/LanguageContext';

const QRCodeSection = () => {
  const { t } = useLanguage();

  return (
    <section className="py-20 bg-slate-950 border-t border-slate-900">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-500/10 border border-yellow-500/20 text-yellow-500 text-xs font-bold uppercase tracking-wider mb-6">
            <Smartphone className="w-3 h-3" />
            {t('qrcode.badge')}
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            {t('qrcode.title')} <span className="text-yellow-500">{t('qrcode.title_accent')}</span>
          </h2>
          <p className="text-slate-400 mb-12">
            {t('qrcode.description')}
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-12">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-3xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200" />
              <QRCodeDisplay 
                size={160}
                title={t('qrcode.scan_web')}
                subtitle="www.kingdigital.et"
                value="https://kingdigital.et"
                className="relative bg-white"
              />
            </div>

            <div className="hidden md:block">
              <ArrowRight className="w-8 h-8 text-slate-700" />
            </div>

            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-green-500 to-green-600 rounded-3xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200" />
              <QRCodeDisplay 
                size={160}
                title={t('qrcode.whatsapp_us')}
                subtitle="+251 900 578 063"
                value="https://wa.me/251900578063"
                className="relative bg-white"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default QRCodeSection;
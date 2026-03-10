import React from 'react';
import { Instagram, Twitter, Linkedin, Youtube, Facebook, Phone, Mail, MapPin, Wallet } from 'lucide-react';
import QRCodeDisplay from '../common/QRCodeDisplay';
import { useLanguage } from '../../context/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();
  const phoneNumber = "0900578063";

  const serviceItems = t('services.items');
  const safeServices = Array.isArray(serviceItems) ? serviceItems : [];
  
  const banksList = t('contact.banks');
  const safeBanks = Array.isArray(banksList) ? banksList : [];

  return (
    <footer className="bg-slate-950 pt-16 pb-8 border-t border-slate-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1 lg:col-span-1">
            <a href="#" className="flex items-center gap-3 text-2xl font-bold tracking-tighter text-yellow-500 mb-6">
              <span className="lowercase text-lg md:text-xl">www.king digital marketing.et</span>
            </a>
            <p className="text-slate-400 mb-6 leading-relaxed">
              {t('footer.description')}
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-slate-500 hover:text-yellow-500 transition-colors"><Instagram className="w-5 h-5" /></a>
              <a href="#" className="text-slate-500 hover:text-yellow-500 transition-colors"><Twitter className="w-5 h-5" /></a>
              <a href="#" className="text-slate-500 hover:text-yellow-500 transition-colors"><Facebook className="w-5 h-5" /></a>
              <a href="#" className="text-slate-500 hover:text-yellow-500 transition-colors"><Linkedin className="w-5 h-5" /></a>
              <a href="#" className="text-slate-500 hover:text-yellow-500 transition-colors"><Youtube className="w-5 h-5" /></a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-white mb-6">{t('footer.services')}</h4>
            <ul className="space-y-4 text-slate-400">
              {safeServices.slice(0, 4).map((service: any, idx: number) => (
                <li key={idx}><a href="#" className="hover:text-yellow-500 transition-colors">{service.title}</a></li>
              ))}
              {safeServices.length === 0 && (
                 <>
                   <li><a href="#" className="hover:text-yellow-500 transition-colors">Social Media</a></li>
                   <li><a href="#" className="hover:text-yellow-500 transition-colors">TikTok Content</a></li>
                   <li><a href="#" className="hover:text-yellow-500 transition-colors">Product Ads</a></li>
                   <li><a href="#" className="hover:text-yellow-500 transition-colors">Content Creation</a></li>
                 </>
              )}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-6">{t('footer.contactUs')}</h4>
            <ul className="space-y-4 text-slate-400">
              <li>
                <a href={`tel:${phoneNumber}`} className="flex items-center gap-3 hover:text-yellow-500 transition-colors">
                  <Phone className="w-5 h-5 text-yellow-500" />
                  <span>{phoneNumber}</span>
                </a>
              </li>
              <li>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-yellow-500" />
                  <span>contact@kingdigital.et</span>
                </div>
              </li>
              <li>
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-yellow-500" />
                  <span>{t('contact.labels.location')}</span>
                </div>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-6">{t('footer.payment')}</h4>
            <ul className="space-y-4 text-slate-400">
              {safeBanks.map((bank: string) => (
                <li key={bank} className="flex items-center gap-3">
                  <Wallet className="w-5 h-5 text-yellow-500" />
                  <span>{bank}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-6">{t('footer.newsletter')}</h4>
            <p className="text-slate-400 text-sm mb-4">{t('footer.newsletter_p')}</p>
            <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder={t('footer.newsletter_placeholder')}
                className="bg-slate-900 border border-slate-800 rounded-lg px-4 py-2 text-sm w-full focus:outline-none focus:ring-1 focus:ring-yellow-500"
              />
              <button className="bg-yellow-500 text-slate-950 px-4 py-2 rounded-lg text-sm font-bold">
                {t('footer.newsletter_button')}
              </button>
            </form>
          </div>

          <div className="flex flex-col items-center justify-start lg:items-end">
            <h4 className="font-bold text-white mb-6 w-full text-center lg:text-right">{t('footer.scan_title')}</h4>
            <QRCodeDisplay 
              size={100} 
              className="hover:scale-105 transition-transform duration-300"
              value="https://wa.me/251900578063" 
              title={t('footer.scan_title')}
              subtitle={t('footer.scan_subtitle')}
            />
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-slate-900 gap-4">
          <p className="text-slate-500 text-sm">
            &copy; {currentYear} www.king digital marketing.et. {t('footer.rights')}
          </p>
          <div className="flex gap-6 text-sm text-slate-500">
            <a href="#" className="hover:text-slate-300 transition-colors">{t('footer.privacy')}</a>
            <a href="#" className="hover:text-slate-300 transition-colors">{t('footer.terms')}</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
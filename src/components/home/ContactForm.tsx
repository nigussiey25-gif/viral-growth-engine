import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle2, Mail, Phone, MapPin, Wallet, Building2, User } from 'lucide-react';
import { toast } from 'sonner';
import { useLanguage } from '../../context/LanguageContext';
import { supabase } from '../../lib/supabase';

const ContactForm = () => {
  const { t } = useLanguage();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const servicesList = t('contact.form.services');
  const safeServices = Array.isArray(servicesList) ? servicesList : [];
  
  const [formData, setFormData] = useState({
    name: '',
    companyName: '',
    phone: '',
    email: '',
    service: '',
    companyInfo: '',
  });

  // Update initial service when language changes and user hasn't selected one
  useEffect(() => {
    if (!formData.service || (safeServices.length > 0 && safeServices.every(s => s !== formData.service))) {
      setFormData(prev => ({ ...prev, service: safeServices[0] || '' }));
    }
  }, [safeServices, formData.service]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    let supabaseSuccess = false;
    let emailSuccess = false;

    try {
      // 1. Try to save to Supabase
      if (supabase && import.meta.env.VITE_SUPABASE_URL) {
        try {
          const { error: supabaseError } = await supabase
            .from('contact_submissions')
            .insert([{
              name: formData.name,
              company_name: formData.companyName,
              phone: formData.phone,
              email: formData.email,
              service: formData.service,
              company_info: formData.companyInfo,
              metadata: { source: 'website_contact_form' }
            }]);
          
          if (!supabaseError) {
            supabaseSuccess = true;
          } else {
            console.error('Supabase submission error:', supabaseError);
          }
        } catch (err) {
          console.error('Supabase connection failed:', err);
        }
      }

      // 2. Try to send email (Using Formspree as current implementation intended)
      // Destination: nigussiey25@gmail.com (as specified in Formspree settings for this ID)
      const accessKey = 'mkgogwzk'; 
      const response = await fetch(`https://formspree.io/f/${accessKey}`, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          ...formData,
          message: formData.companyInfo,
          _subject: `King Digital Inquiry: ${formData.companyName}`,
          _honey: '',
        })
      });

      if (response.ok) {
        emailSuccess = true;
      }

      // Success if either method worked (though ideally both should)
      if (supabaseSuccess || emailSuccess) {
        toast.success(t('contact.form.submit_success') || 'Information submitted successfully!', {
          description: t('contact.form.submit_description') || 'Our team will review your requirements and contact you soon.',
        });
        setFormData({ 
          name: '', 
          companyName: '', 
          phone: '', 
          email: '', 
          service: safeServices[0] || '', 
          companyInfo: '' 
        });
      } else {
        toast.error('Submission failed. Please check your connection or try again later.');
      }
    } catch (error) {
      console.error('Contact form error:', error);
      toast.error('An error occurred while submitting. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactEmail = "contact@kingdigital.et";
  const contactPhone = "0900578063";

  const whyChooseUsItems = t('contact.whyChooseUs_items');
  const safeWhyChooseUs = Array.isArray(whyChooseUsItems) ? whyChooseUsItems : [];
  
  const banksList = t('contact.banks');
  const safeBanks = Array.isArray(banksList) ? banksList : [];

  return (
    <section id="contact" className="py-24 bg-slate-900 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-bold mb-6 text-white"
            >
              {t('contact.title')} <span className="text-yellow-500">{t('contact.title_accent')}</span>
            </motion.h2>
            <p className="text-slate-400 text-lg mb-10 leading-relaxed">
              {t('contact.description')}
            </p>

            <div className="space-y-6">
              {[
                { icon: <Mail className="w-6 h-6 text-yellow-500" />, label: t('contact.labels.email'), value: contactEmail },
                { icon: <Phone className="w-6 h-6 text-yellow-500" />, label: t('contact.labels.phone'), value: contactPhone },
                { icon: <MapPin className="w-6 h-6 text-yellow-500" />, label: t('contact.labels.visit'), value: t('contact.labels.location') },
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-sm text-slate-500">{item.label}</p>
                    <p className="font-bold text-white">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 p-6 bg-slate-950 border border-slate-800 rounded-2xl">
              <h4 className="font-bold mb-4 flex items-center gap-2 text-white">
                <CheckCircle2 className="text-green-500 w-5 h-5" />
                {t('contact.whyChooseUs_title')}
              </h4>
              <ul className="space-y-3 text-slate-400 text-sm mb-6">
                {safeWhyChooseUs.map((item: string, i: number) => (
                  <li key={i}>\\u2022 {item}</li>
                ))}
              </ul>

              <h4 className="font-bold mb-4 flex items-center gap-2 border-t border-slate-800 pt-6 text-white">
                <Wallet className="text-yellow-500 w-5 h-5" />
                {t('contact.payment_title')}
              </h4>
              <div className="grid grid-cols-2 gap-3 text-slate-400 text-sm">
                {safeBanks.map((bank: string) => (
                  <div key={bank} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-yellow-500" />
                    {bank}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-slate-950 p-8 md:p-10 rounded-3xl border border-slate-800 shadow-2xl"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-300 flex items-center gap-2">
                    <User className="w-4 h-4 text-yellow-500" />
                    {t('contact.form.fullName')}
                  </label>
                  <input
                    required
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder={t('contact.form.placeholders.fullName')}
                    className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-yellow-500 transition-all"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-300 flex items-center gap-2">
                    <Building2 className="w-4 h-4 text-yellow-500" />
                    {t('contact.form.companyName')}
                  </label>
                  <input
                    required
                    type="text"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleChange}
                    placeholder={t('contact.form.placeholders.companyName')}
                    className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-yellow-500 transition-all"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-300 flex items-center gap-2">
                    <Phone className="w-4 h-4 text-yellow-500" />
                    {t('contact.form.phoneNumber')}
                  </label>
                  <input
                    required
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder={t('contact.form.placeholders.phoneNumber')}
                    className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-yellow-500 transition-all"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-300 flex items-center gap-2">
                    <Mail className="w-4 h-4 text-yellow-500" />
                    {t('contact.form.emailAddress')}
                  </label>
                  <input
                    required
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder={t('contact.form.placeholders.emailAddress')}
                    className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-yellow-500 transition-all"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-300">{t('contact.form.service')}</label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-yellow-500 transition-all"
                >
                  {safeServices.map((s: string) => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-300">{t('contact.form.companyInfo')}</label>
                <textarea
                  required
                  rows={4}
                  name="companyInfo"
                  value={formData.companyInfo}
                  onChange={handleChange}
                  placeholder={t('contact.form.placeholders.companyInfo')}
                  className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-yellow-500 transition-all resize-none"
                />
              </div>

              <button
                disabled={isSubmitting}
                type="submit"
                className={`w-full py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all ${
                  isSubmitting ? 'bg-slate-700 cursor-not-allowed' : 'bg-yellow-500 hover:bg-yellow-600 text-slate-950 transform hover:-translate-y-1'
                }`}
              >
                {isSubmitting ? (
                  <div className="w-6 h-6 border-2 border-slate-950 border-t-transparent animate-spin rounded-full" />
                ) : (
                  <>
                    {t('contact.form.submit')}
                    <Send className="w-5 h-5" />
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>

      <div className="absolute top-0 left-0 w-64 h-64 bg-yellow-500/5 blur-[100px] rounded-full -ml-32 -mt-32" />
    </section>
  );
};

export default ContactForm;
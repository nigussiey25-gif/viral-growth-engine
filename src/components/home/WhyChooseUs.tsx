import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldCheck, Lightbulb, Users, Clock, ChevronRight } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

const contentData: any = {
  en: {
    title: "Why Choose Us?",
    subtitle: "We deliver excellence through innovation, local expertise, and a commitment to your growth.",
    reliabilityText: "Reliability Rate",
    features: [
      {
        icon: Users,
        title: "Expert Team",
        description: "A diverse group of highly skilled professionals dedicated to your business success."
      },
      {
        icon: Lightbulb,
        title: "Innovative Solutions",
        description: "Utilizing cutting-edge technology and creative strategies to solve modern challenges."
      },
      {
        icon: ShieldCheck,
        title: "Local Insights",
        description: "Deep understanding of the Ethiopian market dynamics and cultural nuances."
      },
      {
        icon: Clock,
        title: "Timely Delivery",
        description: "We value your time, ensuring project milestones are met with consistent quality."
      }
    ],
    cta: {
      title: "Ready to start your journey?",
      description: "Contact us today for a free consultation and project roadmap.",
      button: "Get Started"
    }
  },
  am: {
    title: "\u1208\u121d\u1295 \u12a5\u129b\u1295 \u12ed\u1218\u122d\u1323\u1209?",
    subtitle: "\u1260\u1348\u1320\u122b\u1363 \u1260\u12a0\u1308\u122d \u1260\u1240\u120d \u12a5\u12cd\u1240\u1275 \u12a5\u1293 \u1208\u12a5\u12f5\u1308\u1275\u12ce \u1263\u1208\u1295 \u1241\u122d\u1320\u129d\u1290\u1275 \u12e8\u120b\u1240 \u12a0\u1308\u120d\u130d\u120e\u1275 \u12a5\u1295\u1230\u1323\u1208\u1295\u1362",
    reliabilityText: "\u12e8\u1273\u121b\u129d\u1290\u1275 \u1218\u1320\u1295",
    features: [
      {
        icon: Users,
        title: "\u12e8\u1263\u1208\u1219\u12eb \u1261\u12f5\u1295",
        description: "\u1208\u1295\u130d\u12f5\u12ce \u1235\u12ac\u1275 \u12e8\u121a\u1270\u1309 \u12a8\u134d\u1270\u129b \u127d\u120e\u1273 \u12eb\u120b\u1278\u12cd \u12e8\u1270\u1208\u12eb\u12e9 \u1263\u1208\u1219\u12eb\u12ce\u127d \u1235\u1265\u1235\u1265\u1362"
      },
      {
        icon: Lightbulb,
        title: "\u12e8\u1348\u1320\u122b \u1218\u134d\u1275\u1204\u12ce\u127d",
        description: "\u12d8\u1218\u1293\u12ca \u1270\u130d\u12f3\u122e\u1276\u127d\u1295 \u1208\u1218\u134d\u1273\u1275 \u1246\u122b\u132d \u1274\u12ad\u1296\u120e\u1302\u1295 \u12a5\u1293 \u12e8\u1348\u1320\u122b \u1235\u120d\u1276\u127d\u1295 \u12a5\u1295\u1320\u1240\u121b\u1208\u1295\u1362"
      },
      {
        icon: ShieldCheck,
        title: "\u12e8\u12a0\u12ab\u1263\u1262 \u130d\u1295\u12db\u1264",
        description: "\u1235\u1208 \u12a2\u1275\u12ee\u1335\u12eb \u1308\u1260\u12eb \u12a5\u1295\u1245\u1235\u1243\u1234 \u12a5\u1293 \u1263\u1205\u120b\u12ca \u1201\u1294\u1273\u12ce\u127d \u1325\u120d\u1245 \u130d\u1295\u12db\u1264\u1362"
      },
      {
        icon: Clock,
        title: "\u12c8\u1245\u1273\u12ca \u12a0\u1245\u122d\u1266\u1275",
        description: "\u130a\u12dc\u12ce\u1295 \u12a5\u1293\u12a8\u1265\u122b\u1208\u1295\u1363 \u12e8\u1355\u122e\u1300\u12ad\u1275 \u1225\u122b\u12ce\u127d\u1295 \u1260\u1325\u122b\u1275 \u12a5\u1293 \u1260\u12c8\u1245\u1271 \u12a5\u1293\u1320\u1293\u1245\u1243\u1208\u1295\u1362"
      }
    ],
    cta: {
      title: "\u1309\u12de\u12ce\u1295 \u1208\u1218\u1300\u1218\u122d \u12dd\u130d\u1301 \u1290\u12ce\u1275?",
      description: "\u1208\u1290\u1343 \u121d\u12ad\u12ad\u122d \u12a5\u1293 \u1208\u1355\u122e\u1300\u12ad\u1275 \u12a5\u1245\u12f5 \u12db\u122c \u12eb\u130d\u1299\u1295\u1362",
      button: "\u12ed\u1300\u121d\u1229"
    }
  },
  om: {
    title: "Maaliif Nu Filattu?",
    subtitle: "Nuyi kalaqa, dandeettii naannoo fi guddina keessaniif kutannoo qabaachuun tajaajila gaarii isiniif kennina.",
    reliabilityText: "Sadarkaa Amanamummaa",
    features: [
      {
        icon: Users,
        title: "Garee Ogeeyyii",
        description: "Ogeeyyii dandeettii olaanaa qabaniifi milkaa'ina daldala keessaniif hojjetan."
      },
      {
        icon: Lightbulb,
        title: "Furmaata Kalaqaa",
        description: "Rakkoolee ammayyaa furuuf teeknooloojii ammayyaafi mala kalaqaa fayyadamna."
      },
      {
        icon: ShieldCheck,
        title: "Hubannoo Naannoo",
        description: "Gabaafi aadaa Itiyoophiyaa irratti hubannoo gadi fagoo qabna."
      },
      {
        icon: Clock,
        title: "Yeroon Geessuu",
        description: "Yeroo keessan ni kabajna, pirojektoonni qulqullina eeggatanii akka xumuraman goona."
      }
    ],
    cta: {
      title: "Imala keessan jalqabuuf qophiidhaa?",
      description: "Gorsa bilisaafi karoorra pirojeektiif har'uma nu qunnamaa.",
      button: "Jalqabaa"
    }
  }
};

const WhyChooseUs: React.FC = () => {
  const { language } = useLanguage();
  const activeContent = contentData[language] || contentData['en'];

  return (
    <section id="why-choose-us" className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-50 pointer-events-none" />
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-96 h-96 bg-indigo-100 rounded-full blur-3xl opacity-50 pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center mb-16">
          <motion.div
            key={language}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
              {activeContent.title}
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              {activeContent.subtitle}
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Visual Element */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/3be579af-199d-4cb1-b400-9f4f8da3b236/why-choose-us-visual-14c688ba-1773121295845.webp"
                alt="Professional Team"
                className="w-full h-[400px] md:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 to-transparent" />
            </div>
            {/* Floating Stats Badge */}
            <AnimatePresence mode="wait">
              <motion.div
                key={language}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl border border-gray-100 hidden md:block"
              >
                <div className="flex items-center gap-4">
                  <div className="bg-blue-100 p-3 rounded-xl">
                    <ShieldCheck className="w-8 h-8 text-blue-600" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-900">100%</div>
                    <div className="text-sm text-gray-500">{activeContent.reliabilityText}</div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <AnimatePresence mode="wait">
              {Array.isArray(activeContent?.features) && activeContent.features.map((feature: any, index: number) => (
                <motion.div
                  key={`${language}-${index}`}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow group"
                >
                  <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors">
                    {feature.icon && <feature.icon className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors" />}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>

        {/* Bottom Call to Action */}
        <AnimatePresence mode="wait">
          <motion.div
            key={language}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="mt-20 p-8 rounded-3xl bg-blue-600 text-white flex flex-col md:flex-row items-center justify-between gap-8"
          >
            <div>
              <h3 className="text-2xl font-bold mb-2">{activeContent.cta?.title}</h3>
              <p className="text-blue-100">{activeContent.cta?.description}</p>
            </div>
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 bg-white text-blue-600 font-bold rounded-xl hover:bg-blue-50 transition-colors flex items-center gap-2"
            >
              {activeContent.cta?.button} <ChevronRight className="w-5 h-5" />
            </button>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default WhyChooseUs;
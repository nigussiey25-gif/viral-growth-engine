import React from 'react';
import { motion } from 'framer-motion';
import { User, ShieldCheck, Cpu, Code2, Share2 } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

const Team = () => {
  const { t } = useLanguage();
  
  const images = [
    "https://storage.googleapis.com/dala-prod-public-storage/attachments/201d360c-2fda-4c7b-9b41-704547f5bebf/1772874889980_22d1ad97-4b67-490f-b6e2-1e1210ae1168.png",
    "https://storage.googleapis.com/dala-prod-public-storage/attachments/201d360c-2fda-4c7b-9b41-704547f5bebf/1772875499884_IMGL9393-2.jpg",
  ];

  const skillIcons = [
    [ShieldCheck, Cpu, Code2, User],
    [Share2, User, ShieldCheck, Cpu],
  ];

  const membersData = t('team.members');

  return (
    <section id="team" className="py-24 bg-slate-900 overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-yellow-500/20 rounded-full blur-3xl animate-pulse" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16 space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-500/10 border border-yellow-500/20 text-yellow-500 font-medium text-sm"
          >
            <User className="w-4 h-4" />
            <span>{t('team.badge')}</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold leading-tight text-white"
          >
            {t('team.title')} <span className="text-yellow-500 text-glow">{t('team.title_accent')}</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 text-lg max-w-2xl mx-auto"
          >
            {t('team.description')}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {membersData.map((member: any, index: number) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative group h-full"
            >
              <div className="flex flex-col h-full bg-slate-950/50 rounded-3xl p-6 border border-slate-800 backdrop-blur-sm overflow-hidden group-hover:border-yellow-500/30 transition-all">
                <div className="relative aspect-square rounded-2xl overflow-hidden border border-slate-800 mb-6">
                  <img 
                    src={images[index % images.length]} 
                    alt={`${member.name} - ${member.role}`} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent" />
                </div>

                <div className="flex-1 flex flex-col">
                  <div className="mb-4">
                    <h3 className="text-2xl font-bold text-white mb-1">{member.name}</h3>
                    <p className="text-yellow-500 font-semibold tracking-wide uppercase text-xs">
                      {member.role}
                    </p>
                  </div>

                  <p className="text-slate-400 leading-relaxed text-sm mb-6 flex-1">
                    {member.bio}
                  </p>

                  <div className="grid grid-cols-2 gap-3 mt-auto">
                    {member.skills.map((skill: string, sIdx: number) => {
                      const Icon = skillIcons[index % skillIcons.length][sIdx % skillIcons[index % skillIcons.length].length];
                      return (
                        <div key={sIdx} className="flex items-center gap-2 p-2 rounded-xl bg-slate-900 border border-slate-800">
                          <Icon className="w-4 h-4 text-yellow-500 shrink-0" />
                          <span className="text-[10px] font-medium text-slate-300 uppercase tracking-tight">{skill}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
              
              <div className="absolute -z-10 -bottom-4 -right-4 w-32 h-32 bg-yellow-500/5 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
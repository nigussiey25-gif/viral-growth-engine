import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { translations } from '../translations';

export type Language = 'en' | 'am' | 'om';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => any;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('language');
      if (saved === 'en' || saved === 'am' || saved === 'om') {
        return saved as Language;
      }
    }
    return 'en';
  });

  useEffect(() => {
    localStorage.setItem('language', language);
    document.documentElement.lang = language;
  }, [language]);

  const t = (keyPath: string) => {
    if (!keyPath) return '';
    const keys = keyPath.split('.');
    
    const getValue = (obj: any, pathKeys: string[]) => {
      let current = obj;
      if (!current) return undefined;
      for (const key of pathKeys) {
        if (current && typeof current === 'object' && current[key] !== undefined) {
          current = current[key];
        } else {
          return undefined;
        }
      }
      return current;
    };

    let value = getValue(translations[language], keys);
    
    if (value === undefined && language !== 'en') {
      value = getValue(translations['en'], keys);
    }
    
    return value !== undefined ? value : keyPath;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
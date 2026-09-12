import React, { createContext, useContext, useEffect, useState } from 'react';

export type Language = 'en' | 'hi';

type LanguageContextValue = {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (hindi: string, english?: string) => string;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    return window.localStorage.getItem('ganpati-language') === 'hi' ? 'hi' : 'en';
  });

  const setLanguage = (nextLanguage: Language) => {
    setLanguageState(nextLanguage);
    window.localStorage.setItem('ganpati-language', nextLanguage);
  };

  const t = (hindi: string, english?: string) => (language === 'en' ? english ?? hindi : hindi);

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>;
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used inside LanguageProvider');
  return context;
};

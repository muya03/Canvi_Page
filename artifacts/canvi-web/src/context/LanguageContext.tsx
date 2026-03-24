import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { translations } from '../i18n/translations';

type Language = 'es' | 'val';

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: (key: string) => string;
  tArr: (key: string) => string[];
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Language>('es');

  useEffect(() => {
    const savedLang = localStorage.getItem('language') as Language;
    if (savedLang && (savedLang === 'es' || savedLang === 'val')) {
      setLangState(savedLang);
    }
  }, []);

  const setLang = (newLang: Language) => {
    setLangState(newLang);
    localStorage.setItem('language', newLang);
  };

  const getRaw = (key: string): string | string[] | undefined => {
    const langTranslations = translations[lang] as Record<string, string | string[]>;
    return langTranslations[key];
  };

  const t = (key: string): string => {
    const value = getRaw(key);
    if (typeof value === 'string') return value;
    return key;
  };

  const tArr = (key: string): string[] => {
    const value = getRaw(key);
    if (Array.isArray(value)) return value;
    return [];
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t, tArr }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}

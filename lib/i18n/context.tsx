'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { getLanguage, setLanguage as saveLanguage } from '@/lib/utils/storage';
import enMessages from '@/lib/i18n/messages/en';
import zhMessages from '@/lib/i18n/messages/zh';
import jaMessages from '@/lib/i18n/messages/ja';
import koMessages from '@/lib/i18n/messages/ko';
import frMessages from '@/lib/i18n/messages/fr';
import deMessages from '@/lib/i18n/messages/de';
import esMessages from '@/lib/i18n/messages/es';
import viMessages from '@/lib/i18n/messages/vi';
import ukMessages from '@/lib/i18n/messages/uk';
import hiMessages from '@/lib/i18n/messages/hi';
import ruMessages from '@/lib/i18n/messages/ru';
import trMessages from '@/lib/i18n/messages/tr';
import type { Language } from '@/types/preferences';

type Messages = typeof enMessages;

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  messages: Messages;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const messageMap: Record<Language, Messages> = {
  en: enMessages,
  zh: zhMessages,
  ja: jaMessages,
  ko: koMessages,
  fr: frMessages,
  de: deMessages,
  es: esMessages,
  vi: viMessages,
  uk: ukMessages,
  hi: hiMessages,
  ru: ruMessages,
  tr: trMessages,
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>('en');

  useEffect(() => {
    const savedLanguage = getLanguage();
    // Validate saved language is supported
    const supportedLanguages: Language[] = ['en', 'zh', 'ja', 'ko', 'fr', 'de', 'es', 'vi', 'uk', 'hi', 'ru', 'tr'];
    if (supportedLanguages.includes(savedLanguage)) {
      setLanguageState(savedLanguage);
    } else {
      setLanguageState('en');
    }
  }, []);

  const setLanguage = (lang: Language) => {
    saveLanguage(lang);
    setLanguageState(lang);
  };

  const messages = messageMap[language] || enMessages;

  return (
    <LanguageContext.Provider value={{ language, setLanguage, messages }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguageContext() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguageContext must be used within a LanguageProvider');
  }
  return context;
}


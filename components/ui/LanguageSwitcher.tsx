'use client';

import { useState, useRef, useEffect } from 'react';
import { useLanguageContext } from '@/lib/i18n/context';
import type { Language } from '@/types/preferences';

const languages: Record<Language, { flag: string; name: string }> = {
  en: { flag: '🇺🇸', name: 'English' },
  zh: { flag: '🇨🇳', name: '中文' },
  ja: { flag: '🇯🇵', name: '日本語' },
  ko: { flag: '🇰🇷', name: '한국어' },
  fr: { flag: '🇫🇷', name: 'Français' },
  de: { flag: '🇩🇪', name: 'Deutsch' },
  es: { flag: '🇪🇸', name: 'Español' },
  vi: { flag: '🇻🇳', name: 'Tiếng Việt' },
  uk: { flag: '🇺🇦', name: 'Українська' },
  hi: { flag: '🇮🇳', name: 'हिन्दी' },
  ru: { flag: '🇷🇺', name: 'Русский' },
  tr: { flag: '🇹🇷', name: 'Türkçe' },
};

const supportedLanguages: Language[] = Object.keys(languages) as Language[];

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguageContext();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-4 py-2 glass-dark border border-cyan-500/30 rounded-xl hover:border-cyan-500/50 transition-all hover:glow-blue"
        aria-label="Select language"
      >
        <span className="text-lg">{languages[language].flag}</span>
        <span className="text-sm font-medium text-cyan-200">{languages[language].name}</span>
        <svg
          className={`w-4 h-4 text-cyan-300 transition-transform ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 glass-dark border border-cyan-500/30 rounded-xl shadow-2xl z-50 max-h-64 overflow-y-auto scrollbar-tech glow-blue">
          {supportedLanguages.map((lang) => (
            <button
              key={lang}
              onClick={() => {
                setLanguage(lang);
                setIsOpen(false);
              }}
              className={`w-full flex items-center gap-2 px-4 py-2 text-sm transition-all first:rounded-t-xl last:rounded-b-xl ${
                language === lang 
                  ? 'bg-gradient-to-r from-blue-600/30 to-purple-600/30 text-cyan-200 font-medium border-l-2 border-cyan-400' 
                  : 'text-gray-300 hover:bg-white/5 hover:text-cyan-200'
              }`}
            >
              <span className="text-lg">{languages[lang].flag}</span>
              <span>{languages[lang].name}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}


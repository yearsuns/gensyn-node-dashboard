import type { UserPreferences, Language } from '@/types/preferences';

const SUPPORTED_LANGUAGES: Language[] = ['en', 'zh', 'ja', 'ko', 'fr', 'de', 'es', 'vi', 'uk', 'hi', 'ru', 'tr'];

const STORAGE_KEY = 'gensyn-node-dashboard-preferences';

/**
 * Get user preferences from localStorage
 */
export function getPreferences(): UserPreferences {
  if (typeof window === 'undefined') {
    // SSR: return default preferences
    return {
      language: 'en',
    };
  }

  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      const parsed = JSON.parse(stored) as UserPreferences;
      // Validate structure
      if (parsed.language && SUPPORTED_LANGUAGES.includes(parsed.language)) {
        return {
          language: parsed.language,
        };
      }
    }
  } catch (error) {
    console.error('Failed to load preferences from localStorage:', error);
  }

  // Return default preferences
  return {
    language: 'en',
  };
}

/**
 * Save user preferences to localStorage
 */
export function savePreferences(preferences: UserPreferences): void {
  if (typeof window === 'undefined') {
    return;
  }

  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(preferences));
  } catch (error) {
    console.error('Failed to save preferences to localStorage:', error);
  }
}

/**
 * Get language preference
 */
export function getLanguage(): Language {
  return getPreferences().language;
}

/**
 * Set language preference
 */
export function setLanguage(language: Language): void {
  const preferences = getPreferences();
  preferences.language = language;
  savePreferences(preferences);
}


import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import translationEN from './locales/en/translation.json';
import translationDE from './locales/de/translation.json';
import translationPL from './locales/pl/translation.json';

const resources = {
  en: {
    translation: translationEN,
  },
  de: {
    translation: translationDE,
  },
  pl: {
    translation: translationPL,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'pl',

  interpolation: {
    escapeValue: false,
  },
});

export default i18n;

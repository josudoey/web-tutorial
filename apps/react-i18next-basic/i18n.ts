
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const setupI18n = () => {
  i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
      debug: true,
      fallbackLng: 'en',
      interpolation: {
        escapeValue: false, 
      },
      resources: {
        en: {
          translation: {
            greeting: 'Hello, World!',
          },
        },
        'zh-TW': {
          translation: {
            greeting: '哈囉，世界！',
          },
        },
      },
    });
};

export { setupI18n };
export default i18n;


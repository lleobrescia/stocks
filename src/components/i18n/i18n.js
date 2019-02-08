import i18n from 'i18next';
import {  initReactI18next } from 'react-i18next';

const resources = {
  'pt': {
  }
};

const resourcesList = [];

i18n
  .use(initReactI18next)
  .init({
    fallbackLng: 'pt',
    // have a common namespace used around the full app
    ns: resourcesList,
    defaultNS: resourcesList,
    fallbackNS: resourcesList,
    returnObjects: true,
    resources,
    debug: false,
    interpolation: {
      escapeValue: false // not needed for react!!
    },
    cache: {
      enabled: true
    },
    load: 'languageOnly',
    whitelist: ['pt'],
    react: {
      wait: true
    }
  });

export default i18n;

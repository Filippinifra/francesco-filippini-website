import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { DEFAULT_LANG } from "./languages";

import { LABELS } from "./labels";

const resources = {
  en: {
    translation: {
      labels: LABELS.en,
    },
  },
  it: {
    translation: {
      labels: LABELS.it,
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: DEFAULT_LANG,
  fallbackLng: DEFAULT_LANG,

  interpolation: {
    escapeValue: false,
  },
});

export default i18n;

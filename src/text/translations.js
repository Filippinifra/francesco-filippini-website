import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { DEFAULT_LANG } from "constants/languages";

import { LABELS } from "text/labels";
import { textCurtain } from "text/textCurtain";
import { textHeroSection } from "text/textHeroSection";
import { textAbout } from "text/textAbout";
import { textWork } from "text/textWork";
import { textEducation } from "text/textEducation";
import { textWebsites } from "text/textWebsites";
import { textFooter } from "text/textFooter";

const resources = {
  en: {
    translation: {
      labels: LABELS.en,
      textCurtain: textCurtain.en,
      textHeroSection: textHeroSection.en,
      textAbout: textAbout.en,
      textWork: textWork.en,
      textEducation: textEducation.en,
      textWebsites: textWebsites.en,
      textFooter: textFooter.en,
    },
  },
  it: {
    translation: {
      labels: LABELS.it,
      textCurtain: textCurtain.it,
      textHeroSection: textHeroSection.it,
      textAbout: textAbout.it,
      textWork: textWork.it,
      textEducation: textEducation.it,
      textWebsites: textWebsites.it,
      textFooter: textFooter.it,
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

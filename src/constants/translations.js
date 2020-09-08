import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { DEFAULT_LANG } from "constants/languages";

import { LABELS } from "constants/labels";
import { textCurtain } from "constants/textCurtain";
import { textHeroSection } from "constants/textHeroSection";
import { textAbout } from "constants/textAbout";
import { textWork } from "constants/textWork";
import { textEducation } from "constants/textEducation";
import { textWebsites } from "constants/textWebsites";
import { textFooter } from "constants/textFooter";

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

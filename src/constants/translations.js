import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { DEFAULT_LANG } from "constants/languages";

import { LABELS } from "constants/labels";
import { commonsCurtain } from "constants/commonsCurtain";
import { commonsHeroSection } from "constants/commonsHeroSection";
import { commonsAbout } from "constants/commonsAbout";
import { commonsWork } from "constants/commonsWork";
import { commonsEducation } from "constants/commonsEducation";
import { commonsWebsites } from "constants/commonsWebsites";
import { commonsFooter } from "constants/commonsFooter";

const resources = {
  en: {
    translation: {
      labels: LABELS.en,
      commonsCurtain: commonsCurtain.en,
      commonsHeroSection: commonsHeroSection.en,
      commonsAbout: commonsAbout.en,
      commonsWork: commonsWork.en,
      commonsEducation: commonsEducation.en,
      commonsWebsites: commonsWebsites.en,
      commonsFooter: commonsFooter.en,
    },
  },
  it: {
    translation: {
      labels: LABELS.it,
      commonsCurtain: commonsCurtain.it,
      commonsHeroSection: commonsHeroSection.it,
      commonsAbout: commonsAbout.it,
      commonsWork: commonsWork.it,
      commonsEducation: commonsEducation.it,
      commonsWebsites: commonsWebsites.it,
      commonsFooter: commonsFooter.it,
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

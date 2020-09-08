import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { DEFAULT_LANG } from "constants/languages";

import { LABELS } from "constants/labels";
import { commonsCurtain } from "constants/commonsCurtain";
import { commonsAbout } from "constants/commonsAbout";
import { contentFooter } from "constants/commonsFooter";
import { commonsHeroSection } from "constants/commonsHeroSection";
import { commonsWebsites } from "constants/commonsWebsites";
import { commonsEducation } from "constants/commonsEducation";
import { commonsWork } from "constants/commonsWork";

const resources = {
  en: {
    translation: {
      labels: LABELS.en,
      commonsCurtain: commonsCurtain.en,
      commonsAbout: commonsAbout.en,
      contentFooter: contentFooter.en,
      commonsHeroSection: commonsHeroSection.en,
      commonsWebsites: commonsWebsites.en,
      commonsEducation: commonsEducation.en,
      commonsWork: commonsWork.en,
    },
  },
  it: {
    translation: {
      labels: LABELS.it,
      commonsCurtain: commonsCurtain.it,
      commonsAbout: commonsAbout.it,
      contentFooter: contentFooter.it,
      commonsHeroSection: commonsHeroSection.it,
      commonsWebsites: commonsWebsites.it,
      commonsEducation: commonsEducation.it,
      commonsWork: commonsWork.it,
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

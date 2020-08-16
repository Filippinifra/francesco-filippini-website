const TRANSPARENT = "transparent";
const BLACK = "black";
const WHITE = "white";

const BRIGHT_NAVY_BLUE = "#007df7";
const SEA_SERPENT = "#40BCD8";

const DEEP_SAFFRON = "#F39237";
const PERSIAN_RED = "#D63230";

const LIGHT_GREY = "#f6f6f6";

const primaryColor = BRIGHT_NAVY_BLUE;
const secondaryColor = SEA_SERPENT;

const tertiary = DEEP_SAFFRON;
const quaternary = PERSIAN_RED;

export const colorsLightOn = {
  bodyBgColor: WHITE,
  heroSectionBgColor: primaryColor,
  heroSectionColor: WHITE,
  contentBgColor: LIGHT_GREY,
  contentColor: BLACK,
  contentImgShadow: BLACK,
  dividerBgColor: WHITE,
  headerBgColor: primaryColor,
  headerColor: WHITE,
  headerShade: BLACK,
  flippingElementBgColor: secondaryColor,
  flippingElementColor: BLACK,
  footerColor: BLACK,
  footerBgColor: tertiary,
  footerShade: TRANSPARENT,
  modalLinkColor: quaternary,
  modalColor: BLACK,
  modalBgColor: tertiary,
  selectionBgColor: quaternary,
  selectionColor: tertiary,
  curtainBgColor: tertiary,
  curtainColor: quaternary,
  downloadLabelColor: BLACK,
  toolsTitleColor: quaternary,
};

export const colorsLightOff = {
  bodyBgColor: BLACK,
  heroSectionBgColor: primaryColor,
  heroSectionColor: WHITE,
  contentBgColor: BLACK,
  contentColor: WHITE,
  contentImgShadow: primaryColor,
  dividerBgColor: primaryColor,
  headerBgColor: BLACK,
  headerColor: WHITE,
  headerShade: primaryColor,
  flippingElementBgColor: secondaryColor,
  flippingElementColor: BLACK,
  footerColor: BLACK,
  footerBgColor: tertiary,
  footerShade: TRANSPARENT,
  modalLinkColor: quaternary,
  modalColor: BLACK,
  modalBgColor: tertiary,
  selectionBgColor: quaternary,
  selectionColor: tertiary,
  curtainBgColor: tertiary,
  curtainColor: quaternary,
  downloadLabelColor: WHITE,
  toolsTitleColor: tertiary,
};

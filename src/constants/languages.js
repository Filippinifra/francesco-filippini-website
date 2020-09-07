export const AVAILABLE_LANGUAGES = ["it", "en"];
export const MAP_LANG_TO_FLAGS = {
  it: "it",
  en: "gb",
};

export const MAP_LANGUAGES = {
  "it-IT": "it",
  "en-GB": "en",
  "en-AU": "en",
  "en-BZ": "en",
  "en-CA": "en",
  "en-CB": "en",
  "en-IN": "en",
  "en-IE": "en",
  "en-JM": "en",
  "en-NZ": "en",
  "en-PH": "en",
  "en-ZA": "en",
  "en-TT": "en",
  "en-US": "en",
};

export const FLAG_LANG_CODE = ["it", "gb"];

export const DEFAULT_LANG = "en";

export const defaultLanguage =
  (navigator.languages && MAP_LANGUAGES[navigator.languages[0]]) ||
  MAP_LANGUAGES[navigator.language] ||
  MAP_LANGUAGES[navigator.userLanguage] ||
  DEFAULT_LANG;

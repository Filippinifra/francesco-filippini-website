import React from "react";
import { useParams, useLocation, useHistory } from "react-router-dom";
import { AVAILABLE_LANGUAGES, MAP_LANG_TO_FLAGS } from "constants/languages";

import getUnicodeFlagIcon from "country-flag-icons/unicode";

import { Dropdown } from "components/Dropdown";
import { useCallback } from "react";

const ChangeLangDropDown = ({
  heightElement,
  widthElement,
  color,
  bgColor,
  style,
  onClick,
}) => {
  const { language } = useParams();
  const { pathname } = useLocation();

  const history = useHistory();

  const getSamePageInAnotherLang = useCallback(
    (newLang) => {
      const pathsArray = pathname.split("/");
      pathsArray[1] = newLang;
      const newPath = pathsArray.join("/");
      history.push(newPath);
    },
    [pathname, history]
  );

  const getUnicodeFlags = useCallback(() => {
    const availableChangeLang = AVAILABLE_LANGUAGES.filter(
      (element) => element !== language
    );

    const flagArray = availableChangeLang.map((element) => {
      return {
        text: getUnicodeFlagIcon(MAP_LANG_TO_FLAGS[element]),
        onCta: () => getSamePageInAnotherLang(element),
      };
    });
    return flagArray;
  }, [getSamePageInAnotherLang, language]);

  const currentFlag = useCallback(
    () => getUnicodeFlagIcon(MAP_LANG_TO_FLAGS[language]),
    [language]
  );

  return (
    <Dropdown
      title={currentFlag()}
      dropDownElementsArray={getUnicodeFlags()}
      heightElement={heightElement}
      widthElement={widthElement}
      color={color}
      bgColor={bgColor}
      style={style}
      onClick={onClick}
    />
  );
};

export { ChangeLangDropDown };

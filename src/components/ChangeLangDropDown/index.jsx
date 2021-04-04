import React, { useCallback, useMemo } from 'react';
import { useParams, useLocation, useHistory } from 'react-router-dom';
import { AVAILABLE_LANGUAGES, MAP_LANG_TO_FLAGS } from 'constants/languages';
import { Dropdown } from 'components/Dropdown';
import getUnicodeFlagIcon from 'country-flag-icons/unicode';

export const ChangeLangDropDown = ({ heightElement, widthElement, color, bgColor, style, onClick, shadeColor }) => {
  const { language } = useParams();
  const { pathname } = useLocation();
  const history = useHistory();

  const getSamePageInAnotherLang = useCallback(
    (newLang) => {
      const pathsArray = pathname.split('/');
      pathsArray[1] = newLang;
      const newPath = pathsArray.join('/');
      history.push(newPath);
    },
    [pathname, history]
  );

  const unicodeFlags = useMemo(() => {
    const availableChangeLang = AVAILABLE_LANGUAGES.filter((element) => element !== language);

    const flagArray = availableChangeLang.map((element) => {
      return {
        text: getUnicodeFlagIcon(MAP_LANG_TO_FLAGS[element]),
        onCta: () => getSamePageInAnotherLang(element),
      };
    });
    return flagArray;
  }, [getSamePageInAnotherLang, language]);

  const currentFlag = useMemo(() => getUnicodeFlagIcon(MAP_LANG_TO_FLAGS[language]), [language]);

  return (
    <Dropdown
      title={currentFlag}
      dropDownElementsArray={unicodeFlags}
      heightElement={heightElement}
      widthElement={widthElement}
      color={color}
      bgColor={bgColor}
      style={style}
      onClick={onClick}
      shadeColor={shadeColor}
    />
  );
};

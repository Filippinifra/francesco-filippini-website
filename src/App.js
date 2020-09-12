import React, { useState, useEffect, useCallback } from 'react';

import GlobalStyle from './styled.js';

import { animateScroll as scroll } from 'react-scroll';

import { ThemeProvider } from '@material-ui/core/styles';

import PageLayout from 'components/PageLayout';

import theme from 'constants/theme';
import { CurtainOpening } from 'components/CurtainOpening';
import { colorsLightOn, colorsLightOff } from 'constants/colors';
import { AVAILABLE_LANGUAGES, defaultLanguage } from 'constants/languages';

import { Redirect, useParams } from 'react-router-dom';
import { HOME_RELATIVE_PATH } from 'constants/paths.js';

/*eslint-disable-next-line */
import i18n from 'text/translations';

export const App = () => {
  const [pageIsLoading, setPageLoading] = useState(true);

  const [lightOn, setLightOn] = useState(true);

  const getColors = useCallback(() => (lightOn ? colorsLightOn : colorsLightOff), [lightOn]);

  const handleLightClick = () => (lightOn ? setLightOn(false) : setLightOn(true));

  const { language } = useParams();

  useEffect(() => {
    scroll.scrollToTop();
    setTimeout(() => {
      setPageLoading(false);
    }, 2000);
  }, []);

  useEffect(() => {
    i18n.changeLanguage(language);
  }, [language]);

  return AVAILABLE_LANGUAGES.includes(language) ? (
    <ThemeProvider theme={theme}>
      <GlobalStyle colors={getColors()} />
      <CurtainOpening isloading={pageIsLoading} colors={getColors()}>
        <PageLayout lightIsOn={lightOn} handleLightClick={handleLightClick} colors={getColors()} />
      </CurtainOpening>
    </ThemeProvider>
  ) : (
    <Redirect to={HOME_RELATIVE_PATH + defaultLanguage} />
  );
};

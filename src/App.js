import React, { useState, useEffect } from 'react';
import GlobalStyle from './styled.js';
import { animateScroll as scroll } from 'react-scroll';
import { PageLayout } from 'components/PageLayout';
import { CurtainOpening } from 'components/CurtainOpening';
import { AVAILABLE_LANGUAGES, defaultLanguage } from 'constants/languages';
import { Redirect, useParams } from 'react-router-dom';
import { HOME_RELATIVE_PATH } from 'constants/paths.js';
import { useTheme } from 'hook/useTheme.js';
/*eslint-disable-next-line */
import i18n from 'text/translations';

export const App = () => {
  const [pageIsLoading, setPageLoading] = useState(true);
  const { colors } = useTheme();
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
    <>
      <GlobalStyle colors={colors} />
      <CurtainOpening isloading={pageIsLoading}>
        <PageLayout />
      </CurtainOpening>
    </>
  ) : (
    <Redirect to={HOME_RELATIVE_PATH + defaultLanguage} />
  );
};

import React, { useEffect } from 'react';
import GlobalStyle from './styled.js';
import { PageLayout } from 'components/PageLayout';
import { CurtainOpening } from 'components/CurtainOpening';
import { AVAILABLE_LANGUAGES, defaultLanguage } from 'constants/languages';
import { Redirect, useParams } from 'react-router-dom';
import { HOME_RELATIVE_PATH } from 'constants/paths.js';
import { useTheme } from 'hook/useTheme.js';
/*eslint-disable-next-line */
import i18n from 'text/translations';
import { useAppLoading } from 'hook/useAppLoading.js';

export const App = () => {
  const { colors } = useTheme();
  const { language } = useParams();
  const { appLoading } = useAppLoading();

  useEffect(() => {
    i18n.changeLanguage(language);
  }, [language]);

  return AVAILABLE_LANGUAGES.includes(language) ? (
    <>
      <GlobalStyle colors={colors} />
      <CurtainOpening isloading={appLoading}>
        <PageLayout />
      </CurtainOpening>
    </>
  ) : (
    <Redirect to={HOME_RELATIVE_PATH + defaultLanguage} />
  );
};

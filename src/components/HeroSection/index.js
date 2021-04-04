import React from 'react';

import { Grid } from '@material-ui/core';

import { WrapperHeroSection, TextLeft, TextCenter } from './styled';
import { useTranslation } from 'react-i18next';
import { useTheme } from 'hook/useTheme';

export const HeroSection = () => {
  const { t } = useTranslation();
  const { colors } = useTheme();

  return (
    <WrapperHeroSection colors={colors}>
      <Grid container direction="row" justify="center" alignItems="flex-start" spacing={0}>
        <Grid item xs={12} md={3}>
          <TextLeft>{t('textHeroSection.leftContent')}</TextLeft>
        </Grid>
        <Grid item xs={12} md={6}>
          <TextCenter>{t('textHeroSection.centerContent')}</TextCenter>
        </Grid>
        <Grid item xs={12} md={3}></Grid>
      </Grid>
    </WrapperHeroSection>
  );
};

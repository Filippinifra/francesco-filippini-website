import React from 'react';

import { Grid } from '@material-ui/core';

import { useTranslation } from 'react-i18next';

import {
  WrapperWork,
  Text,
  WrapperImg,
  LogoImg,
  StrongTitle,
  MediumTitle,
  WrapperGrid,
  ImgSectionGallery,
  WrapperGallery,
  ToolsText,
  StackRowWrapper,
} from './styled';
import { stackLabel } from 'text/textWork';
import { useTheme } from 'hook/useTheme';

export const WorkSection = () => {
  const { t } = useTranslation();
  const { colors } = useTheme();

  return (
    <WrapperWork colors={colors}>
      {t('textWork', { returnObjects: true }).map(({ logoImg, title, position, period, location, textList, images, tools }, index) => (
        <WrapperGrid key={`container-work-${index}`}>
          <Grid container direction="row" justify="center" alignItems="flex-start" spacing={10}>
            <Grid item xs={12} md={3}>
              <WrapperImg>
                <LogoImg colors={colors} src={logoImg} alt="personalLogo" />
              </WrapperImg>
            </Grid>
            <Grid item xs={12} md={9}>
              <StrongTitle colors={colors}>{title}</StrongTitle>
              <MediumTitle colors={colors}>{position}</MediumTitle>
              <MediumTitle colors={colors}>{period}</MediumTitle>
              <MediumTitle colors={colors}>{location}</MediumTitle>
              {textList.map((paragraph, indexText) => (
                <Text colors={colors} key={`text-work-${index}-${indexText}`}>
                  {paragraph.text}
                </Text>
              ))}
              {tools && (
                <StackRowWrapper>
                  <Text colors={colors}>{stackLabel}</Text>
                  <ToolsText colors={colors}>{tools}</ToolsText>
                </StackRowWrapper>
              )}
              {images && (
                <WrapperGallery>
                  <Grid container direction="row" justify="center" alignItems="flex-start" spacing={4}>
                    {images.map((image, indexImage) => (
                      <Grid item xs={6} md={4} key={`image-work-${index}-${indexImage}`}>
                        <ImgSectionGallery src={image} alt={`logoCompany${indexImage}`} />
                      </Grid>
                    ))}
                  </Grid>
                </WrapperGallery>
              )}
            </Grid>
            <br />
          </Grid>
        </WrapperGrid>
      ))}
    </WrapperWork>
  );
};

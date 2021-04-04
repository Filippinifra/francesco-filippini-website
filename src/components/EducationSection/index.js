import React from 'react';

import { Grid } from '@material-ui/core';

import {
  WrapperEducation,
  Text,
  WrapperImg,
  LogoImg,
  StrongTitle,
  MediumTitle,
  WrapperGrid,
  WrapperGallery,
  ImgSectionGallery,
} from './styled';
import { useTranslation } from 'react-i18next';
import { useTheme } from 'hook/useTheme';

export const EducationSection = () => {
  const { t } = useTranslation();

  const { colors } = useTheme();

  return (
    <WrapperEducation colors={colors}>
      {t('textEducation', { returnObjects: true }).map(({ logoImg, title, extraInfo, period, location, textList, images }, index) => (
        <WrapperGrid key={`container-education-${index}`}>
          <Grid container direction="row" justify="center" alignItems="flex-start" spacing={10}>
            <Grid item xs={12} md={3}>
              <WrapperImg>
                <LogoImg src={logoImg} colors={colors} alt="personalLogo" />
              </WrapperImg>
            </Grid>
            <Grid item xs={12} md={9}>
              <StrongTitle colors={colors}>{title}</StrongTitle>
              <MediumTitle colors={colors}>{extraInfo}</MediumTitle>
              <MediumTitle colors={colors}>{period}</MediumTitle>
              <MediumTitle colors={colors}>{location}</MediumTitle>
              {textList.map((paragraph, textIndex) => (
                <Text colors={colors} key={`text-education-${index}-${textIndex}`}>
                  {paragraph.text}
                </Text>
              ))}
              <WrapperGallery>
                <Grid container direction="row" justify="center" alignItems="flex-start" spacing={4}>
                  {images.map((image, imagesIndex) => (
                    <Grid item xs={12} sm={6} md={4} key={`image-education-${index}-${imagesIndex}`}>
                      <ImgSectionGallery src={image} alt={`educationImage${imagesIndex}`} />
                    </Grid>
                  ))}
                </Grid>
              </WrapperGallery>
            </Grid>
            <br />
          </Grid>
        </WrapperGrid>
      ))}
    </WrapperEducation>
  );
};

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
import { FadeAnimation } from 'components/FadeAnimation';
import { ButtonAnimation } from 'components/ButtonAnimation';

export const EducationSection = () => {
  const { t } = useTranslation();
  const { colors } = useTheme();

  return (
    <WrapperEducation colors={colors}>
      {t('textEducation', { returnObjects: true }).map(({ logoImg, title, extraInfo, period, location, textList, images }, index) => (
        <WrapperGrid key={`container-education-${index}`}>
          <Grid container direction="row" justify="center" alignItems="flex-start" spacing={10}>
            <Grid item xs={12} md={3}>
              <FadeAnimation>
                <ButtonAnimation>
                  <WrapperImg>
                    <LogoImg src={logoImg} colors={colors} alt="personalLogo" />
                  </WrapperImg>
                </ButtonAnimation>
              </FadeAnimation>
            </Grid>
            <Grid item xs={12} md={9} style={{ marginBottom: 30 }}>
              <FadeAnimation>
                <StrongTitle colors={colors}>{title}</StrongTitle>
              </FadeAnimation>
              <FadeAnimation>
                <MediumTitle colors={colors}>{extraInfo}</MediumTitle>
              </FadeAnimation>
              <FadeAnimation>
                <MediumTitle colors={colors}>{period}</MediumTitle>
              </FadeAnimation>
              <FadeAnimation>
                <MediumTitle colors={colors}>{location}</MediumTitle>
              </FadeAnimation>
              {textList.map((paragraph, textIndex) => (
                <FadeAnimation>
                  <Text colors={colors} key={`text-education-${index}-${textIndex}`}>
                    {paragraph.text}
                  </Text>
                </FadeAnimation>
              ))}
              <WrapperGallery>
                <Grid container direction="row" justify="center" alignItems="flex-start" spacing={4}>
                  {images.map((image, imagesIndex) => (
                    <Grid item xs={12} sm={6} md={4} key={`image-education-${index}-${imagesIndex}`}>
                      <FadeAnimation>
                        <ImgSectionGallery src={image} alt={`educationImage${imagesIndex}`} />
                      </FadeAnimation>
                    </Grid>
                  ))}
                </Grid>
              </WrapperGallery>
            </Grid>
          </Grid>
        </WrapperGrid>
      ))}
    </WrapperEducation>
  );
};

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
import { FadeAnimation } from 'components/FadeAnimation';
import { ButtonAnimation } from 'components/ButtonAnimation';

export const WorkSection = () => {
  const { t } = useTranslation();
  const { colors } = useTheme();

  return (
    <WrapperWork colors={colors}>
      {t('textWork', { returnObjects: true }).map(({ logoImg, title, position, period, location, textList, images, tools }, index) => (
        <WrapperGrid key={`container-work-${index}`}>
          <Grid container direction="row" justify="center" alignItems="flex-start" spacing={10}>
            <Grid item xs={12} md={3}>
              <FadeAnimation>
                <ButtonAnimation>
                  <WrapperImg>
                    <LogoImg colors={colors} src={logoImg} alt="personalLogo" />
                  </WrapperImg>
                </ButtonAnimation>
              </FadeAnimation>
            </Grid>
            <Grid item xs={12} md={9} style={{ marginBottom: 30 }}>
              <FadeAnimation>
                <StrongTitle colors={colors}>{title}</StrongTitle>
              </FadeAnimation>
              <FadeAnimation>
                <MediumTitle colors={colors}>{position}</MediumTitle>
              </FadeAnimation>
              <FadeAnimation>
                <MediumTitle colors={colors}>{period}</MediumTitle>
              </FadeAnimation>
              <FadeAnimation>
                <MediumTitle colors={colors}>{location}</MediumTitle>
              </FadeAnimation>
              {textList.map((paragraph, indexText) => (
                <FadeAnimation>
                  <Text colors={colors} key={`text-work-${index}-${indexText}`}>
                    {paragraph.text}
                  </Text>
                </FadeAnimation>
              ))}
              {tools && (
                <FadeAnimation>
                  <StackRowWrapper>
                    <Text colors={colors}>{stackLabel}</Text>
                    <ToolsText colors={colors}>{tools}</ToolsText>
                  </StackRowWrapper>
                </FadeAnimation>
              )}
              {images && (
                <WrapperGallery>
                  <Grid container direction="row" justify="center" alignItems="flex-start" spacing={4}>
                    {images.map((image, indexImage) => (
                      <Grid item xs={6} md={4} key={`image-work-${index}-${indexImage}`}>
                        <FadeAnimation>
                          <ImgSectionGallery src={image} alt={`logoCompany${indexImage}`} />
                        </FadeAnimation>
                      </Grid>
                    ))}
                  </Grid>
                </WrapperGallery>
              )}
            </Grid>
          </Grid>
        </WrapperGrid>
      ))}
    </WrapperWork>
  );
};

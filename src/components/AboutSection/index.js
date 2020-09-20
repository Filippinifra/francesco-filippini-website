import React, { useMemo } from 'react';
import { withSize } from 'react-sizeme';

import { Grid } from '@material-ui/core';

import face from 'img/faceImage.png';
import meGiovaAranzulla from 'img/meGiovaAranzulla.jpeg';

import { cardDownloadSettings } from 'text/textAbout';

import screenSizes from 'constants/screenSizes';

import { Text, ContainerAbout, ContainerDownloadElement, LinkDownload, ContainerImg, ImageCurriculum, LabelDownload } from './styled';

import curriculumImage from 'img/contactLogos/curriculum.svg';
import { useTranslation } from 'react-i18next';
import { FlippingImages } from 'components/FlippingImages';

const AboutSection = ({ size, colors }) => {
  const { t } = useTranslation();

  const GridItemPhoto = useMemo(
    () => (
      <Grid item xs={12} md={3}>
        <ContainerImg>
          <FlippingImages colors={colors} imgFront={face} imgBack={meGiovaAranzulla} size={200} />
        </ContainerImg>
      </Grid>
    ),
    [colors]
  );

  return (
    <ContainerAbout colors={colors}>
      <Grid container direction="row" justify="center" alignItems="flex-start" spacing={7}>
        {size.width <= screenSizes.tablet && GridItemPhoto}
        <Grid item xs={12} md={9}>
          {t('textAbout.textFirstParagraph', { returnObjects: true }).map((value, index) => (
            <Text colors={colors} key={`text-first-paragraph-about-${index}`}>
              {value.text}
            </Text>
          ))}
        </Grid>
        {size.width > screenSizes.tablet && GridItemPhoto}
      </Grid>
      <Grid container direction="row" justify="center" alignItems="flex-start" spacing={7}>
        <Grid item xs={12} md={3}>
          <ContainerImg>
            <LinkDownload href={cardDownloadSettings.curriculumPdf} download colors={colors}>
              <ContainerDownloadElement>
                <ImageCurriculum src={curriculumImage} />
                <LabelDownload colors={colors}>{t('textAbout.downloadLabel')}</LabelDownload>
              </ContainerDownloadElement>
            </LinkDownload>
          </ContainerImg>
        </Grid>
        <Grid item xs={12} md={9}>
          {t('textAbout.textSecondParagraph', { returnObjects: true }).map((value, index) => (
            <Text colors={colors} key={`text-second-paragraph-about-${index}`}>
              {value.text}
            </Text>
          ))}
        </Grid>
      </Grid>
    </ContainerAbout>
  );
};

export default withSize()(AboutSection);

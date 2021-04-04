import React, { useMemo } from 'react';
import { withSize } from 'react-sizeme';
import { Grid } from '@material-ui/core';
import face from 'img/faceImage.png';
import meGiovaAranzulla from 'img/meGiovaAranzulla.jpeg';
import { cardDownloadSettings } from 'text/textAbout';
import screenSizes from 'constants/screenSizes';
import { Text, WrapperAbout, WrapperDownloadElement, LinkDownload, WrapperImg, ImageCurriculum, LabelDownload } from './styled';
import curriculumImage from 'img/contactLogos/curriculum.svg';
import { useTranslation } from 'react-i18next';
import { FlippingImages } from 'components/FlippingImages';
import { useTheme } from 'hook/useTheme';

const AboutSection = ({ size }) => {
  const { t } = useTranslation();
  const { colors } = useTheme();

  const GridItemPhoto = useMemo(
    () => (
      <Grid item xs={12} md={3}>
        <WrapperImg>
          <FlippingImages imgFront={face} imgBack={meGiovaAranzulla} size={200} />
        </WrapperImg>
      </Grid>
    ),
    []
  );

  return (
    <WrapperAbout colors={colors}>
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
          <WrapperImg>
            <LinkDownload href={cardDownloadSettings.curriculumPdf} download colors={colors}>
              <WrapperDownloadElement>
                <ImageCurriculum src={curriculumImage} alt="curriculum" />
                <LabelDownload colors={colors}>{t('textAbout.downloadLabel')}</LabelDownload>
              </WrapperDownloadElement>
            </LinkDownload>
          </WrapperImg>
        </Grid>
        <Grid item xs={12} md={9}>
          {t('textAbout.textSecondParagraph', { returnObjects: true }).map((value, index) => (
            <Text colors={colors} key={`text-second-paragraph-about-${index}`}>
              {value.text}
            </Text>
          ))}
        </Grid>
      </Grid>
    </WrapperAbout>
  );
};

export default withSize()(AboutSection);

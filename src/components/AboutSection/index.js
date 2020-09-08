import React, { useCallback } from "react";
import { withSize } from "react-sizeme";

import { Grid } from "@material-ui/core";

import face from "img/faceImage.png";

import { cardDownloadSettings } from "constants/commonsAbout";

import screenSizes from "constants/screenSizes";

import {
  FaceImg,
  Text,
  ContainerAbout,
  ContainerDownloadElement,
  LinkDownload,
  ContainerImg,
  ImageCurriculum,
  LabelDownload,
} from "./styled";

import curriculumImage from "img/contactLogos/curriculum.svg";
import { useTranslation } from "react-i18next";

const AboutSection = ({ size, colors }) => {
  const { t } = useTranslation();

  const GridItemPhoto = useCallback(
    () => (
      <Grid item xs={12} md={3}>
        <ContainerImg>
          <FaceImg src={face} colors={colors} />
        </ContainerImg>
      </Grid>
    ),
    [colors]
  );

  return (
    <ContainerAbout colors={colors}>
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="flex-start"
        spacing={7}
      >
        {size.width <= screenSizes.tablet && <GridItemPhoto />}
        <Grid item xs={12} md={9}>
          {t("commonsAbout.textFirstParagraph", { returnObjects: true }).map(
            (value) => (
              <Text colors={colors}>{value.text}</Text>
            )
          )}
        </Grid>
        {size.width > screenSizes.tablet && <GridItemPhoto />}
      </Grid>
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="flex-start"
        spacing={7}
      >
        <Grid item xs={12} md={3}>
          <ContainerImg>
            <LinkDownload
              href={cardDownloadSettings.curriculumPdf}
              download
              colors={colors}
            >
              <ContainerDownloadElement>
                <ImageCurriculum src={curriculumImage} />
                <LabelDownload colors={colors}>
                  {t("commonsAbout.downloadLabel")}
                </LabelDownload>
              </ContainerDownloadElement>
            </LinkDownload>
          </ContainerImg>
        </Grid>
        <Grid item xs={12} md={9}>
          {t("commonsAbout.textSecondParagraph", { returnObjects: true }).map(
            (value) => (
              <Text colors={colors}>{value.text}</Text>
            )
          )}
        </Grid>
      </Grid>
    </ContainerAbout>
  );
};

export default withSize()(AboutSection);

import React from "react";
import { withSize } from "react-sizeme";

import { Grid } from "@material-ui/core";

import face from "../../img/faceImage.png";

import {
  textFirstParagraph,
  textSecondParagraph,
  cardDownloadSettings,
} from "../../constants/commonsAbout";

import screenSizes from "../../constants/screenSizes";

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

import curriculumImage from "../../img/contactLogos/curriculum.svg";

const About = ({ size, colors }) => {
  const GridItemPhoto = () => (
    <Grid item xs={12} md={3}>
      <ContainerImg>
        <FaceImg src={face} colors={colors} />
      </ContainerImg>
    </Grid>
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
        {size.width <= screenSizes.tabletStep && <GridItemPhoto />}
        <Grid item xs={12} md={9}>
          {textFirstParagraph.map((value) => (
            <Text colors={colors}>{value.text}</Text>
          ))}
        </Grid>
        {size.width > screenSizes.tabletStep && <GridItemPhoto />}
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
                  {cardDownloadSettings.downloadLabel}
                </LabelDownload>
              </ContainerDownloadElement>
            </LinkDownload>
          </ContainerImg>
        </Grid>
        <Grid item xs={12} md={9}>
          {textSecondParagraph.map((value) => (
            <Text colors={colors}>{value.text}</Text>
          ))}
        </Grid>
      </Grid>
    </ContainerAbout>
  );
};

export default withSize()(About);

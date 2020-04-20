import React from "react";
import { withSize } from "react-sizeme";

import { Grid } from "@material-ui/core";

import face from "../../img/faceImage.png";

import downloadImg from "../../img/downloadLogo.svg";

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
  Card,
  CardContent,
  CardHeader,
  ImgCVPreview,
  ImgDownload,
  DownloadLabel,
  LinkCard,
  ContainerImg,
} from "./styled";

const About = ({ size }) => {
  const getGridItemPhoto = () => (
    <Grid item xs={12} md={3}>
      <ContainerImg>
        <FaceImg src={face} />
      </ContainerImg>
    </Grid>
  );

  return (
    <ContainerAbout>
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="flex-start"
        spacing={7}
      >
        {size.width <= screenSizes.tabletStep ? getGridItemPhoto() : null}
        <Grid item xs={12} md={9}>
          {textFirstParagraph.map((value) => (
            <Text>{value.text}</Text>
          ))}
        </Grid>
        {size.width > screenSizes.tabletStep ? getGridItemPhoto() : null}
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
            <LinkCard href={cardDownloadSettings.curriculumPdf} download>
              <Card>
                <CardHeader>
                  <ImgCVPreview src={cardDownloadSettings.curriculumImg} />
                </CardHeader>
                <CardContent>
                  <ImgDownload src={downloadImg} height="20px" width="20px" />
                  <DownloadLabel>
                    {cardDownloadSettings.downloadLabel}
                  </DownloadLabel>
                </CardContent>
              </Card>
            </LinkCard>
          </ContainerImg>
        </Grid>
        <Grid item xs={12} md={9}>
          {textSecondParagraph.map((value) => (
            <Text>{value.text}</Text>
          ))}
        </Grid>
      </Grid>
    </ContainerAbout>
  );
};

export default withSize()(About);

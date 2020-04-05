import React from "react";

import { Grid } from "@material-ui/core";

import face from "../../img/face.png";

import downloadImg from "../../img/download.svg";

import {
  textFirstParagraph,
  textSecondParagraph,
  cardDownloadSettings
} from "../../constants/commonsHome";

import {
  FaceImg,
  Text,
  ContainerHome,
  Card,
  CardContent,
  CardHeader,
  ImgCVPreview,
  ImgDownload,
  DownloadLabel,
  LinkCard,
  ContainerImg
} from "./styled";

const Home = () => (
  <ContainerHome>
    <Grid
      container
      direction="row"
      justify="center"
      alignItems="flex-start"
      spacing={5}
    >
      <Grid item xs={12} md={3}>
        <ContainerImg>
          <FaceImg src={face} />
        </ContainerImg>
      </Grid>
      <Grid item xs={12} md={9}>
        {textFirstParagraph.map(value => (
          <Text>{value.text}</Text>
        ))}
      </Grid>
    </Grid>
    <Grid
      container
      direction="row"
      justify="center"
      alignItems="flex-start"
      spacing={5}
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
        {textSecondParagraph.map(value => (
          <Text>{value.text}</Text>
        ))}
      </Grid>
    </Grid>
  </ContainerHome>
);

export default Home;

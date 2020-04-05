import React from "react";

import face from "../../img/face.png";

import curriculum from "../../img/FrancescoFilippiniCV.png";
import download from "../../img/download.svg";

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
  LinkCard
} from "./styled";

const Home = () => (
  <ContainerHome>
    <FaceImg src={face} />
    <LinkCard href={curriculum} download>
      <Card>
        <CardHeader>
          <ImgCVPreview src={curriculum} />
        </CardHeader>
        <CardContent>
          <ImgDownload src={download} height="20px" width="20px" />
          <DownloadLabel>FilippiniFCV.pdf</DownloadLabel>
        </CardContent>
      </Card>
    </LinkCard>
    <Text>
      ciao michiamo dcfvdgfsb gbfv feg vdsfdgvfgdvbfe gfregfrgb fegfegfegef
      gefgfeg freg feg ciao michiamo dcfvdgfsb gbfv feg vdsfdgvfgdvbfe gfregfrgb
      fegfegfegef gefgfeg freg feg ciao michiamo dcfvdgfsb gbfv feg
      vdsfdgvfgdvbfe gfregfrgb fegfegfegef gefgfeg freg feg ciao michiamo
      dcfvdgfsb gbfv feg vdsfdgvfgdvbfe gfregfrgb fegfegfegef gefgfeg freg feg
      ciao michiamo dcfvdgfsb gbfv feg vdsfdgvfgdvbfe gfregfrgb fegfegfegef
      gefgfeg freg feg ciao michiamo dcfvdgfsb gbfv feg vdsfdgvfgdvbfe gfregfrgb
      fegfegfegef gefgfeg freg feg ciao michiamo dcfvdgfsb gbfv feg
      vdsfdgvfgdvbfe gfregfrgb fegfegfegef gefgfeg freg feg ciao michiamo
      dcfvdgfsb gbfv feg vdsfdgvfgdvbfe gfregfrgb fegfegfegef gefgfeg freg
      fegciao michiamo dcfvdgfsb gbfv feg vdsfdgvfgdvbfe gfregfrgb fegfegfegef
      gefgfeg freg feg ciao michiamo dcfvdgfsb gbfv feg vdsfdgvfgdvbfe gfregfrgb
      fegfegfegef gefgfeg freg feg ciao michiamo dcfvdgfsb gbfv feg
      vdsfdgvfgdvbfe gfregfrgb fegfegfegef gefgfeg freg feg ciao michiamo
      dcfvdgfsb gbfv feg vdsfdgvfgdvbfe gfregfrgb fegfegfegef gefgfeg freg feg
      ciao michiamo dcfvdgfsb gbfv feg vdsfdgvfgdvbfe gfregfrgb fegfegfegef
      gefgfeg freg feg ciao michiamo dcfvdgfsb gbfv feg vdsfdgvfgdvbfe gfregfrgb
      fegfegfegef gefgfeg freg feg ciao michiamo dcfvdgfsb gbfv feg
      vdsfdgvfgdvbfe gfregfrgb fegfegfegef gefgfeg freg feg ciao michiamo
      dcfvdgfsb gbfv feg vdsfdgvfgdvbfe gfregfrgb fegfegfegef gefgfeg freg feg
    </Text>
  </ContainerHome>
);

export default Home;

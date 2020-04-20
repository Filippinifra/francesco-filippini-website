import React from "react";

import { Grid } from "@material-ui/core";

import workList from "../../constants/commonsWork";

import {
  ContainerWork,
  Text,
  ContainerImg,
  LogoImg,
  StrongTitle,
  MediumTitle,
  ContainerGrid,
} from "./styled";

const Work = () => (
  <ContainerWork>
    {workList.map((workExperience) => {
      const {
        logoImg,
        title,
        position,
        periodAndLocation,
        textList,
      } = workExperience;
      return (
        <ContainerGrid>
          <Grid
            container
            direction="row"
            justify="center"
            alignItems="flex-start"
            spacing={10}
          >
            <Grid item xs={12} md={3}>
              <ContainerImg>
                <LogoImg src={logoImg} />
              </ContainerImg>
            </Grid>
            <Grid item xs={12} md={9}>
              <StrongTitle>{title}</StrongTitle>
              <MediumTitle>{position}</MediumTitle>
              <MediumTitle>{periodAndLocation}</MediumTitle>
              {textList.map((paragraph) => (
                <Text>{paragraph.text}</Text>
              ))}
            </Grid>
            <br />
          </Grid>
        </ContainerGrid>
      );
    })}
  </ContainerWork>
);

export default Work;

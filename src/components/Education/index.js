import React from "react";

import { Grid } from "@material-ui/core";

import educationList from "../../constants/commonsEducation";

import {
  ContainerHome,
  Text,
  ContainerImg,
  LogoImg,
  StrongTitle,
  MediumTitle,
  ContainerGrid
} from "./styled";

const Education = () => (
  <ContainerHome>
    {educationList.map(educationExperience => {
      const {
        logoImg,
        title,
        extraInfo,
        periodAndLocation,
        textList
      } = educationExperience;
      return (
        <ContainerGrid>
          <Grid
            container
            direction="row"
            justify="center"
            alignItems="flex-start"
            spacing={5}
          >
            <Grid item xs={12} md={3}>
              <ContainerImg>
                <LogoImg src={logoImg} />
              </ContainerImg>
            </Grid>
            <Grid item xs={12} md={9}>
              <StrongTitle>{title}</StrongTitle>
              <MediumTitle>{extraInfo}</MediumTitle>
              <MediumTitle>{periodAndLocation}</MediumTitle>
              {textList.map(paragraph => (
                <Text>{paragraph.text}</Text>
              ))}
            </Grid>
            <br />
          </Grid>
        </ContainerGrid>
      );
    })}
  </ContainerHome>
);

export default Education;

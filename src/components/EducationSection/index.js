import React from "react";

import { Grid } from "@material-ui/core";

import educationList from "constants/commonsEducation";

import {
  ContainerEducation,
  Text,
  ContainerImg,
  LogoImg,
  StrongTitle,
  MediumTitle,
  ContainerGrid,
  ContainerGallery,
  ImgSectionGallery,
} from "./styled";

export const EducationSection = ({ colors }) => (
  <ContainerEducation colors={colors}>
    {educationList.map(
      ({ logoImg, title, extraInfo, period, location, textList, images }) => (
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
                <LogoImg src={logoImg} colors={colors} />
              </ContainerImg>
            </Grid>
            <Grid item xs={12} md={9}>
              <StrongTitle colors={colors}>{title}</StrongTitle>
              <MediumTitle colors={colors}>{extraInfo}</MediumTitle>
              <MediumTitle colors={colors}>{period}</MediumTitle>
              <MediumTitle colors={colors}>{location}</MediumTitle>
              {textList.map((paragraph) => (
                <Text colors={colors}>{paragraph.text}</Text>
              ))}
              <ContainerGallery>
                <Grid
                  container
                  direction="row"
                  justify="center"
                  alignItems="flex-start"
                  spacing={4}
                >
                  {images.map((image) => (
                    <Grid item xs={12} sm={6} md={4}>
                      <ImgSectionGallery src={image} />
                    </Grid>
                  ))}
                </Grid>
              </ContainerGallery>
            </Grid>
            <br />
          </Grid>
        </ContainerGrid>
      )
    )}
  </ContainerEducation>
);

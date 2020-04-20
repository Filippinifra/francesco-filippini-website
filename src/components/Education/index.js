import React from "react";

import { Grid } from "@material-ui/core";

import educationList from "../../constants/commonsEducation";

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

const Education = () => (
  <ContainerEducation>
    {educationList.map((educationExperience) => {
      const {
        logoImg,
        title,
        extraInfo,
        period,
        location,
        textList,
        images,
      } = educationExperience;
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
              <MediumTitle>{extraInfo}</MediumTitle>
              <MediumTitle>{period}</MediumTitle>
              <MediumTitle>{location}</MediumTitle>
              {textList.map((paragraph) => (
                <Text>{paragraph.text}</Text>
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
      );
    })}
  </ContainerEducation>
);

export default Education;

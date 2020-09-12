import React from "react";

import { Grid } from "@material-ui/core";

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
import { useTranslation } from "react-i18next";

export const EducationSection = ({ colors }) => {
  const { t } = useTranslation();
  return (
    <ContainerEducation colors={colors}>
      {t("textEducation", { returnObjects: true }).map(
        (
          { logoImg, title, extraInfo, period, location, textList, images },
          index
        ) => (
          <ContainerGrid key={`container-education-${index}`}>
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
                {textList.map((paragraph, textIndex) => (
                  <Text
                    colors={colors}
                    key={`text-education-${index}-${textIndex}`}
                  >
                    {paragraph.text}
                  </Text>
                ))}
                <ContainerGallery>
                  <Grid
                    container
                    direction="row"
                    justify="center"
                    alignItems="flex-start"
                    spacing={4}
                  >
                    {images.map((image, imagesIndex) => (
                      <Grid
                        item
                        xs={12}
                        sm={6}
                        md={4}
                        key={`image-education-${index}-${imagesIndex}`}
                      >
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
};

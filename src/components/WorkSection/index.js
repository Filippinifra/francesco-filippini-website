import React from "react";

import { Grid } from "@material-ui/core";

import { useTranslation } from "react-i18next";

import {
  ContainerWork,
  Text,
  ContainerImg,
  LogoImg,
  StrongTitle,
  MediumTitle,
  ContainerGrid,
  ImgSectionGallery,
  ContainerGallery,
  ToolsText,
  StackRowWrapper,
} from "./styled";

export const WorkSection = ({ colors }) => {
  const { t } = useTranslation();

  return (
    <ContainerWork colors={colors}>
      {t("textWork", { returnObjects: true }).map(
        (
          {
            logoImg,
            title,
            position,
            period,
            location,
            textList,
            images,
            tools,
          },
          index
        ) => (
          <ContainerGrid key={`container-work-${index}`}>
            <Grid
              container
              direction="row"
              justify="center"
              alignItems="flex-start"
              spacing={10}
            >
              <Grid item xs={12} md={3}>
                <ContainerImg>
                  <LogoImg colors={colors} src={logoImg} />
                </ContainerImg>
              </Grid>
              <Grid item xs={12} md={9}>
                <StrongTitle colors={colors}>{title}</StrongTitle>
                <MediumTitle colors={colors}>{position}</MediumTitle>
                <MediumTitle colors={colors}>{period}</MediumTitle>
                <MediumTitle colors={colors}>{location}</MediumTitle>
                {textList.map((paragraph, indexText) => (
                  <Text colors={colors} key={`text-work-${index}-${indexText}`}>
                    {paragraph.text}
                  </Text>
                ))}
                {tools && (
                  <StackRowWrapper>
                    <Text colors={colors}>{t("labels.stack")}</Text>
                    <ToolsText colors={colors}>{tools}</ToolsText>
                  </StackRowWrapper>
                )}
                {images && (
                  <ContainerGallery>
                    <Grid
                      container
                      direction="row"
                      justify="center"
                      alignItems="flex-start"
                      spacing={4}
                    >
                      {images.map((image, indexImage) => (
                        <Grid
                          item
                          xs={6}
                          md={4}
                          key={`image-work-${index}-${indexImage}`}
                        >
                          <ImgSectionGallery src={image} />
                        </Grid>
                      ))}
                    </Grid>
                  </ContainerGallery>
                )}
              </Grid>
              <br />
            </Grid>
          </ContainerGrid>
        )
      )}
    </ContainerWork>
  );
};

import React from "react";

import { Grid } from "@material-ui/core";
import { leftContent, centerContent } from "constants/commonsHeroSection";

import { ContainerHeroSection, TextLeft, TextCenter } from "./styled";

export const HeroSection = ({ colors }) => (
  <ContainerHeroSection colors={colors}>
    <Grid
      container
      direction="row"
      justify="center"
      alignItems="flex-start"
      spacing={0}
    >
      <Grid item xs={12} md={3}>
        <TextLeft>{leftContent}</TextLeft>
      </Grid>
      <Grid item xs={12} md={6}>
        <TextCenter>{centerContent}</TextCenter>
      </Grid>
      <Grid item xs={12} md={3}></Grid>
    </Grid>
  </ContainerHeroSection>
);

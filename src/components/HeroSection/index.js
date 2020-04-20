import React from "react";

import { Grid } from "@material-ui/core";

import { ContainerHeroSection, TextLeft, TextCenter } from "./styled";

const HeroSection = () => (
  <ContainerHeroSection>
    <Grid
      container
      direction="row"
      justify="center"
      alignItems="flex-start"
      spacing={0}
    >
      <Grid item xs={12} md={3}>
        <TextLeft>Let me introduce myself, I'm</TextLeft>
      </Grid>
      <Grid item xs={12} md={6}>
        <TextCenter>Francesco Filippini</TextCenter>
      </Grid>
      <Grid item xs={12} md={3}></Grid>
    </Grid>
  </ContainerHeroSection>
);

export default HeroSection;

import React, { useState, useEffect } from "react";

import GlobalStyle from "./styled.js";

import { animateScroll as scroll } from "react-scroll";

import { ThemeProvider } from "@material-ui/core/styles";

import PageLayout from "./components/PageLayout";

import theme from "./constants/theme";
import { CurtainOpening } from "./components/CurtainOpening";
import { colorsLightOn, colorsLightOff } from "./constants/colors";

export const App = () => {
  const [pageIsLoading, setPageLoading] = useState(true);

  const [lightOn, setLightOn] = useState(true);

  const getColors = () => (lightOn ? colorsLightOn : colorsLightOff);

  const handleLightClick = () =>
    lightOn ? setLightOn(false) : setLightOn(true);

  useEffect(() => {
    scroll.scrollToTop();
    setTimeout(() => {
      setPageLoading(false);
    }, 2000);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle colors={getColors()} />
      <CurtainOpening isloading={pageIsLoading} colors={getColors()}>
        <PageLayout
          lightIsOn={lightOn}
          handleLightClick={handleLightClick}
          colors={getColors()}
        />
      </CurtainOpening>
    </ThemeProvider>
  );
};

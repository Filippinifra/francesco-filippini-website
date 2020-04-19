import React, { useState, useEffect } from "react";

import {
  stringTransformSwapper,
  lifeTimeSwapper,
} from "./constants/animationSettings";

import { ThemeProvider } from "@material-ui/core/styles";

import PageLayout from "./components/PageLayout";

import theme from "./constants/theme";
import CurtainOpening from "./components/CurtainOpening";

const App = () => {
  const [pageIsLoading, setPageLoading] = useState(true);

  /*
  const [frontFaceSwapper, setFrontFace] = useState("home");
  const [backFaceSwapper, setBackFace] = useState("");

  const [indexEffectArray, setIndexEffectArray] = useState(0);
  const [animationIsActive, setAnimationActive] = useState(false);

  const setNextDirectionFlip = () => {
    const nextIndexEffect = indexEffectArray + 1;
    nextIndexEffect >= stringTransformSwapper.length
      ? setIndexEffectArray(0)
      : setIndexEffectArray(nextIndexEffect);
  };

  const setActionDuringMidAnimationTime = () => {
    setTimeout(() => {
      setFrontFace("none");
    }, lifeTimeSwapper / 2);
  };

  const prepareSwitchFaces = (value) => {
    setTimeout(() => {
      setFrontFace(value);
    }, lifeTimeSwapper / 1.5);
  };

  const setActionAtEndAnimation = () => {
    setTimeout(() => {
      setAnimationActive(false);
      setNextDirectionFlip();
    }, lifeTimeSwapper);
  };

  const prepareNewAnimation = (value) => {
    setActionDuringMidAnimationTime();
    setActionAtEndAnimation();
    prepareSwitchFaces(value);
  };

  const startAnimation = (value) => {
    setBackFace(value);
    setAnimationActive(true);
    prepareNewAnimation(value);
  };

  const handleMenuClick = (value) => {
    const currentElementName = frontFaceSwapper;
    if (!animationIsActive && value !== currentElementName) {
      startAnimation(value);
    }
  };

  const getContentElement = (pageLabel) => mapNameComponent[pageLabel];
  const getCurrentElement = () => getContentElement(frontFaceSwapper);
  const getNextElement = () => getContentElement(backFaceSwapper);
  const getDirectionFlip = () => stringTransformSwapper[indexEffectArray];

  */

  useEffect(() => {
    setTimeout(() => {
      setPageLoading(false);
    }, 2000);
  });

  return (
    <ThemeProvider theme={theme}>
      <CurtainOpening isloading={pageIsLoading}>
        <PageLayout />
      </CurtainOpening>
    </ThemeProvider>
  );
};

export default App;

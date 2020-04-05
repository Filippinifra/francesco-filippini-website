import React, { useState, useEffect } from "react";

import {
  effectTransformation,
  lifeTimeAnimation
} from "./constants/animationSettings";

import { ThemeProvider } from "@material-ui/core/styles";

import mapNameComponent from "./constants/mapNameComponent";

import PageLayout from "./components/PageLayout";

import theme from "./constants/theme";
import CurtainOpening from "./components/CurtainOpening";

import { checkNewSession, setExistingSession } from "./utils/session";

const App = () => {
  const [frontFaceSwapper, setFrontFace] = useState("home");
  const [backFaceSwapper, setBackFace] = useState("");

  const [indexEffectArray, setIndexEffectArray] = useState(0);
  const [animationIsActive, setAnimationActive] = useState(false);

  const isNewSession = checkNewSession();

  const [pageIsLoading, setPageLoading] = useState(isNewSession);

  const setNextDirectionFlip = () => {
    const nextIndexEffect = indexEffectArray + 1;
    nextIndexEffect >= effectTransformation.length
      ? setIndexEffectArray(0)
      : setIndexEffectArray(nextIndexEffect);
  };

  const setActionDuringMidAnimationTime = () => {
    setTimeout(() => {
      setFrontFace("none");
    }, lifeTimeAnimation / 2);
  };

  const prepareSwitchFaces = value => {
    setTimeout(() => {
      setFrontFace(value);
    }, lifeTimeAnimation / 1.5);
  };

  const setActionAtEndAnimation = () => {
    setTimeout(() => {
      setAnimationActive(false);
      setNextDirectionFlip();
    }, lifeTimeAnimation);
  };

  const prepareNewAnimation = value => {
    setActionDuringMidAnimationTime();
    setActionAtEndAnimation();
    prepareSwitchFaces(value);
  };

  const startAnimation = value => {
    setBackFace(value);
    setAnimationActive(true);
    prepareNewAnimation(value);
  };

  const handleMenuClick = value => {
    const currentElementName = frontFaceSwapper;
    if (!animationIsActive && value !== currentElementName) {
      startAnimation(value);
    }
  };

  const getContentElement = pageLabel => mapNameComponent[pageLabel];
  const getCurrentElement = () => getContentElement(frontFaceSwapper);
  const getNextElement = () => getContentElement(backFaceSwapper);
  const getDirectionFlip = () => effectTransformation[indexEffectArray];

  useEffect(() => {
    setTimeout(() => {
      setPageLoading(false);
      setExistingSession();
    }, 2000);
  });

  return (
    <ThemeProvider theme={theme}>
      <CurtainOpening isloading={pageIsLoading}>
        <PageLayout
          handleChange={handleMenuClick}
          currentSection={frontFaceSwapper}
          currentElement={getCurrentElement()}
          nextElement={getNextElement()}
          animationIsActive={animationIsActive}
          rotationString={getDirectionFlip()}
        />
      </CurtainOpening>
    </ThemeProvider>
  );
};

export default App;

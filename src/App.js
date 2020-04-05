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
  const [facesSwapper, setFacesSwapper] = useState(["home", "home"]);
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

  const prepareNewAnimation = value => {
    setTimeout(() => {
      setFacesSwapper(["none", value]);
    }, lifeTimeAnimation / 2);
    setTimeout(() => {
      setAnimationActive(false);
      setNextDirectionFlip();
      setFacesSwapper([value, value]);
    }, lifeTimeAnimation);
  };

  const startAnimation = value => {
    setFacesSwapper([facesSwapper[0], value]);
    setAnimationActive(true);
    prepareNewAnimation(value);
  };

  const handleMenuClick = value => {
    const currentElementName = getCurrentElementName();
    if (!animationIsActive && value !== currentElementName) {
      startAnimation(value);
    }
  };

  const getFaceComponent = numberFace => {
    const namePage = facesSwapper[numberFace];
    const componentLinked = getContentElement(namePage);
    return componentLinked;
  };

  const getContentElement = pageLabel => mapNameComponent[pageLabel];
  const getCurrentElement = () => getFaceComponent(0);
  const getNextElement = () => getFaceComponent(1);
  const getDirectionFlip = () => effectTransformation[indexEffectArray];
  const getCurrentElementName = () => facesSwapper[1];

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
          currentSection={getCurrentElementName()}
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

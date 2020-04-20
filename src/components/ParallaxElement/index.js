import React from "react";

import { withSize } from "react-sizeme";

import { Parallax } from "./styled";
import screenSizes from "../../constants/screenSizes";
import { ContainerDivider } from "../ContentDivider/styled";

const ParallaxElemenet = ({ imgSrc, size }) =>
  size.width > screenSizes.tabletStep ? (
    <Parallax imgSrc={imgSrc} />
  ) : (
    <ContainerDivider />
  );

export default withSize()(ParallaxElemenet);

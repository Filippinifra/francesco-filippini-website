import React from "react";

import { isMobileOnly, isTablet, isIOS } from "react-device-detect";

import { Parallax } from "./styled";

import ContentDivider from "../ContentDivider";

const ParallaxElemenet = ({ imgSrc, colors }) =>
  isMobileOnly || isTablet || isIOS ? (
    <ContentDivider colors={colors} />
  ) : (
    <Parallax imgSrc={imgSrc} />
  );

export default ParallaxElemenet;

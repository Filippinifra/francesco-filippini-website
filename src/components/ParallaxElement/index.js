import React from "react";

import { isMobileOnly, isTablet } from "react-device-detect";

import { Parallax } from "./styled";

import ContentDivider from "../ContentDivider";

const ParallaxElemenet = ({ imgSrc }) =>
  isMobileOnly === true || isTablet === true ? (
    <ContentDivider />
  ) : (
    <Parallax imgSrc={imgSrc} />
  );

export default ParallaxElemenet;

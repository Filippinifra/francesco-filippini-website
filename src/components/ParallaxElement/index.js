import React from "react";

import { isMobile } from "react-device-detect";

import { Parallax } from "./styled";

import ContentDivider from "../ContentDivider";

const ParallaxElemenet = ({ imgSrc }) =>
  isMobile ? <ContentDivider /> : <Parallax imgSrc={imgSrc} />;

export default ParallaxElemenet;

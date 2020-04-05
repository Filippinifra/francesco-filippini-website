import React from "react";

import {
  Curtain,
  CurtainLeftPanel,
  CurtainContent,
  CurtainWrapper,
  CurtainRightPanel,
  LeftTitle,
  RightTitle
} from "./styled.js";

import { leftPanelText, rightPanelText } from "../../constants/commonsCurtain";

const CurtainOpening = ({ isloading, children }) => (
  <Curtain>
    <CurtainWrapper>
      <CurtainLeftPanel loaded={isloading}>
        <LeftTitle>{leftPanelText}</LeftTitle>
      </CurtainLeftPanel>
      <CurtainContent>{children}</CurtainContent>
      <CurtainRightPanel loaded={isloading}>
        <RightTitle>{rightPanelText}</RightTitle>
      </CurtainRightPanel>
    </CurtainWrapper>
  </Curtain>
);
export default CurtainOpening;

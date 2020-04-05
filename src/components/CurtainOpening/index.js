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

const CurtainOpening = ({ isloading, children }) => (
  <Curtain>
    <CurtainWrapper>
      <CurtainLeftPanel loaded={isloading}>
        <LeftTitle>WELCOME TO FRANCESCO</LeftTitle>
      </CurtainLeftPanel>
      <CurtainContent>{children}</CurtainContent>
      <CurtainRightPanel loaded={isloading}>
        <RightTitle>FILIPPINI WEBSITE</RightTitle>
      </CurtainRightPanel>
    </CurtainWrapper>
  </Curtain>
);
export default CurtainOpening;

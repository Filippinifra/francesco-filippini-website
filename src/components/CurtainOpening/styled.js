import Styled from "styled-components";

import colors from "../../constants/colors";

export const Curtain = Styled.div`
  width: 100%; 
  height: 100vh; 
  overflow: hidden; 
`;

export const CurtainWrapper = Styled.div`
  width: 100%;
  height: 100%;
`;

export const CurtainLeftPanel = Styled.div`
  background-color: ${colors.curtainBgColor};
  width: 50%; 
  height: 100vh;
  float: left;
  position: relative; 
  z-index: 2; 
  transition: all 1s ease-out; 

  transform: ${props => (props.loaded ? `translateX(0)` : `translateX(-100%)`)};

  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const CurtainRightPanel = Styled.div`
  background-color: ${colors.curtainBgColor};
  width: 50%; 
  height: 100vh; 
  float: left; 
  position: relative;
  z-index: 2; 
  transition: all 1s ease-out; 

  transform: ${props => (props.loaded ? `translateX(0)` : `translateX(100%)`)};

  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const CurtainContent = Styled.div`
  position: absolute;
  z-index: 1;
  width: 100%;
  height: 100%;
`;

export const LeftTitle = Styled.div`
  text-align: right;
  margin-right:3px;
  color: ${colors.curtainColor};
`;

export const RightTitle = Styled.div`
  margin-left:3px;
  color: ${colors.curtainColor};
`;

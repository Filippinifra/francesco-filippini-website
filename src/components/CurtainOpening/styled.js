import Styled from "styled-components";

export const Curtain = Styled.div`
  width: 100%; 
  height: 100vh;
`;

export const CurtainWrapper = Styled.div`
  width: 100%;
  height: 100%;
`;

export const CurtainLeftPanel = Styled.div`
  background-color: ${({ colors }) => colors.curtainBgColor};
  width: 50%; 
  height: 100vh;
  float: left;
  position: fixed; 
  z-index: 2; 
  transition: 1s ease-in-out; 

  transform: ${({ loaded }) =>
    loaded ? `translateX(0)` : `translateX(-100%)`};

  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const CurtainRightPanel = Styled.div`
  background-color: ${({ colors }) => colors.curtainBgColor};
  margin-left: 50%;
  width: 50%; 
  height: 100vh; 
  float: left; 
  position: fixed;
  z-index: 2; 
  transition: all 1s ease-in-out; 

  transform: ${({ loaded }) => (loaded ? `translateX(0)` : `translateX(100%)`)};

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
  color: ${({ colors }) => colors.curtainColor};
  white-space: pre-line;
`;

export const RightTitle = Styled.div`
  margin-left:5px;
  color: ${({ colors }) => colors.curtainColor};
  white-space: pre-line;
`;

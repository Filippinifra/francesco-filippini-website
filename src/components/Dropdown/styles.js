import styled from "styled-components";

export const DropDownContainer = styled.div`
  position: relative;
  width: ${(props) => props.widthElement || "100"}px;
  background-color: ${(props) => props.bgColor};
  display: inline-flex;
  cursor: pointer;
`;

export const DropDownTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${(props) => props.heightElement || "30"}px;
  width: 100%;
`;

export const DropDownIndicator = styled.div`
  vertical-align: middle;
`;

export const DropDownContent = styled.div`
  position: absolute;
  overflow: hidden;
  background-color: ${(props) => props.bgColor};
  width: ${(props) => props.widthElement || "100"}px;
  z-index: 1;
  margin-top: ${(props) => props.heightElement || 36}px;

  max-height: ${(props) => (props.isOpen === true ? props.totalHeight : 0)}px;

  transition: max-height 0.5s ease-in-out;

  -webkit-box-shadow: 0px 0px 5px 0.1px rgba(0, 0, 0, 0.3);
  -moz-box-shadow: 0px 0px 5px 0.1px rgba(0, 0, 0, 0.3);
  box-shadow: 0px 0px 5px 0.1px rgba(0, 0, 0, 0.3);
`;

export const ChoiceContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${({ height }) => height || 30}px;
`;

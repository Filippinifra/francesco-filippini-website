import styled from 'styled-components';

export const DropDownContainer = styled.div`
  position: relative;
  width: ${({ widthElement }) => widthElement || '100'}px;
  background-color: ${({ bgColor }) => bgColor};
  display: inline-flex;
  cursor: pointer;
`;

export const DropDownIndicator = styled.div`
  vertical-align: middle;
  color: ${({ color }) => color};
`;

export const DropDownTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${({ heightElement }) => heightElement || '30'}px;
  width: 100%;
  transition: background 0.6s;

  :hover {
    background-color: ${({ color }) => color};
  }
  &:hover ${DropDownIndicator} {
    color: ${({ bgColor }) => bgColor};
  }
`;

export const DropDownContent = styled.div`
  position: absolute;
  overflow: hidden;
  background-color: ${({ bgColor }) => bgColor};
  width: ${({ widthElement }) => widthElement || '100'}px;
  z-index: 1;
  margin-top: ${({ heightElement }) => heightElement || 36}px;

  max-height: ${({ isOpen, totalHeight }) => (isOpen ? totalHeight : 0)}px;

  transition: max-height 0.5s ease-in-out;

  -webkit-box-shadow: 0px 0px 5px 0.1px ${({ shadeColor }) => shadeColor};
  -moz-box-shadow: 0px 0px 5px 0.1px ${({ shadeColor }) => shadeColor};
  box-shadow: 0px 0px 5px 0.1px ${({ shadeColor }) => shadeColor};
`;

export const ChoiceContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  transition: background 0.6s;
  height: ${({ height }) => height || 30}px;

  :hover {
    background-color: ${({ color }) => color};
  }
`;

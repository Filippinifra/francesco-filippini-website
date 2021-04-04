import styled from 'styled-components';

export const Line = styled.path`
  fill: none;
  transition: stroke-dasharray 400ms, stroke-dashoffset 400ms;
  stroke-width: 5.5;
  stroke-linecap: round;
  stroke: ${({ color }) => color};
`;

export const LineTop = styled(Line)`
  stroke-dasharray: 40 139;
  ${({ active }) => active && 'stroke-dashoffset: -98px'};
`;

export const LineBottom = styled(Line)`
  stroke-dasharray: 40 180;
  ${({ active }) => active && 'stroke-dashoffset: -138px'};
`;

export const Ham = styled.svg`
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
  transition: transform 400ms;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;

  ${({ active }) => active && 'transform: rotate(45deg);'};
`;

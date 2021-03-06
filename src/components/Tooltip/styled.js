import styled from 'styled-components';
import { tooltipTransitionVisibility, tooltipTransitionHover } from 'constants/animationSettings';

export const PopperWrapper = styled.div`
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
  border-radius: 5px;
  background-color: ${({ colors }) => colors.tooltipBgColor};
  padding: 5px 8px;
  text-align: center;
  visibility: ${({ isVisible }) => (isVisible ? 'visible' : 'hidden')};
  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
  transition: opacity ${tooltipTransitionVisibility}ms, visibility ${tooltipTransitionVisibility}ms;

  :hover {
    opacity: 0.5;
    transition: ${tooltipTransitionHover}ms;
  }

  .arrow {
    position: absolute;
    width: 10px;
    height: 10px;

    &:after {
      content: ' ';
      position: absolute;
      left: 0;
      transform: rotate(45deg);
      width: 10px;
      height: 10px;
      background-color: ${({ colors }) => colors.tooltipBgColor};
    }
  }
  &[data-popper-placement^='top'] > .arrow {
    bottom: -5px;
    :after {
      box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.1);
    }
  }
  &[data-popper-placement^='bottom'] > .arrow {
    top: -5px;
    :after {
      box-shadow: -1px -1px 1px rgba(0, 0, 0, 0.1);
    }
  }
  &[data-popper-placement^='right'] > .arrow {
    left: -5px;
    :after {
      box-shadow: -1px 1px 1px rgba(0, 0, 0, 0.1);
    }
  }
  &[data-popper-placement^='left'] > .arrow {
    right: -5px;
    :after {
      box-shadow: 1px -1px 1px rgba(0, 0, 0, 0.1);
    }
  }
`;

import Styled from 'styled-components';

export const WrapperDivider = Styled.div`
    position: unset !important;
    height: 50px;
    background-color: ${({ colors }) => colors.dividerBgColor};
`;

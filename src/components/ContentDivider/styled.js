import Styled from "styled-components";

export const ContainerDivider = Styled.div`
    position: unset !important;
    height: 50px;
    background-color: ${(props) => props.colors.dividerBgColor};
`;

import Styled from "styled-components";
import Button from "@material-ui/core/Button";

export const ButtonModal = Styled(Button)`
    text-transform: none !important;
    color: ${(props) => props.colors.footerColor} !important;
    width: 100%;
    font-size: 12px !important;
`;

export const ContainerModal = Styled.div`
    height: 200px;
    width:100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${(props) => props.colors.modalBgColor};
    color: ${(props) => props.colors.modalColor};
    border-top-left-radius:10px !important;
    border-top-right-radius:10px !important;
`;

export const TextRow = Styled.div`
    text-align:center;
    line-height: 30px;
`;

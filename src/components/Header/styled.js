import Styled from "styled-components";

import { Grid } from "@material-ui/core";

export const GridItem = Styled(Grid)`
    height:100%;
`;

export const NavbarHeader = Styled.div`
    background-color: ${(props) => props.colors.headerBgColor};
    height: auto;
    -webkit-box-shadow: 0px 5px 20px -9px ${(props) =>
      props.colors.headerShade};
    -moz-box-shadow: 0px 5px 20px -9px ${(props) => props.colors.headerShade};
    box-shadow: 0px 5px 20px -9px ${(props) => props.colors.headerShade};
`;

export const ContainerNavbar = Styled.div`
    background-color: ${(props) => props.colors.headerBgColor};
    color: ${(props) => props.colors.headerColor};
    max-width: 1000px;
    margin: auto;
    height: 100%;
`;

export const GridContainer = Styled(Grid)`
    height: 100%;
`;

export const LogoImg = Styled.img`
    height: 30px;
    margin: 10px;
    cursor: pointer;
`;

export const NavButton = Styled.button`
    background-color:transparent;
    height: 100%;
    padding: 16px 25px;
    letter-spacing: 2px;
    font-size: 15px;
    border: 0;
    color: ${(props) => props.colors.headerColor};
    outline: none;
    cursor: pointer;
    transition: background 0.6s;
    text-transform: uppercase;

    :hover {
        background: ${(props) => props.colors.headerColor};
        color: ${(props) => props.colors.headerBgColor};
    }
`;

export const RightGrid = Styled.div`
    text-align: right;
    margin-right: 15px;
    height: 50px;
`;

export const LeftGrid = Styled.div`
    text-align: left;
    margin-left: 15px;
    height: 50px;
`;

export const NavMobileButton = Styled.button`
    background-color: ${(props) => props.colors.headerBgColor};
    height: 40px;
    padding: 16px auto;
    letter-spacing: 2px;
    font-size: 15px;
    border: 0;
    color: ${(props) => props.colors.headerColor};
    outline: none;
    cursor: pointer;
    transition: background 0.6s;
    text-transform: uppercase;
    width: 100%;

    :hover {
        background: ${(props) => props.colors.headerColor};
        color: ${(props) => props.colors.headerBgColor};
    }
`;

export const ContainerMobileLink = Styled.div`
    max-height: ${(props) => (props.hamburgerActive ? "162px" : "0")};
    transition: max-height 0.6s ease-in-out;
    overflow: hidden;
`;

export const BorderContainer = Styled.div`
    border: 1px ${(props) => props.colors.headerColor} solid;
`;

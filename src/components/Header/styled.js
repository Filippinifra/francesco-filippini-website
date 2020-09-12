import Styled from 'styled-components';

import { Grid } from '@material-ui/core';

export const GridItem = Styled(Grid)`
    height:100%;
`;

export const NavbarHeader = Styled.div`
    background-color: ${({ colors }) => colors.headerBgColor};
    height: auto;
    -webkit-box-shadow: 0px 5px 20px -9px ${({ colors }) => colors.headerShade};
    -moz-box-shadow: 0px 5px 20px -9px ${({ colors }) => colors.headerShade};
    box-shadow: 0px 5px 20px -9px ${({ colors }) => colors.headerShade};
`;

export const ContainerNavbar = Styled.div`
    background-color: ${({ colors }) => colors.headerBgColor};
    color: ${({ colors }) => colors.headerColor};
    max-width: 1000px;
    margin: auto;
    height: 100%;
`;

export const GridContainer = Styled(Grid)`
    height: 100%;
`;

export const LogoImg = Styled.img`
    height: 30px;
    width: 30px;
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
    color: ${({ colors }) => colors.headerColor};
    outline: none;
    cursor: pointer;
    transition: background 0.6s;
    text-transform: uppercase;

    :hover {
        background: ${({ colors }) => colors.headerColor};
        color: ${({ colors }) => colors.headerBgColor};
    }
`;

export const RightGrid = Styled.div`
    text-align: right;
    margin-right: 15px;
    height: 50px;
    display: flex;
    justify-content: flex-end;
`;

export const LeftGrid = Styled.div`
    text-align: left;
    margin-left: 15px;
    height: 50px;
`;

export const NavMobileButton = Styled.button`
    background-color: ${({ colors }) => colors.headerBgColor};
    height: 40px;
    padding: 16px auto;
    letter-spacing: 2px;
    font-size: 15px;
    border: 0;
    color: ${({ colors }) => colors.headerColor};
    outline: none;
    cursor: pointer;
    transition: background 0.6s;
    text-transform: uppercase;
    width: 100%;

    :hover {
        background: ${({ colors }) => colors.headerColor};
        color: ${({ colors }) => colors.headerBgColor};
    }
`;

export const ContainerMobileLink = Styled.div`
    max-height: ${({ hamburgerActive }) => (hamburgerActive ? '162px' : '0')};
    transition: max-height 0.6s ease-in-out;
    overflow: hidden;
`;

export const BorderContainer = Styled.div`
    border: 1px ${({ colors }) => colors.headerColor} solid;
`;

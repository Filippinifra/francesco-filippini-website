import Styled from "styled-components";

import { BottomNavigation, BottomNavigationAction } from "@material-ui/core";

import colors from "../../constants/colors";

export const NavigationBar = Styled(BottomNavigation)`
    background-color: ${colors.headerBgColor} !important;
    height: 70px !important;
    -webkit-box-shadow: 0px 5px 64px -9px ${colors.headerShade};
    -moz-box-shadow: 0px 5px 64px -9px ${colors.headerShade};
    box-shadow: 0px 5px 64px -9px ${colors.headerShade};
    position: fixed;
    width: 100%;
`;

export const NavigationItem = Styled(BottomNavigationAction)`
    background-color: ${colors.headerBgColor} !important;
    color: ${colors.headerColor} !important;
`;

import React, { useContext, useState, createContext } from 'react';
import { colorsLightOff, colorslightIsOn } from 'constants/colors';

export const ThemeContext = createContext(null);

export const ThemeProvider = ({ children }) => {
  const [colors, setColors] = useState(colorslightIsOn);
  const [lightIsOn, setlightIsOn] = useState(true);

  const onLightClick = () => {
    colors === colorslightIsOn ? setColors(colorsLightOff) : setColors(colorslightIsOn);
    setlightIsOn((value) => !value);
  };

  return <ThemeContext.Provider value={{ colors, lightIsOn, onLightClick }}>{children}</ThemeContext.Provider>;
};

export const useTheme = () => useContext(ThemeContext);

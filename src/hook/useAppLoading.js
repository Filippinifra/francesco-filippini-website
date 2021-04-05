import React, { useContext, useState, createContext, useEffect } from 'react';
import { animateScroll as scroll } from 'react-scroll';

export const AppLoadingContext = createContext(null);

export const AppLoadingProvider = ({ children }) => {
  const [appLoading, setAppLoading] = useState(true);
  const [animationsAvailable, setAnimationAvailable] = useState(false);

  useEffect(() => {
    scroll.scrollToTop();
    setTimeout(() => {
      setAppLoading(false);

      setTimeout(() => {
        setAnimationAvailable(true);
      }, 200);
    }, 2000);

    return scroll.scrollToTop;
  }, []);

  return <AppLoadingContext.Provider value={{ appLoading, animationsAvailable }}>{children}</AppLoadingContext.Provider>;
};

export const useAppLoading = () => useContext(AppLoadingContext);

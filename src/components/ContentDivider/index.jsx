import React from 'react';
import { useTheme } from 'hook/useTheme';
import { WrapperDivider } from './styled';

export const ContentDivider = () => {
  const { colors } = useTheme();

  return <WrapperDivider colors={colors} />;
};

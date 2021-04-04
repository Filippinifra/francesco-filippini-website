import React from 'react';
import { Curtain, CurtainLeftPanel, CurtainContent, CurtainWrapper, CurtainRightPanel, LeftTitle, RightTitle } from './styled.js';
import { useTranslation } from 'react-i18next';
import { useTheme } from 'hook/useTheme.js';

export const CurtainOpening = ({ isloading, children }) => {
  const { t } = useTranslation();
  const { colors } = useTheme();

  return (
    <Curtain>
      <CurtainWrapper>
        <CurtainLeftPanel loaded={isloading} colors={colors}>
          <LeftTitle colors={colors}>{t('textCurtain.leftPanelText')}</LeftTitle>
        </CurtainLeftPanel>
        <CurtainContent>{children}</CurtainContent>
        <CurtainRightPanel colors={colors} loaded={isloading}>
          <RightTitle colors={colors}>{t('textCurtain.rightPanelText')}</RightTitle>
        </CurtainRightPanel>
      </CurtainWrapper>
    </Curtain>
  );
};

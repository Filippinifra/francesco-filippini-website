import React, { useState, useRef } from 'react';
import { useTheme } from 'hook/useTheme';
import { usePopper } from 'react-popper';
import { PopperWrapper } from './styled';

export const Tooltip = ({ targetRef, isVisible, placement, message }) => {
  const { colors } = useTheme();
  const popperRef = useRef(null);
  const [arrowRef, setArrowRed] = useState(null);

  const { styles, attributes } = usePopper(targetRef.current, popperRef.current, {
    placement,
    modifiers: [
      {
        name: 'arrow',
        options: {
          element: arrowRef,
        },
      },
      {
        name: 'offset',
        options: {
          offset: [0, 10],
        },
      },
    ],
  });

  return (
    <PopperWrapper ref={popperRef} style={styles.popper} colors={colors} isVisible={isVisible} {...attributes.popper}>
      <div ref={setArrowRed} style={styles.arrow} className="arrow" />
      <div style={{ color: colors.tooltipColor, fontSize: 10 }}>{message}</div>
    </PopperWrapper>
  );
};

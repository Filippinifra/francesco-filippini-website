import React, { useState, useRef } from "react";
import { usePopper } from "react-popper";
import { PopperContainer } from "./styled";

export const Tooltip = ({
  targetRef,
  isVisible,
  placement,
  message,
  colors,
}) => {
  const popperRef = useRef(null);
  const [arrowRef, setArrowRed] = useState(null);

  const { styles, attributes } = usePopper(
    targetRef.current,
    popperRef.current,
    {
      placement,
      modifiers: [
        {
          name: "arrow",
          options: {
            element: arrowRef,
          },
        },
        {
          name: "offset",
          options: {
            offset: [0, 10],
          },
        },
      ],
    }
  );

  return (
    <PopperContainer
      ref={popperRef}
      style={styles.popper}
      colors={colors}
      isVisible={isVisible}
      {...attributes.popper}
    >
      <div ref={setArrowRed} style={styles.arrow} className="arrow" />
      <div style={{ color: colors.tooltipColor, fontSize: 10 }}>{message}</div>
    </PopperContainer>
  );
};

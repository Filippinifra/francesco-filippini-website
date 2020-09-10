import React, { useState, useRef } from "react";
import { usePopper } from "react-popper";
import { PopperContainer } from "./styled";

export const Tooltip = ({ targetRef, isVisible, placement, message }) => {
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

  return isVisible ? (
    <PopperContainer
      ref={popperRef}
      style={styles.popper}
      {...attributes.popper}
    >
      <div ref={setArrowRed} style={styles.arrow} className="arrow" />
      <div>{message}</div>
    </PopperContainer>
  ) : null;
};

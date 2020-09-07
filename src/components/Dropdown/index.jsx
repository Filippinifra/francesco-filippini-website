import React, { useState } from "react";

import {
  DropDownContainer,
  DropDownContent,
  DropDownTitle,
  DropDownIndicator,
  ChoiceContainer,
} from "./styles";

import { ExpandMore } from "@material-ui/icons";
import { ExpandLess } from "@material-ui/icons";

export const Dropdown = ({
  title,
  dropDownElementsArray,
  widthElement,
  heightElement,
  color,
  bgColor,
  style,
  onClick,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleBlur = () => {
    if (isOpen) {
      setIsOpen(false);
    }
  };

  return (
    <div tabIndex="0" onBlur={handleBlur} style={{ outline: "none" }}>
      <DropDownContainer
        widthElement={widthElement}
        isOpen={isOpen}
        bgColor={bgColor}
        style={{ ...style }}
        onClick={onClick}
      >
        <DropDownTitle
          onClick={() => setIsOpen(!isOpen)}
          heightElement={heightElement}
        >
          {title}
          <DropDownIndicator style={{ color: color }}>
            {isOpen ? (
              <ExpandLess style={{ marginTop: 5, marginLeft: 5 }} />
            ) : (
              <ExpandMore style={{ marginTop: 5, marginLeft: 5 }} />
            )}
          </DropDownIndicator>
        </DropDownTitle>
        <DropDownContent
          widthElement={widthElement}
          heightElement={heightElement}
          isOpen={isOpen}
          totalHeight={heightElement * dropDownElementsArray.length}
          bgColor={bgColor}
        >
          {dropDownElementsArray.map((element) => (
            <ChoiceContainer
              height={heightElement}
              onClick={() => {
                element.onCta();
                setIsOpen(false);
              }}
            >
              {element.text}
            </ChoiceContainer>
          ))}
        </DropDownContent>
      </DropDownContainer>
    </div>
  );
};

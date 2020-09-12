import React, { useState } from 'react';

import { DropDownContainer, DropDownContent, DropDownTitle, DropDownIndicator, ChoiceContainer } from './styled';

import { ExpandMore } from '@material-ui/icons';
import { ExpandLess } from '@material-ui/icons';

export const Dropdown = ({ title, dropDownElementsArray, widthElement, heightElement, color, bgColor, style, onClick, shadeColor }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleBlur = () => {
    if (isOpen) {
      setIsOpen(false);
    }
  };

  return (
    <div tabIndex="0" onBlur={handleBlur} style={{ outline: 'none' }}>
      <DropDownContainer widthElement={widthElement} isOpen={isOpen} style={{ ...style }} onClick={onClick}>
        <DropDownTitle onClick={() => setIsOpen(!isOpen)} heightElement={heightElement} color={color} bgColor={bgColor}>
          <div style={{ marginLeft: 5 }}>{title}</div>
          <DropDownIndicator color={color} bgColor={bgColor}>
            {isOpen ? (
              <ExpandLess style={{ marginTop: 5, marginLeft: 0, width: 22 }} />
            ) : (
              <ExpandMore style={{ marginTop: 5, marginLeft: 0, width: 22 }} />
            )}
          </DropDownIndicator>
        </DropDownTitle>
        <DropDownContent
          widthElement={widthElement}
          heightElement={heightElement}
          isOpen={isOpen}
          totalHeight={heightElement * dropDownElementsArray.length}
          bgColor={bgColor}
          shadeColor={shadeColor}
        >
          {dropDownElementsArray.map((element, index) => (
            <ChoiceContainer
              height={heightElement}
              onClick={() => {
                element.onCta();
                setIsOpen(false);
              }}
              color={color}
              key={`dropdown-element-${index}`}
            >
              {element.text}
            </ChoiceContainer>
          ))}
        </DropDownContent>
      </DropDownContainer>
    </div>
  );
};

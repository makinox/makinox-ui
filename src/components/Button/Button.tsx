import React from 'react';
import { ButtonContained, ButtonOutline, ButtonText } from './Button.styles';
import { ButtonType } from './Button.types';

function Button({ type, use, message, ...props }: ButtonType) {
  switch (use) {
    case 'contained':
      return <ButtonContained {...props}>{message}</ButtonContained>;
    case 'outlined':
      return <ButtonOutline {...props}>{message}</ButtonOutline>;
    case 'text':
      return <ButtonText {...props}>{message}</ButtonText>;
    default:
      return <ButtonContained {...props}>{message}</ButtonContained>;
  }
}

export default Button;

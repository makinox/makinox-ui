import { ButtonContained, ButtonOutline, ButtonText } from './Button.styles';
import { ButtonType } from './Button.types';

function Button({ type, use, message, icon, ...props }: ButtonType) {
  switch (use) {
    case 'contained':
      return (
        <ButtonContained {...props}>
          {icon ? icon : <></>}
          <span>{message}</span>
        </ButtonContained>
      );
    case 'outlined':
      return (
        <ButtonOutline {...props}>
          {icon ? icon : <></>}
          <span>{message}</span>
        </ButtonOutline>
      );
    case 'text':
      return (
        <ButtonText {...props}>
          {icon ? icon : <></>}
          <span>{message}</span>
        </ButtonText>
      );
    default:
      return (
        <ButtonContained {...props}>
          {icon ? icon : <></>}
          <span>{message}</span>
        </ButtonContained>
      );
  }
}

export default Button;

import { HTMLAttributes } from 'react';
import { ButtonType } from '../Button/Button.types';

export interface CardType extends HTMLAttributes<HTMLElement> {
  use: 'elevated' | 'outlined';
  title?: string;
  secondary?: string;
  text?: string;
  media?: string;
  maxWidth?: string;
  customMedia?: HTMLImageElement | Element | any;
  buttons?: [HTMLButtonElement | ButtonType | Element | any, HTMLButtonElement | ButtonType | Element | any];
  children?: React.ReactNode;
  isDark?: boolean;
}

export interface CardStyle {
  media?: string;
  maxWidth?: string;
  isDark?: boolean;
}

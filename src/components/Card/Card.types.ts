import { HTMLAttributes } from 'react';

export interface CardType extends HTMLAttributes<HTMLElement> {
  use: 'elevated' | 'outlined';
  title?: string;
  secondary?: string;
  text?: string;
  media?: string;
  buttons?: [HTMLButtonElement, HTMLButtonElement];
  children?: React.ReactNode;
}

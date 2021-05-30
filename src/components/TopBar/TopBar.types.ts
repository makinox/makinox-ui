import { HTMLAttributes } from 'react';

export interface TopBarType extends HTMLAttributes<HTMLElement> {
  leftChild?: React.ReactNode;
  centerChild?: React.ReactNode;
  rightChild?: React.ReactNode;
}

export interface TopBarStyle {
  isDark?: boolean;
}

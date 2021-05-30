import { ButtonHTMLAttributes } from 'react';

export interface FloatType extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: React.ReactNode;
  use?: 'Default' | 'Mini';
  isDark?: boolean;
}

export interface FloatStyle {
  isDark?: boolean;
}

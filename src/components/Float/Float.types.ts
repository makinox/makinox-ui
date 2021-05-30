import { ButtonHTMLAttributes } from 'react';

export interface FloatType extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: React.ReactNode;
  use?: 'Default' | 'Mini';
}

export interface FloatStyle {
  isDark?: boolean;
}

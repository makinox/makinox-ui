import { ButtonHTMLAttributes } from 'react';

export interface ButtonType extends ButtonHTMLAttributes<HTMLButtonElement> {
  use: 'contained' | 'outlined' | 'text';
  message: string;
  icon?: React.ReactNode;
}

export interface ButtonStyle extends ButtonHTMLAttributes<HTMLButtonElement> {
  isDark?: boolean;
}

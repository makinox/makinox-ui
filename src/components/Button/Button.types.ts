import { ButtonHTMLAttributes } from 'react';

export interface ButtonType extends ButtonHTMLAttributes<any> {
  use: 'contained' | 'outlined' | 'text';
  message: string;
  icon?: React.ReactNode;
}

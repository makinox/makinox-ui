import { ButtonHTMLAttributes } from 'react';

export interface FloatType extends ButtonHTMLAttributes<any> {
  icon: React.ReactNode;
  use?: 'Default' | 'Mini';
}

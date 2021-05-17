import { HTMLAttributes } from 'react';
import { className } from '../../types';

export interface FluidContainerType extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: className;
}

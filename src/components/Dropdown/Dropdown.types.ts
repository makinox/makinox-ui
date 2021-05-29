import { HTMLAttributes } from 'react';

export interface DropdownType extends HTMLAttributes<HTMLDivElement> {
  Item: React.ReactNode | Element;
  HiddenItems: React.ReactNode | Element | [];
}
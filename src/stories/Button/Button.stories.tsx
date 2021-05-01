import { Meta, Story } from '@storybook/react/types-6-0';
import { GiCastle } from 'react-icons/gi';
import { ButtonType } from '../../types';
import { Button } from '../..';

export default {
  title: 'Example/Button',
  component: Button,
} as Meta<ButtonType>;

export const Contained: Story<ButtonType> = (props: ButtonType) => <Button {...props} />;
Contained.args = {
  use: 'contained',
  message: 'contained',
};

export const Outlined: Story<ButtonType> = (props: ButtonType) => <Button {...props} />;
Outlined.args = {
  use: 'outlined',
  message: 'outlined',
};

export const Text: Story<ButtonType> = (props: ButtonType) => <Button {...props} />;
Text.args = {
  use: 'text',
  message: 'text',
};

export const ContainedIcon: Story<ButtonType> = (props: ButtonType) => <Button {...props} />;
ContainedIcon.args = {
  use: 'contained',
  message: 'contained',
  icon: (
    <span style={{ marginRight: '8px' }}>
      <GiCastle />
    </span>
  ),
};

export const OutlinedIcon: Story<ButtonType> = (props: ButtonType) => <Button {...props} />;
OutlinedIcon.args = {
  use: 'outlined',
  message: 'outlined',
  icon: (
    <span style={{ marginRight: '8px' }}>
      <GiCastle />
    </span>
  ),
};

export const TextIcon: Story<ButtonType> = (props: ButtonType) => <Button {...props} />;
TextIcon.args = {
  use: 'text',
  message: 'text',
  icon: (
    <span style={{ marginRight: '8px' }}>
      <GiCastle />
    </span>
  ),
};

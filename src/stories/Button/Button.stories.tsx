import { GiCastle } from 'react-icons/gi';
import { Story } from '@storybook/react/types-6-0';

import { ButtonContained, ButtonOutline, ButtonText, ButtonNeumorphic } from '../..';
import { baseSizes } from '../../components/Button/Button.styles';

export default {
  title: 'Makinox-ui/Button',
  component: <button />,
  argTypes: {
    size: {
      control: 'select',
      options: Object.keys(baseSizes),
    },
  },
};

export const Contained: Story = (args) => <button className={ButtonContained(args)}>{args.text}</button>;
Contained.args = {
  css: {},
  size: 'md',
  isDark: false,
  text: 'contained',
};

export const Outlined: Story = (args) => <button className={ButtonOutline(args)}>{args.text}</button>;
Outlined.args = {
  css: {},
  size: 'md',
  isDark: false,
  text: 'Outlined',
};

export const Text: Story = (args) => <button className={ButtonText(args)}>{args.text}</button>;
Text.args = {
  css: {},
  size: 'md',
  isDark: false,
  text: 'Text',
};

export const Neumorphic: Story = (args) => <button className={ButtonNeumorphic(args)}>{args.text}</button>;
Neumorphic.args = {
  css: {},
  size: 'md',
  isDark: false,
  text: 'Neumorphic',
};

export const ContainedIcon: Story = (args) => (
  <button className={ButtonContained(args)}>
    <GiCastle />
  </button>
);
ContainedIcon.args = {
  css: {},
  size: 'md',
  isDark: false,
};

export const OutlinedIcon: Story = (args) => (
  <button className={ButtonOutline(args)}>
    <GiCastle />
  </button>
);
OutlinedIcon.args = {
  css: {},
  size: 'md',
  isDark: false,
};

export const TextIcon: Story = (args) => (
  <button className={ButtonText(args)}>
    <GiCastle />
  </button>
);
TextIcon.args = {
  css: {},
  size: 'md',
  isDark: false,
};

export const DarkContained: Story = (args) => <button className={ButtonContained(args)}>{args.text}</button>;
DarkContained.parameters = {
  backgrounds: { default: 'dark' },
};
DarkContained.args = {
  css: {},
  size: 'md',
  isDark: true,
  text: 'contained',
};

export const DarkOutlined: Story = (args) => <button className={ButtonOutline(args)}>{args.text}</button>;
DarkOutlined.parameters = {
  backgrounds: { default: 'dark' },
};
DarkOutlined.args = {
  css: {},
  size: 'md',
  isDark: true,
  text: 'Outlined',
};

export const DarkText: Story = (args) => <button className={ButtonText(args)}>{args.text}</button>;
DarkText.parameters = {
  backgrounds: { default: 'dark' },
};
DarkText.args = {
  css: {},
  size: 'md',
  isDark: true,
  text: 'Text',
};

export const DarkNeumorphic: Story = (args) => <button className={ButtonNeumorphic(args)}>{args.text}</button>;
DarkNeumorphic.parameters = {
  backgrounds: { default: 'dark' },
};
DarkNeumorphic.args = {
  css: {},
  size: 'md',
  isDark: true,
  text: 'Neumorphic',
};

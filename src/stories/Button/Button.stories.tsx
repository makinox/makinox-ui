import { Story } from '@storybook/react/types-6-0';
import { ThemeProvider } from 'styled-components';
import { GiCastle } from 'react-icons/gi';
import { ButtonType } from '../../types';
import { Button } from '../..';

export default {
  title: 'Makinox-ui/Button',
  component: Button,
};

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

export const DarkContained: Story<ButtonType> = (props: ButtonType) => (
  <ThemeProvider theme={{ isDark: true }}>
    <Button {...props} />
  </ThemeProvider>
);
DarkContained.args = {
  use: 'contained',
  message: 'contained',
};
DarkContained.parameters = {
  backgrounds: { default: 'dark' },
};

export const DarkOutlined: Story<ButtonType> = (props: ButtonType) => (
  <ThemeProvider theme={{ isDark: true }}>
    <Button {...props} />
  </ThemeProvider>
);
DarkOutlined.args = {
  use: 'outlined',
  message: 'outlined',
};
DarkOutlined.parameters = {
  backgrounds: { default: 'dark' },
};

export const DarkText: Story<ButtonType> = (props: ButtonType) => (
  <ThemeProvider theme={{ isDark: true }}>
    <Button {...props} />
  </ThemeProvider>
);
DarkText.args = {
  use: 'text',
  message: 'text',
};
DarkText.parameters = {
  backgrounds: { default: 'dark' },
};

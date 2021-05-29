import { Story } from '@storybook/react/types-6-0';
import { ThemeProvider } from 'styled-components';
import { DropdownType } from '../../types';
import { Dropdown } from '../../';

export default {
  title: 'Makinox-ui/Dropdown',
  component: Dropdown,
};

export const Default: Story<DropdownType> = (props: DropdownType) => <Dropdown {...props} />;
Default.args = {
  Item: <span>Item</span>,
  HiddenItems: [<span>Item</span>, <span>Item</span>, <span>Item</span>],
};

export const DarkDefault: Story<DropdownType> = (props: DropdownType) => (
  <ThemeProvider theme={{ isDark: true }}>
    <Dropdown {...props} />
  </ThemeProvider>
);
DarkDefault.args = {
  Item: <span>Item</span>,
  HiddenItems: [<span>Item</span>, <span>Item</span>, <span>Item</span>],
};
DarkDefault.parameters = {
  backgrounds: { default: 'dark' },
};

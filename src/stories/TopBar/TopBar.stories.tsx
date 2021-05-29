import { Story } from '@storybook/react/types-6-0';
import { ThemeProvider } from 'styled-components';
import { TopBarType } from '../../types';
import { TopBar } from '../../';

export default {
  title: 'Makinox-ui/TopBar',
  component: TopBar,
};

export const WithChild: Story<TopBarType> = (props: TopBarType) => <TopBar {...props} />;
WithChild.args = {
  leftChild: <span>leftChild</span>,
  centerChild: <span>centerChild</span>,
  rightChild: <span>rightChild</span>,
};

export const WithDark: Story<TopBarType> = (props: TopBarType) => (
  <ThemeProvider theme={{ isDark: true }}>
    <TopBar {...props} />
  </ThemeProvider>
);
WithDark.args = {
  leftChild: <span>leftChild</span>,
  centerChild: <span>centerChild</span>,
  rightChild: <span>rightChild</span>,
};
WithDark.parameters = {
  backgrounds: { default: 'dark' },
};

import { Story } from '@storybook/react/types-6-0';
import { GiSwordAltar } from 'react-icons/gi';
import { FloatType } from '../../types';
import { Float } from '../..';
import { ThemeProvider } from 'styled-components';

export default {
  title: 'Makinox-ui/Float',
  component: Float,
};

export const DefaultIcon: Story<FloatType> = (props: FloatType) => <Float {...props} />;
DefaultIcon.args = {
  use: 'Default',
  icon: <GiSwordAltar size={25} />,
};

export const MiniIcon: Story<FloatType> = (props: FloatType) => <Float {...props} />;
MiniIcon.args = {
  use: 'Mini',
  icon: <GiSwordAltar size={20} />,
};

export const DarkFloat: Story<FloatType> = (props: FloatType) => (
  <ThemeProvider theme={{ isDark: true }}>
    <Float {...props} />
  </ThemeProvider>
);
DarkFloat.args = {
  use: 'Default',
  icon: <GiSwordAltar size={20} />,
};
DarkFloat.parameters = {
  backgrounds: { default: 'dark' },
};

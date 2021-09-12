import { Story } from '@storybook/react/types-6-0';
import { GiSwordAltar } from 'react-icons/gi';
import { Float } from '../..';

export default {
  title: 'Makinox-ui/Float',
  component: Float,
};

export const DefaultIcon: Story = () => (
  <button className={Float()}>
    <GiSwordAltar size={25} />
  </button>
);

export const MiniIcon: Story = () => (
  <button className={Float({ type: 'mini' })}>
    <GiSwordAltar size={20} />
  </button>
);

export const DarkFloat: Story = () => (
  <button className={Float({ isDark: true })}>
    <GiSwordAltar size={25} />
  </button>
);
DarkFloat.parameters = {
  backgrounds: { default: 'dark' },
};

export const DarkFloatMini: Story = () => (
  <button className={Float({ type: 'mini', isDark: true })}>
    <GiSwordAltar size={20} />
  </button>
);
DarkFloatMini.parameters = {
  backgrounds: { default: 'dark' },
};

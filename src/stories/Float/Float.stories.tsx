import { Story } from '@storybook/react/types-6-0';
import { GiSwordAltar } from 'react-icons/gi';
import { FloatType } from '../../types';
import { Float } from '../..';

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

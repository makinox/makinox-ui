import { Story } from '@storybook/react/types-6-0';
import { FluidContainer } from '../../';

export default {
  title: 'Makinox-ui/FluidContainer',
  component: <section />,
};

export const WithChild: Story = (props) => <section className={FluidContainer()} {...props} />;
WithChild.args = {
  children: <span>hole children</span>,
};

export const WithoutChild: Story = (props) => <section className={FluidContainer()} {...props} />;
WithoutChild.args = {
  children: <></>,
};

import { FluidContainer } from '../../';
import { FluidContainerType } from '../../types';

export default {
  title: 'Example/FluidContainer',
  component: FluidContainer,
};

const Template = (args: JSX.IntrinsicAttributes & FluidContainerType) => <FluidContainer {...args} />;

export const WithChild: { args: FluidContainerType } | any = Template.bind({});
WithChild.args = {
  children: <span>hola children</span>,
};

export const WithoutChild: { args: FluidContainerType } | any = Template.bind({});
WithoutChild.args = {
  children: <></>,
};

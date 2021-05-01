import { Story } from '@storybook/react/types-6-0';
import { FluidContainerType } from '../../types';
import { FluidContainer } from '../../';

export default {
  title: 'Example/FluidContainer',
  component: FluidContainer,
};

export const WithChild: Story<FluidContainerType> = (props: FluidContainerType) => <FluidContainer {...props} />;
WithChild.args = {
  children: <span>hola children</span>,
};

export const WithoutChild: Story<FluidContainerType> = (props: FluidContainerType) => <FluidContainer {...props} />;
WithoutChild.args = {
  children: <></>,
};

import { FluidContainer } from '../../';

export default {
  title: 'Makinox-ui/FluidContainer',
  component: <section />,
};

export const WithChild = () => <section className={FluidContainer()} />;
WithChild.args = {
  children: <span>hole children</span>,
};

export const WithoutChild = () => <section className={FluidContainer()} />;
WithoutChild.args = {
  children: <></>,
};

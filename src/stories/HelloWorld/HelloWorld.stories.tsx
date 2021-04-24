import { HelloWorld } from '../../components';
import { HelloWorldType } from '../../components/HelloWorld/HelloWorld';

export default {
  title: 'Example/HelloWorld',
  component: HelloWorld,
};

const Template = (args: JSX.IntrinsicAttributes & { message: string }) => <HelloWorld {...args} />;

export const WithMessage: { args: HelloWorldType } | any = Template.bind({});
WithMessage.args = {
  message: 'Hola mundo',
};

export const WithoutMessage: { args: HelloWorldType } | any = Template.bind({});
WithoutMessage.args = {};

import { Button } from '../..';
import { ButtonType } from '../../types';

export default {
  title: 'Example/Button',
  component: Button,
};

const Template = (args: JSX.IntrinsicAttributes & ButtonType) => <Button {...args} />;

export const Contained: { args: ButtonType } | any = Template.bind({});
Contained.args = {
  use: 'contained',
  message: 'contained',
};

export const Outlined: { args: ButtonType } | any = Template.bind({});
Outlined.args = {
  use: 'outlined',
  message: 'outlined',
};

export const Text: { args: ButtonType } | any = Template.bind({});
Text.args = {
  use: 'text',
  message: 'text',
};

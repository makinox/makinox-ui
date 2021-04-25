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

const TemplateIcon = (args: JSX.IntrinsicAttributes & ButtonType) => <Button {...args} icon={<span style={{ marginRight: '8px' }}>🙂</span>} />;

export const ContainedIcon: { args: ButtonType } | any = TemplateIcon.bind({});
ContainedIcon.args = {
  use: 'contained',
  message: 'contained',
};

export const OutlinedIcon: { args: ButtonType } | any = TemplateIcon.bind({});
OutlinedIcon.args = {
  use: 'outlined',
  message: 'outlined',
};

export const TextIcon: { args: ButtonType } | any = TemplateIcon.bind({});
TextIcon.args = {
  use: 'text',
  message: 'text',
};

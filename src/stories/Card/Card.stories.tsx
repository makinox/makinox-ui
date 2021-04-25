import { Card } from '../..';
import { CardType } from '../../types';

export default {
  title: 'Example/Card',
  component: Card,
};

const Template = (args: JSX.IntrinsicAttributes & CardType) => <Card {...args} />;

export const Elevated: { args: CardType } | any = Template.bind({});
Elevated.args = {
  use: 'elevated',
  title: 'title',
  secondary: 'secondary',
  text: 'text',
};

const TemplateIcon = (args: JSX.IntrinsicAttributes & CardType) => <Card {...args} />;

export const Outlined: { args: CardType } | any = TemplateIcon.bind({});
Outlined.args = {
  use: 'outlined',
  title: 'title',
  secondary: 'secondary',
  text: 'text',
};

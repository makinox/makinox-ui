import { Meta, Story } from '@storybook/react/types-6-0';
import { CardType } from '../../types';
import { Card, Button } from '../..';

export default {
  title: 'Example/Card',
  component: Card,
} as Meta<CardType>;

const previewDefault =
  'data:image/svg+xml,%3Csvg%20width%3D%22344%22%20height%3D%22194%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%3E%3Cdefs%3E%3Cpath%20id%3D%22a%22%20d%3D%22M-1%200h344v194H-1z%22%2F%3E%3C%2Fdefs%3E%3Cg%20transform%3D%22translate(1)%22%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cmask%20id%3D%22b%22%20fill%3D%22%23fff%22%3E%3Cuse%20xlink%3Ahref%3D%22%23a%22%2F%3E%3C%2Fmask%3E%3Cuse%20fill%3D%22%23BDBDBD%22%20xlink%3Ahref%3D%22%23a%22%2F%3E%3Cg%20mask%3D%22url(%23b)%22%3E%3Cpath%20d%3D%22M173.65%2069.238L198.138%2027%20248%20112.878h-49.3c.008.348.011.697.011%201.046%200%2028.915-23.44%2052.356-52.355%2052.356C117.44%20166.28%2094%20142.84%2094%20113.924c0-28.915%2023.44-52.355%2052.356-52.355%2010%200%2019.347%202.804%2027.294%207.669zm0%200l-25.3%2043.64h50.35c-.361-18.478-10.296-34.61-25.05-43.64z%22%20fill%3D%22%23757575%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E';

export const Elevated: Story<CardType> = (props: CardType) => <Card {...props} />;
Elevated.args = {
  use: 'elevated',
  title: 'title',
  secondary: 'secondary',
  text: 'text',
};

export const Outlined: Story<CardType> = (props: CardType) => <Card {...props} />;
Outlined.args = {
  use: 'outlined',
  title: 'title',
  secondary: 'secondary',
  text: 'text',
};

export const WithButtons: Story<CardType> = (props: CardType) => <Card {...props} />;
WithButtons.args = {
  use: 'outlined',
  title: 'title',
  secondary: 'secondary',
  text: 'text',
  buttons: [<Button key="Action uno" message="Action uno" use="text" />, <Button key="Action dos" message="Action dos" use="text" />],
};

export const Media: Story<CardType> = (props: CardType) => <Card {...props} />;
Media.args = {
  use: 'outlined',
  title: 'title',
  secondary: 'secondary',
  text: 'text',
  buttons: [<Button key="Action uno" message="Action uno" use="text" />, <Button key="Action dos" message="Action dos" use="text" />],
  media: previewDefault,
};

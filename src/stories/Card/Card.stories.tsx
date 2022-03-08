import { Story } from '@storybook/react/types-6-0';
import { Card, ButtonText } from '../..';

export default {
  title: 'Makinox-ui/Card',
  component: <article />,
};

const previewDefault =
  'data:image/svg+xml,%3Csvg%20width%3D%22344%22%20height%3D%22194%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%3E%3Cdefs%3E%3Cpath%20id%3D%22a%22%20d%3D%22M-1%200h344v194H-1z%22%2F%3E%3C%2Fdefs%3E%3Cg%20transform%3D%22translate(1)%22%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cmask%20id%3D%22b%22%20fill%3D%22%23fff%22%3E%3Cuse%20xlink%3Ahref%3D%22%23a%22%2F%3E%3C%2Fmask%3E%3Cuse%20fill%3D%22%23BDBDBD%22%20xlink%3Ahref%3D%22%23a%22%2F%3E%3Cg%20mask%3D%22url(%23b)%22%3E%3Cpath%20d%3D%22M173.65%2069.238L198.138%2027%20248%20112.878h-49.3c.008.348.011.697.011%201.046%200%2028.915-23.44%2052.356-52.355%2052.356C117.44%20166.28%2094%20142.84%2094%20113.924c0-28.915%2023.44-52.355%2052.356-52.355%2010%200%2019.347%202.804%2027.294%207.669zm0%200l-25.3%2043.64h50.35c-.361-18.478-10.296-34.61-25.05-43.64z%22%20fill%3D%22%23757575%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E';

export const Elevated: Story = (args) => (
  <article className={Card()}>
    <div className="card-header">
      <h6 className="headline6">{args.title}</h6>
      <span className="subtitle1">{args.secondary}</span>
    </div>
    <div className="card-body">
      <p className="body2">{args.text}</p>
    </div>
  </article>
);
Elevated.args = {
  title: 'title',
  secondary: 'secondary',
  text: 'Lorem ipsum',
};

export const Outlined: Story = (args) => (
  <article className={Card({ type: args.type })}>
    <div className="card-header">
      <h6 className="headline6">{args.title}</h6>
      <span className="subtitle1">{args.secondary}</span>
    </div>
    <div className="card-body">
      <p className="body2">{args.text}</p>
    </div>
  </article>
);
Outlined.args = {
  type: 'outlined',
  title: 'title',
  secondary: 'secondary',
  text: 'text',
};

export const Neumorphic: Story = (args) => (
  <article className={Card({ type: args.type })}>
    <div className="card-header">
      <h6 className="headline6">{args.title}</h6>
      <span className="subtitle1">{args.secondary}</span>
    </div>
    <div className="card-body">
      <p className="body2">{args.text}</p>
    </div>
  </article>
);
Neumorphic.args = {
  type: 'neumorphic',
  title: 'title',
  secondary: 'secondary',
  text: 'text',
};

export const WithButtons: Story = (args) => (
  <article className={Card({ type: args.type })}>
    <div className="card-header">
      <h6 className="headline6">{args.title}</h6>
      <span className="subtitle1">{args.secondary}</span>
    </div>
    <div className="card-body">
      <p className="body2">{args.text}</p>
    </div>
    <div className="card-bottom">
      <button className={ButtonText()}>Action uno</button>
      <button className={ButtonText()}>Action dos</button>
    </div>
  </article>
);
WithButtons.args = {
  type: 'outlined',
  title: 'title',
  secondary: 'secondary',
  text: 'text',
};

export const Media: Story = (args) => (
  <article className={Card({ type: args.type })}>
    <img className="card-media" src={previewDefault} alt="Card media test" />
    <div className="card-header">
      <h6 className="headline6">{args.title}</h6>
      <span className="subtitle1">{args.secondary}</span>
    </div>
    <div className="card-body">
      <p className="body2">{args.text}</p>
    </div>
    <div className="card-bottom">
      <button className={ButtonText()}>Action uno</button>
      <button className={ButtonText()}>Action dos</button>
    </div>
  </article>
);
Media.args = {
  type: 'outlined',
  title: 'title',
  secondary: 'secondary',
  text: 'text',
  media: previewDefault,
};

export const DarkElevated: Story = (args) => (
  <article className={Card({ isDark: true })}>
    <div className="card-header">
      <h6 className="headline6">{args.title}</h6>
      <span className="subtitle1">{args.secondary}</span>
    </div>
    <div className="card-body">
      <p className="body2">{args.text}</p>
    </div>
  </article>
);
DarkElevated.args = {
  title: 'title',
  secondary: 'secondary',
  text: 'text',
};
DarkElevated.parameters = {
  backgrounds: { default: 'dark' },
};

export const DarkOutlined: Story = (args) => (
  <article className={Card({ isDark: true, type: args.type })}>
    <div className="card-header">
      <h6 className="headline6">{args.title}</h6>
      <span className="subtitle1">{args.secondary}</span>
    </div>
    <div className="card-body">
      <p className="body2">{args.text}</p>
    </div>
  </article>
);
DarkOutlined.args = {
  type: 'outlined',
  title: 'title',
  secondary: 'secondary',
  text: 'text',
};
DarkOutlined.parameters = {
  backgrounds: { default: 'dark' },
};

export const DarkNeumorphic: Story = (args) => (
  <article className={Card({ isDark: true, type: args.type })}>
    <div className="card-header">
      <h6 className="headline6">{args.title}</h6>
      <span className="subtitle1">{args.secondary}</span>
    </div>
    <div className="card-body">
      <p className="body2">{args.text}</p>
    </div>
  </article>
);
DarkNeumorphic.args = {
  type: 'darkNeumorphic',
  title: 'title',
  secondary: 'secondary',
  text: 'text',
};
DarkNeumorphic.parameters = {
  backgrounds: { default: 'dark' },
};

export const DarkWithButtons: Story = (args) => (
  <article className={Card({ type: args.type, isDark: true })}>
    <img className="card-media" src={previewDefault} alt="Card media test" />
    <div className="card-header">
      <h6 className="headline6">{args.title}</h6>
      <span className="subtitle1">{args.secondary}</span>
    </div>
    <div className="card-body">
      <p className="body2">{args.text}</p>
    </div>
    <div className="card-bottom">
      <button className={ButtonText()}>Action uno</button>
      <button className={ButtonText()}>Action dos</button>
    </div>
  </article>
);
DarkWithButtons.args = {
  type: 'outlined',
  title: 'title',
  secondary: 'secondary',
  text: 'text',
};
DarkWithButtons.parameters = {
  backgrounds: { default: 'dark' },
};

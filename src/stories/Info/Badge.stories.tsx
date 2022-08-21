import { Badge } from '../..';

export default {
  title: 'Makinox-ui/Badge',
  component: <div />,
};

export const Default = () => <div className={Badge()}>1</div>;

export const DefaultDark = () => <div className={Badge({ isDark: true })}>1</div>;

DefaultDark.parameters = {
  backgrounds: { default: 'dark' },
};

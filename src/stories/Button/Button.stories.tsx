import { GiCastle } from 'react-icons/gi';
import { ButtonContained, ButtonOutline, ButtonText, ButtonNeumorphic } from '../..';

export default {
  title: 'Makinox-ui/Button',
  component: <button />,
};

export const Contained = () => <button className={ButtonContained()}>contained</button>;

export const Outlined = () => <button className={ButtonOutline()}>Outlined</button>;

export const Text = () => <button className={ButtonText()}>Text</button>;

export const Neumorphic = () => <button className={ButtonNeumorphic()}>Text</button>;

export const ContainedIcon = () => (
  <button className={ButtonContained()}>
    <GiCastle />
  </button>
);

export const OutlinedIcon = () => (
  <button className={ButtonOutline()}>
    <GiCastle />
  </button>
);

export const TextIcon = () => (
  <button className={ButtonText()}>
    <GiCastle />
  </button>
);

export const DarkContained = () => <button className={ButtonContained({ isDark: true })}>contained</button>;
DarkContained.parameters = {
  backgrounds: { default: 'dark' },
};

export const DarkOutlined = () => <button className={ButtonOutline({ isDark: true })}>Outlined</button>;
DarkOutlined.parameters = {
  backgrounds: { default: 'dark' },
};

export const DarkText = () => <button className={ButtonText({ isDark: true })}>Text</button>;
DarkText.parameters = {
  backgrounds: { default: 'dark' },
};

export const DarkNeumorphic = () => <button className={ButtonNeumorphic({ isDark: true })}>Text</button>;
DarkNeumorphic.parameters = {
  backgrounds: { default: 'dark' },
};

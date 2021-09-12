import { GiSwordAltar } from 'react-icons/gi';
import { Float } from '../..';

export default {
  title: 'Makinox-ui/Float',
  component: Float,
};

export const DefaultIcon = () => (
  <button className={Float()}>
    <GiSwordAltar size={25} />
  </button>
);

export const MiniIcon = () => (
  <button className={Float({ type: 'mini' })}>
    <GiSwordAltar size={20} />
  </button>
);

export const DarkFloat = () => (
  <button className={Float({ isDark: true })}>
    <GiSwordAltar size={25} />
  </button>
);
DarkFloat.parameters = {
  backgrounds: { default: 'dark' },
};

export const DarkFloatMini = () => (
  <button className={Float({ type: 'mini', isDark: true })}>
    <GiSwordAltar size={20} />
  </button>
);
DarkFloatMini.parameters = {
  backgrounds: { default: 'dark' },
};

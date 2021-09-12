import { FluidContainer } from '../..';
import { TopBar } from '../..';

export default {
  title: 'Makinox-ui/TopBar',
  component: <nav />,
};

export const LightMode = () => (
  <nav className={TopBar()}>
    <section className={`flex justify-between items-center ${FluidContainer()}`}>
      <div>
        <span>leftChild</span>
      </div>
      <div>
        <span>centerChild</span>
      </div>
      <div>
        <span>rightChild</span>
      </div>
    </section>
  </nav>
);

export const WithDark = () => (
  <nav className={TopBar({ isDark: 'true' })}>
    <section className={`flex justify-between items-center ${FluidContainer()}`}>
      <div>
        <span>leftChild</span>
      </div>
      <div>
        <span>centerChild</span>
      </div>
      <div>
        <span>rightChild</span>
      </div>
    </section>
  </nav>
);
WithDark.parameters = {
  backgrounds: { default: 'dark' },
};

import { Spinner } from '../..';

export default {
  title: 'Makinox-ui/Spinner',
  component: <nav />,
};

export const LightMode = () => (
  <section className="flex justify-center items-center" style={{ height: '100vh' }}>
    <div className={Spinner()} />
  </section>
);

export const WithDark = () => (
  <section className="flex justify-center items-center" style={{ height: '100vh' }}>
    <div className={Spinner()} />
  </section>
);
WithDark.parameters = {
  backgrounds: { default: 'dark' },
};

import { TopBar } from '../../';
import { TopBarType } from '../../types';

export default {
  title: 'Example/TopBar',
  component: TopBar,
};

const Template = (args: JSX.IntrinsicAttributes & TopBarType) => (
  <TopBar {...args} leftChild={<span>leftChild</span>} centerChild={<span>centerChild</span>} rightChild={<span>rightChild</span>} />
);

export const WithChild = Template.bind({});

import { Story } from '@storybook/react/types-6-0';
import { TopBarType } from '../../types';
import { TopBar } from '../../';

export default {
  title: 'Example/TopBar',
  component: TopBar,
};

export const WithChild: Story<TopBarType> = (props: TopBarType) => <TopBar {...props} />;
WithChild.args = {
  leftChild: <span>leftChild</span>,
  centerChild: <span>centerChild</span>,
  rightChild: <span>rightChild</span>,
};

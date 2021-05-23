import { Story } from '@storybook/react/types-6-0';
import { DropdownType } from '../../types';
import { Dropdown } from '../../';

export default {
  title: 'Makinox-ui/Dropdown',
  component: Dropdown,
};

export const Default: Story<DropdownType> = (props: DropdownType) => <Dropdown {...props} />;
Default.args = {
  Item: <span>Item</span>,
  HiddenItems: [<span>Item</span>, <span>Item</span>, <span>Item</span>],
};

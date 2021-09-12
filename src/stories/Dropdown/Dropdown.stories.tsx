import { DropdownContainer, DropdownHiden, DropdownItem } from '../../';

export default {
  title: 'Makinox-ui/Dropdown',
  component: <div />,
};

export const Default = () => (
  <div className={DropdownContainer()}>
    <span className={DropdownItem()}>Hover to see</span>
    <div className={DropdownHiden()}>
      <span>Item</span>
      <span>Item</span>
      <span>Item</span>
    </div>
  </div>
);

export const DarkDefault = () => (
  <div className={DropdownContainer({ isDark: true })}>
    <span className={DropdownItem({ isDark: true })}>Hover to see</span>
    <div className={DropdownHiden()}>
      <span>Item</span>
      <span>Item</span>
      <span>Item</span>
    </div>
  </div>
);
DarkDefault.parameters = {
  backgrounds: { default: 'dark' },
};

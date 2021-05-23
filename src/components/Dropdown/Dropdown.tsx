import { DropdownContainer, DropdownHiden, DropdownItem } from './Dropdown.styles';
import { DropdownType } from './Dropdown.types';

function Dropdown({ Item, HiddenItems, ...props }: DropdownType) {
  return (
    <DropdownContainer {...props}>
      <DropdownItem>{Item}</DropdownItem>
      <DropdownHiden>{HiddenItems}</DropdownHiden>
    </DropdownContainer>
  );
}

export default Dropdown;

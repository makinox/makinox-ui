import { FluidContainer } from '..';
import { TopBarNav } from './TopBar.styles';
import { TopBarType } from './TopBar.types';

function TopBar({ leftChild, centerChild, rightChild, ...props }: TopBarType) {
  return (
    <TopBarNav {...props}>
      <FluidContainer className="flex justify-between items-center">
        <div>{leftChild}</div>
        <div>{centerChild}</div>
        <div>{rightChild}</div>
      </FluidContainer>
    </TopBarNav>
  );
}

export default TopBar;

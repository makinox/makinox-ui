import FluidContainer from '../FluidContainer/FluidContainer.styles';
import { TopBarNav } from './TopBar.styles';
import { TopBarType } from './TopBar.types';

function TopBar({ leftChild, centerChild, rightChild, ...props }: TopBarType) {
  return (
    <TopBarNav {...props}>
      <section className={`flex justify-between items-center ${FluidContainer()}`}>
        <div>{leftChild}</div>
        <div>{centerChild}</div>
        <div>{rightChild}</div>
      </section>
    </TopBarNav>
  );
}

export default TopBar;

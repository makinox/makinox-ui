import { FluidContainerStyles } from './FluidContainer.styles';
import { FluidContainerType } from './FluidContainer.types';

function FluidContainer({ children, className }: FluidContainerType) {
  return <FluidContainerStyles className={className}>{children}</FluidContainerStyles>;
}

export default FluidContainer;

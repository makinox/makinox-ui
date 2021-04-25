import { FluidContainerStyles } from './FluidContainer.styles';
import { FluidContainerType } from './FluidContainer.types';

function FluidContainer({ children, className, ...props }: FluidContainerType) {
  return (
    <FluidContainerStyles {...props} className={className}>
      {children}
    </FluidContainerStyles>
  );
}

export default FluidContainer;

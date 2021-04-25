import { FloatDefault, FloatMini } from './Float.styles';
import { FloatType } from './Float.types';

function Float({ icon, use, ...props }: FloatType) {
  switch (use) {
    case 'Default':
      return <FloatDefault {...props}>{icon}</FloatDefault>;
    case 'Mini':
      return <FloatMini {...props}>{icon}</FloatMini>;
    default:
      return <FloatDefault {...props}>{icon}</FloatDefault>;
  }
}

export default Float;

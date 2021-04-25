import { FloatDefault, FloatMini } from './Float.styles';
import { FloatType } from './Float.types';

function Float({ icon, use }: FloatType) {
  switch (use) {
    case 'Default':
      return <FloatDefault>{icon}</FloatDefault>;
    case 'Mini':
      return <FloatMini>{icon}</FloatMini>;
    default:
      return <FloatDefault>{icon}</FloatDefault>;
  }
}

export default Float;

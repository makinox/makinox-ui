import { Float } from '../..';
import { FloatType } from '../../types';

export default {
  title: 'Example/Float',
  component: Float,
};

const TemplateIcon = (args: JSX.IntrinsicAttributes & FloatType) => <Float {...args} icon={<span>🙂</span>} />;

export const DefaultIcon: { args: FloatType } | any = TemplateIcon.bind({});
DefaultIcon.args = {
  use: 'Default',
};

export const MiniIcon: { args: FloatType } | any = TemplateIcon.bind({});
MiniIcon.args = {
  use: 'Mini',
};

import React from 'react';

import { HelloWorld } from '../../components';

export default {
  title: 'Example/HelloWorld',
  component: HelloWorld,
};

const Template = (args) => <HelloWorld {...args} />;

export const WithMessage = Template.bind({});
WithMessage.args = {
  message: 'Hola mundo',
};

export const WithoutMessage = Template.bind({});
WithoutMessage.args = {};

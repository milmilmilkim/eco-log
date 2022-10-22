import { ComponentStory, ComponentMeta } from '@storybook/react';

import Input from '../components/Form/Input';

export default {
  title: 'Form/Input',
  component: Input,
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Default = Template.bind({});

Default.args = {
  placeholder: '목표했던 실천이나 아쉬웠던 점을 입력하세요',
};

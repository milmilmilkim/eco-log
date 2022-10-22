import { ComponentStory, ComponentMeta } from '@storybook/react';

import Tag from '../components/Tag';

export default {
  title: 'Common/Tag',
  component: Tag,
} as ComponentMeta<typeof Tag>;

const Template: ComponentStory<typeof Tag> = (args) => <Tag {...args} />;

export const Default = Template.bind({});

Default.args = {
  children: '안녕!!',
};

import { ComponentStory, ComponentMeta } from '@storybook/react';
import Section from '../components/Section';
import { Default as TagDefault } from './Tag.stories';
import { TagProps } from '../typing/common';

export default {
  title: 'Common/Section',
  component: Section,
  //   subcomponents: { Tag },
} as ComponentMeta<typeof Section>;

const Template: ComponentStory<typeof Section> = ({ children, ...args }) => (
  <Section {...args}>
    <TagDefault {...(TagDefault.args as TagProps)} />
  </Section>
);

export const Default = Template.bind({});
export const InsertTag = Template.bind({});

InsertTag.args = {
  title: '큰 제목',
};

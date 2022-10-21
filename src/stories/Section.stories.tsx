import { ComponentStory, ComponentMeta } from '@storybook/react';
import Section from '../components/Section';
import { Default as TagDefault } from './Tag.stories';

export default {
  title: 'Common/Section',
  component: Section,
  //   subcomponents: { Tag },
} as ComponentMeta<typeof Section>;

type TagProps = {
  data: String[];
};

const Template: ComponentStory<typeof Section> = ({ children, ...args }) => (
  <Section {...args}>
    <TagDefault {...(TagDefault.args as TagProps)} />
  </Section>
);

export const Default = Template.bind({});
export const InsertTag = Template.bind({});

Default.args = {
  title: '제목제목제목',
};

InsertTag.args = {
  title: '큰 제목',
};

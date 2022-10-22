import { ComponentStory, ComponentMeta } from '@storybook/react';
import Record from '../components/Main/Record';
// import { Default as TagDefault } from './Tag.stories';
// import { TagProps } from '../typing/common';

export default {
  title: 'Common/Record',
  component: Record,
} as ComponentMeta<typeof Record>;

const Template: ComponentStory<typeof Record> = ({ ...args }) => <Record {...args} />;

export const Default = Template.bind({});

Default.args = {
  userInfo: {
    userId: 1,
    userNickname: '지나가던 콩고물',
    selfIntroduce: '안녕하세요',
  },
  comment: '잘하자 잘해!',
  behaviorList: ['뭔가함'],
  customBehaviorList: ['진짜실천함'],
  heartCount: 0,
};

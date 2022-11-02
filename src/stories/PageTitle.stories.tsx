import { ComponentStory, ComponentMeta } from '@storybook/react';
import PageTitle from '../components/PageTitle';
import { withRouter } from 'storybook-addon-react-router-v6';

export default {
  title: 'Common/PageTitle',
  component: PageTitle,
  decorators: [withRouter],

  parameters: {
    reactRouter: {
      routePath: '/',
    },
  },
} as ComponentMeta<typeof PageTitle>;
const Template: ComponentStory<typeof PageTitle> = ({ children, ...args }) => <PageTitle {...args}>{children}</PageTitle>;

export const Default = Template.bind({});

Default.args = {
  title: '제목',
  children: '저장',
  prevButton: true,
};

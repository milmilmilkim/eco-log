import styled from 'styled-components';

import { TagProps, Behavior } from '../typing/common';

// const isBehavior = (value: any): value is Behavior => true;

const Tag: React.FC<TagProps> = ({ text, backgroundColor, border, hover }) => {
  return (
    <MyTag backgroundColor={backgroundColor} border={border}>
      {text}
    </MyTag>
  );
};

interface Props {
  backgroundColor?: String;
  theme?: 'Primary' | 'Select';
  border?: Boolean;
  hover?: Boolean;
}

const MyTag = styled.div<Props | any>`
  margin: 5px;
  padding: 5px 7px;
  background-color: ${(props) => props.backgroundColor || props.theme.color.backgroundColor};
  color: #333333;
  border-radius: 10px;
  display: inline-block;
  border: ${(props) => (props.border ? 'solid 1px' + props.theme.color.borderColor + ';' : '')};
  cursor: pointer;

  &.active {
    background-color: ${(props) => props.theme.color.backgroundColor};
  }
`;

export default Tag;

import styled from 'styled-components';

import { TagProps } from '../typing/common';


const Tag: React.FC<TagProps> = ({ children, backgroundColor, border, className, onClick }) => {
  return (
    <MyTag onClick={onClick} backgroundColor={backgroundColor} border={border} className={className}>
      {children}
    </MyTag>
  );
};

interface Props {
  backgroundColor?: String;
  border?: Boolean;
  hover?: Boolean;
}

const MyTag = styled.li<Props | any>`
  margin: 5px;
  padding: 5px 7px;
  background-color: ${(props) => props.backgroundColor || props.theme.color.backgroundColor};
  color: #333333;
  border-radius: 15px;
  display: inline-block;
  border: ${(props) => (props.border ? 'solid 1px' + props.theme.color.borderColor + ';' : '')};
  cursor: pointer;

  &.active {
    background-color: ${(props) => props.theme.color.backgroundColor} !important;
    border-color: #fff;
  }

  &.plus {
    /* background-color: ${(props) => props.theme.color.backgroundColor};
    border: none; */
    background-color: #fff;
    border: 1px solid ${(props) => props.theme.color.secondaryColor};

    &::before {
      content: '+';
      font-weight: 600;
      width: 50px;
      height: 50px;
      position: relative;
    }
  }
`;

export default Tag;

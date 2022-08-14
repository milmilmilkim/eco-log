import React from 'react';
import styled from 'styled-components';

type ContainrProps = {
  children: JSX.Element;
};

const Container: React.FC<ContainrProps> = ({ children }) => {
  return <StyledContainer>{children}</StyledContainer>;
};

const StyledContainer = styled.div`
  width: 500px;
  min-height: 100vh;
  margin: auto;
  background: #ffffff;
  box-sizing: border-box;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default Container;

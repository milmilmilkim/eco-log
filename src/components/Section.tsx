import React from 'react';
import styled from 'styled-components';

type SectionProps = {
  title: String;
  children?: JSX.Element | String;
};

const Section: React.FC<SectionProps> = ({ children, title }) => {
  return (
    <StyledSection>
      <h2>{title}</h2>
      {children}
    </StyledSection>
  );
};

const StyledSection = styled.div`
  width: 100%;
  box-sizing: border-box;
  padding: 0 20px;
  line-height: 1.5;
  clear: both;
  h2 {
    font-size: 1rem;
    font-weight: 700;
    margin-bottom: 5px;
    margin-top: 10px;
  }
`;

export default Section;

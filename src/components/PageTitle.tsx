import styled from 'styled-components';
// import { useState } from 'react';

type PageTitleProps = {
  title: String;
  children?: JSX.Element | String;
};

const PageTitle: React.FC<PageTitleProps> = ({ title, children }) => {
  return (
    <TitleContainer>
      <div className="left"></div>
      <h1>{title}</h1>
      <div className="rightTop">{children}</div>
    </TitleContainer>
  );
};

const TitleContainer = styled.nav`
  position: sticky;
  top: 0;
  height: 45px;
  background-color: #fff;
  z-index: 999;
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 10px;

  .left {
    flex: 1;
  }
  h1 {
    font-size: 1rem;
    font-weight: 700;
    flex: 1;
    text-align: center;
  }

  .rightTop {
    margin-left: auto;
    flex: 1;
    text-align: right;
    box-sizing: border-box;
    font-weight: 700;
    cursor: pointer;
  }
`;

export default PageTitle;

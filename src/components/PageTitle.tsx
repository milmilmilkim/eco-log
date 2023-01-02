import styled from 'styled-components';
// import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

type PageTitleProps = {
  title: String;
  children?: JSX.Element | String;
  prevButton?: Boolean;
  buttonPath?: string;
};

const PageTitle: React.FC<PageTitleProps> = ({
  title,
  children,
  prevButton,
  buttonPath,
}) => {
  const Navigate = useNavigate();
  const clickButton = (path?: string) => {
    if (path) {
      Navigate(path);
    } else {
      Navigate(-1);
    }
  };

  return (
    <TitleContainer>
      {prevButton ? (
        <div onClick={() => clickButton(buttonPath)} className='left'>
          <i className='fa fa-arrow-left' aria-hidden='true'></i>
        </div>
      ) : (
        <div className='left'></div>
      )}
      <h1>{title}</h1>
      <div className='rightTop'>{children}</div>
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
    cursor: pointer;
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

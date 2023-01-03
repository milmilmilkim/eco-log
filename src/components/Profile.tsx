import React from 'react';
import styled from 'styled-components';
import { UserInfo } from '../typing/common';

const Section: React.FC<React.PropsWithChildren<UserInfo>> = ({ userNickname, nickName, selfIntroduce, children }) => {

  const myNickname = userNickname || nickName || '-';

  return (
    <StyledProfile>
      <div className="circle">{myNickname?.substring(0, 1)}</div>
      <div className="meta">
        <h3>{myNickname}</h3>
        <p>{selfIntroduce}</p>
      </div>
      <div className="inner">
        {children}
      </div>
    </StyledProfile>
  );
};

const StyledProfile = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  line-height: 1.2;
  padding: 20px;

  .circle {
    border-radius: 50%;
    border: solid 1px #eee;
    width: 33px;
    height: 33px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .meta {
    margin-left: 10px;
    font-size: 0.8rem;

    h3 {
      font-weight: 700;
    }
  }

  .inner {
    margin-left: auto;
  }
`;

export default Section;

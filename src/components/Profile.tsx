import React from 'react';
import styled from 'styled-components';
import { UserInfo } from '../typing/common';

const Section: React.FC<UserInfo> = ({ userNickname, selfIntroduce }) => {
  return (
    <StyledProfile>
      <div className="circle">{userNickname.substring(0, 1)}</div>
      <div className="meta">
        <h3>{userNickname}</h3>
        <p>{selfIntroduce}</p>
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
`;

export default Section;

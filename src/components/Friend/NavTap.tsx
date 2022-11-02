import styled from 'styled-components';
import React, { Dispatch, SetStateAction } from 'react';

type NavTapProps = {
  status: String;
  setStatus: Dispatch<SetStateAction<String>>;
};
const NavTap: React.FC<NavTapProps> = ({ status, setStatus }) => {
  return (
    <StyledTap>
      <div onClick={() => setStatus('follower')} className={'tap' + (status === 'follower' ? ' active' : '')}>
        팔로워
      </div>
      <div onClick={() => setStatus('following')} className={'tap' + (status === 'following' ? ' active' : '')}>
        팔로잉
      </div>
    </StyledTap>
  );
};

const StyledTap = styled.div`
  width: 100%;
  display: flex;
  margin-top: 10px;

  .tap {
    text-decoration: none;
    color: #000;
    width: 50%;
    display: flex;
    cursor: pointer;
    justify-content: center;
    align-items: center;
    padding-bottom: 10px;
    border-bottom: 1px solid ${(props) => props.theme.color.borderColor};

    &.active {
      border-bottom: 3px solid ${(props) => props.theme.color.primaryColor};
    }
  }
`;

export default NavTap;

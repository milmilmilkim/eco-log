import React from 'react';
import { Badge } from '../../typing/common';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

interface BadgeItemProps {
  badge: Badge;
  isActive: boolean;
}

const BadgeItem: React.FC<BadgeItemProps> = ({ badge, isActive }) => {
  return (
    <StyledItem>
      {isActive ? (
        <NavLink to={`/badge/${badge.index}`}>
          <img src={badge.src} alt={badge.name} className={isActive ? 'use' : ''} />
        </NavLink>
      ) : (
        <img src={badge.src} alt={badge.name} />
      )}
    </StyledItem>
  );
};

const StyledItem = styled.div`
  background-color: ${(props) => props.theme.color.backgroundColor};
  border-radius: 15px;
  width: 100%;
  height: 100%;
  display: block;
  padding: 5px;
  cursor: default;
  border: 1px solid #fff;

  a {
    display: block;
    width: 100%;
    height: 100%;
  }

  &:has(.active) {
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }

  img {
    opacity: 0.2;

    &.use {
      opacity: 1;
      cursor: pointer;
    }
  }
`;

export default BadgeItem;

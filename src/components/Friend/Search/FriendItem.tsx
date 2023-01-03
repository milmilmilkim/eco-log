import Section from '../../Section';
import Profile from '../../Profile';
import Tag from '../../Tag';
import styled from 'styled-components';
import { FriendItem } from '../../../typing/common';
import { Link } from 'react-router-dom';

const FriendItemComponent = (props: React.PropsWithChildren<FriendItem>) => {
  const { userSummary } = props;

  return (
    <StyledRecord>
      <Link to={`/friend/${props.userId}`}>
        <Profile {...props} />
      </Link>
      <Section title='오늘의 실천' />
      <ul>
        {userSummary.map((item, index) => {
          if (item.name?.trim() !== '') {
            return <Tag key={index}>{item.name}</Tag>;
          }
          return null;
        })}
      </ul>
    </StyledRecord>
  );
};

const StyledRecord = styled.div`
  border: solid 1px #83838365;
  border-left: solid 2px ${(props) => props.theme.color.lightColor};

  box-sizing: border-box;
  width: 90%;
  margin-top: 30px;
  padding-bottom: 20px;
  font-size: 0.8rem;

  ul {
    margin-left: 15px;
  }

  hr {
    margin: 10px 20px;
  }
`;

export default FriendItemComponent;

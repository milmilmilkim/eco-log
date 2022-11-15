import Section from '../Section';
import Profile from '../Profile';
import Tag from '../Tag';
import styled from 'styled-components';
import { useState } from 'react';
import { Card } from '../../typing/common';
import axios from '../../config/Axios';

const Record: React.FC<Card> = ({
  postId,
  userInfo,
  comment,
  behaviorList,
  customBehaviorList,
  heartCount,
  alreadyHeart,
}) => {
  const [heart, setHeart] = useState(heartCount);
  const mergedBehaviorList: String[] = [...behaviorList, ...(customBehaviorList as [])];
  const [isActive, setIsActive] = useState<Boolean>(false);
  const clickHeart = async () => {
    setIsActive(true);
    setHeart(Number(heartCount) + 1);
    await axios.post('/api/post/heart', {
      targetPostId: postId,
    });
  };

  const cancelHeart = async () => {
    setIsActive(false);
    setHeart(Number(heart) - 1);
    await axios.delete('/api/post/heart', {
      data: {
        targetPostId: postId,
      },
    });
  };

  return (
    <StyledRecord>
      <Profile {...userInfo} />
      <Section title="오늘의 실천" />
      <ul>
        {mergedBehaviorList.map((item, index) => {
          if (item.trim() !== '') {
            return <Tag key={index}>{item}</Tag>;
          } else {
            return null;
          }
        })}
      </ul>
      <Section title="오늘의 한마디">{comment}</Section>
      <div>
        <hr />
        <span className="like">
          {isActive || alreadyHeart ? (
            <div className={`heart active`} onClick={cancelHeart}>
              <i className="fa fa-heart" aria-hidden="true"></i>
            </div>
          ) : (
            <div className={`heart ${isActive ? 'active' : ''}`} onClick={clickHeart}>
              <i className="fa fa-heart" aria-hidden="true"></i>
            </div>
          )}
          {heart.toString()}
        </span>
      </div>
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

  .like {
    margin-left: 20px;
    height: 20px;
    display: flex;
    align-items: center;

    .heart {
      cursor: pointer;
      margin-right: 5px;

      &:hover {
        color: ${(props) => props.theme.color.primaryColor};
      }
      &.active {
        color: ${(props) => props.theme.color.primaryColor};
      }

      &.click {
      }
    }
  }
`;

export default Record;

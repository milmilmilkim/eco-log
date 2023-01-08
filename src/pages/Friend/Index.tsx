import PageTitle from '../../components/PageTitle';
import NavTap from '../../components/Friend/NavTap';
import { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import axios from '../../config/Axios';
import { UserInfo } from '../../typing/common';
import styled from 'styled-components';
import Profile from '../../components/Profile';
import { ReactComponent as OptionButton } from '../../assets/svg/Vector.svg';

const Friend = () => {
  const [status, setStatus] = useState<String>('follower');
  const [isUnfollowButtonShow, setIsUnfollowButtonShow] = useState<boolean[] | null>(null);
  const [isCancelFollowerButtonShow, setIsCancelFollowerButtonShow] = useState<boolean[] | null>(null);
  const [friendList, setFriendList] = useState<UserInfo[] | null>(null);

  const getFriend = useCallback(async () => {
    const { data } = await axios(`/api/user/${status}`);

    setFriendList(data);
    setIsUnfollowButtonShow(new Array(data?.length).fill(false));
    setIsCancelFollowerButtonShow(new Array(data?.length).fill(false));
  }, [status]);

  useEffect(() => {
    getFriend();
  }, [status, getFriend]);

  const toggleUnfollowButton = (index: number) => {
    const nextArray = [...isUnfollowButtonShow!];
    nextArray[index] = !nextArray[index];
    setIsUnfollowButtonShow(nextArray);
  };

  const toggleCancelFollowerButton = (index: number) => {
    const nextArray = [...isUnfollowButtonShow!];
    nextArray[index] = !nextArray[index];
    setIsCancelFollowerButtonShow(nextArray);
  };
  const unfollowFriend = async (userId: Number, buttonIndex: number) => {
    try {
      await axios.delete('/api/user/follow', {
        data: {
          targetId: userId,
        },
      });

      const nextFriendList = friendList!.filter((friend) => friend !== friendList![buttonIndex]);
      setFriendList(nextFriendList);
    } catch (err) {
      console.error(err);
    }
    toggleUnfollowButton(buttonIndex);
  };

  const cancelFollower = async (userId: Number, buttonIndex: number) => {
    try {
      await axios.delete('/api/user/follower', {
        data: {
          targetId: userId,
        },
      });

      const nextFriendList = friendList!.filter((friend) => friend !== friendList![buttonIndex]);
      setFriendList(nextFriendList);
    } catch (err) {
      console.error(err);
    }
    toggleCancelFollowerButton(buttonIndex);
  };

  return (
    <>
      <PageTitle title="동료 목록" prevButton>
        <Link to="/friend/search">
          <i className="fa fa-search" aria-hidden="true"></i>
        </Link>
      </PageTitle>
      <NavTap status={status} setStatus={setStatus} />
      <FriendList>
        {friendList &&
          (friendList.length > 0 ? (
            <>
              {friendList.map((friend: UserInfo, index: number) => (
                <Profile {...friend} path={`/friend/${friend.userId}`} key={index}>
                  {status === 'following' && (
                    <div className="option-button-container" onClick={() => toggleUnfollowButton(index)}>
                      <OptionButton />
                    </div>
                  )}
                  {status === 'follower' && (
                    <div className="option-button-container" onClick={() => toggleCancelFollowerButton(index)}>
                      <OptionButton />
                    </div>
                  )}

                  {isUnfollowButtonShow![index] && <UnfollowButton onClick={() => unfollowFriend(friend.userId, index)}>언팔로우</UnfollowButton>}
                  {isCancelFollowerButtonShow![index] && <UnfollowButton onClick={() => cancelFollower(friend.userId, index)}>팔로워 삭제</UnfollowButton>}
                </Profile>
              ))}
            </>
          ) : (
            <div className="no-data">
              <span>동료가 없습니다</span>
            </div>
          ))}
      </FriendList>
    </>
  );
};

const FriendList = styled.div`
  width: 100%;

  .no-data {
    width: 100%;
    text-align: center;
    margin-top: 50px;
  }

  .option-button-container {
    cursor: pointer;
    padding: 5px;
    background-color: #fff;
  }
`;

const UnfollowButton = styled.button`
  background-color: #fff;
  position: absolute;
  top: 30px;
  right: 0;
  width: 100px;
  cursor: pointer;
  border-radius: 10px;
  padding: 5px 0;
  border: 1px solid ${(props) => props.theme.color.borderColor};
`;
export default Friend;

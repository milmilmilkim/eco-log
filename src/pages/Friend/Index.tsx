import PageTitle from '../../components/PageTitle';
import NavTap from '../../components/Friend/NavTap';
import { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import axios from '../../config/Axios';
import { UserInfo } from '../../typing/common';

const Friend = () => {
  const [status, setStatus] = useState<String>('follower');
  const [friendList, setFriendList] = useState<UserInfo[]|null>(null);


  const getFriend = useCallback( async() => {
    const {data} = await axios(`/api/user/${status}`);
    setFriendList(data);
  }, [status])

  useEffect(() => {
    getFriend();
  }, [status, getFriend])

  return (
    <>
      <PageTitle title="동료 목록" prevButton>
        <Link to="/friend/search">
          <i className="fa fa-search" aria-hidden="true"></i>
        </Link>
      </PageTitle>
      <NavTap status={status} setStatus={setStatus} />
      {friendList &&
        JSON.stringify(friendList)
      }
    </>
  );
};

export default Friend;

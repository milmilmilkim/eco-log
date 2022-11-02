import PageTitle from '../../components/PageTitle';
import NavTap from '../../components/Friend/NavTap';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Friend = () => {
  const [status, setStatus] = useState<String>('follower');

  return (
    <>
      <PageTitle title="동료 목록" prevButton>
        <Link to="/friend/search">
          <i className="fa fa-search" aria-hidden="true"></i>
        </Link>
      </PageTitle>
      <NavTap status={status} setStatus={setStatus} />
    </>
  );
};

export default Friend;

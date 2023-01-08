import PageTitle from '../components/PageTitle';
import BadgeList from '../components/Badge/BadgeList';
// import { Outlet } from 'react-router-dom';

const Badge = () => {
  return (
    <>
      <PageTitle title="획득 뱃지" prevButton={true} buttonPath="/mypage"></PageTitle>
      <BadgeList />

      {/* <Outlet /> */}
    </>
  );
};

export default Badge;

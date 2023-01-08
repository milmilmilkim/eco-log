import { Routes, Route } from 'react-router-dom';

/* 레이아웃 */
import Container from '../components/Layout/Container';

/* 페이지 */
import Login from '../pages/Login';
import Main from '../pages/Main';
import MyPage from '../pages/MyPage/MyPage';
import Edit from '../pages/MyPage/Edit';
import Write from '../pages/Write';
import Friend from '../pages/Friend/Index';
import Stat from '../pages/Friend/Stat';
/* 로그인 */
import Oauth from '../pages/Oauth';
import Search from '../pages/Friend/Search';

import NotFound from '../pages/NotFound';

const Router = () => {
  return (
    <Routes>
      <Route element={<Container />}>
        {/* 메인 */}
        <Route path="/" element={<Main />} />
        <Route path="/main" element={<Main />} />
        {/* 로그인 */}
        <Route path="/oauth" element={<Oauth />} />
        <Route path="/login" element={<Login />} />
        {/* 글쓰기 */}
        <Route path="/write" element={<Write />} />
        {/* 마이페이지 */}
        <Route path="mypage">
          <Route index element={<MyPage />} />
          <Route path="edit" element={<Edit />} />
        </Route>
        {/* 실천현황 */}
        <Route path="/me" element={<Stat />} />
        {/* 동료 */}
        <Route path="friend">
          <Route index element={<Friend />} />
          <Route path=":userId" element={<Stat />} />
          <Route path="search" element={<Search />} />
        </Route>
        {/*404*/}
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default Router;

import { Routes, Route } from 'react-router-dom';

/* 레이아웃 */
import Container from '../components/Layout/Container';
/* 페이지 */
import Login from '../pages/Login';
import Main from '../pages/Main';
import MyPage from '../pages/MyPage/MyPage';
import Edit from '../pages/MyPage/Edit';

const Router = () => {
  return (
    <Routes>
      <Route element={<Container />}>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/main" element={<Main />} />
        <Route path="mypage">
          <Route index element={<MyPage />} />
          <Route path="edit" element={<Edit />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default Router;

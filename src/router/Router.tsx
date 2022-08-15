import { Routes, Route } from 'react-router-dom';

/* 레이아웃 */
import Container from '../components/Layout/Container';
/* 페이지 */
import Login from '../pages/Login';
import Main from '../pages/Main';

const Router = () => {
  return (
    <Routes>
      <Route element={<Container />}>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/main" element={<Main />} />
      </Route>
    </Routes>
  );
};

export default Router;

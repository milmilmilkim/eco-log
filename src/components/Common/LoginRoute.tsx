import { Navigate, Outlet } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { recoilLoginState } from '../../state/recoilLoginState';

const PrivateRoute = () => {
  const [isLogin] = useRecoilState(recoilLoginState);

  if (isLogin) {
    // not logged in so redirect to login page with the return url
    return <Navigate to="/main" />;
  }
  // authorized so return child components
  return <Outlet />;
};

export default PrivateRoute;

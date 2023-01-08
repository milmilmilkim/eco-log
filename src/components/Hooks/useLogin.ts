import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { recoilLoginState, recoilMyProfileState } from '../../state/recoilLoginState';
import axios from '../../config/Axios';

const useLogout = () => {
  const navigate = useNavigate();

  const [, setIsLogin] = useRecoilState(recoilLoginState);
  const [, setMyProfile] = useRecoilState(recoilMyProfileState);

  const logout = () => {
    setIsLogin(false);
    setMyProfile({
      userId: '',
      userNickname: '',
    });
    window.localStorage.removeItem('token');
    navigate('/login');
  };

  const login = async (token: string) => {
    window.localStorage.setItem('token', token);

    try {
      //내 정보 조회
      const { data: profile } = await axios.get('/api/me');
      setIsLogin(true);
      setMyProfile(profile);
    } catch (err) {
      console.error(err);
    } finally {
      navigate('/main');
    }
  };

  return { login, logout };
};

export default useLogout;

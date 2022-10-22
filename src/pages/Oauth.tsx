import { useEffect } from 'react';
import axios from '../config/Axios';
import { useNavigate } from 'react-router-dom';

//리코일
import { useRecoilState } from 'recoil';
import { recoilMyProfileState, recoilLoginState } from '../state/recoilLoginState';

const Auth = () => {
  const navigate = useNavigate();

  const [, setIsLogin] = useRecoilState(recoilLoginState);
  const [, setMyProfile] = useRecoilState(recoilMyProfileState);

  useEffect(() => {
    (async () => {
      const pathname = window.location.search;
      const code = pathname.split('=')[1];
      //url의 인가코드
      try {
        //토큰 받아옴
        const res = await axios.get(`/api/oauth/kakaotoken?code=${code}`);
        const token = res.data.Authorization;
        window.localStorage.setItem('token', token);

        //내 정보 조회
        const { data: profile } = await axios.get('/api/me');
        setIsLogin(true);
        setMyProfile(profile);
        navigate('/main');
      } catch (e) {
        navigate('/main');
      }
    })();
  }, [navigate, setIsLogin, setMyProfile]);

  return <>로그인...</>;
};

export default Auth;

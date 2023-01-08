import { useEffect } from 'react';
import axios from '../config/Axios';
import useLogin from '../Hooks/useLogin';

const Auth = () => {
  const { login } = useLogin();

  useEffect(() => {
    (async () => {
      const pathname = window.location.search;
      const code = pathname.split('=')[1];
      //url의 인가코드
      try {
        //토큰 받아옴
        const res = await axios.get(`/api/oauth/kakaotoken?code=${code}`);
        const token = res.data.Authorization;

        await login(token);
      } catch (err) {
        console.error(err);
      }
    })();
  }, [login]);

  return <>로그인...</>;
};

export default Auth;

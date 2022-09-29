import { useEffect, useState } from 'react';
import axios from '../config/Axios';
import { useNavigate } from 'react-router-dom';

const Auth = () => {
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      const pathname = window.location.search;
      const code = pathname.split('=')[1];
      //url의 인가코드
      try {
        const res = await axios.get(`/api/oauth/kakaotoken?code=${code}`);
        const token = res.data.Authorization;
        window.localStorage.setItem('token', token);
        navigate('/main');
      } catch (e) {
        console.error(e);
        navigate('/main');
      }
    })();
  }, []);

  return <>로그인...</>;
};

export default Auth;

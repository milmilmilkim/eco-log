import { useEffect, useCallback } from 'react';
import axios from '../config/Axios';
import useLogin from '../Hooks/useLogin';
import { Platform } from '../typing/common';

const Auth = () => {
  const { login } = useLogin();

  const getToken = useCallback(
    async (code: string) => {
      const platformKey: Platform = Number(
        window.localStorage.getItem('aPlatform')
      ) as Platform;

      const platformName = Platform[platformKey].toLowerCase();

      try {
        let params = {};

        if (platformName === 'naver') {
          params = {
            state: encodeURI(process.env.REACT_APP_NAVER_STATE as string),
          };
        }
        const res = await axios.get(
          `/api/oauth/${platformName}token?code=${code}`,
          params
        );
        const token = res.data.Authorization;

        await login(token);
      } catch (err) {
        console.error(err);
      }
    },
    [login]
  );

  useEffect(() => {
    (async () => {
      const pathname = window.location.search;
      const code = pathname.split('=')[1];
      try {
        getToken(code);
      } catch (err) {
        console.error(err);
      }
    })();
  }, [getToken]);

  return <>로그인...</>;
};

export default Auth;

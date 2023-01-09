import styled from 'styled-components';
import Logo from '../components/Common/Logo';
import { Platform } from '../typing/common';

export default function Login() {

  /** 공통 */
  const REDIRECT_URL = process.env.REACT_APP_REDIRECT_URI; // ~/oauth

  /** 네이버  */
  const NAVER_STATE = process.env.REACT_APP_NAVER_STATE;
  const NAVER_API_KEY = encodeURI(process.env.REACT_APP_NAVER_API_KEY as string);
  const NAVER_LOGIN_URL = `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${NAVER_API_KEY}&redirect_uri=${REDIRECT_URL}&state=${NAVER_STATE}`

  /** 카카오 */
  const KAKAO_API_KEY = process.env.REACT_APP_KAKAO_API_KEY;
  const KAKAO_LOGIN_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${KAKAO_API_KEY}&redirect_uri=${REDIRECT_URL}&response_type=code`;

  /** 구글 */
  const GOOGLE_API_KEY = process.env.REACT_APP_GOOGLE_API_KEY;
  const GOOGLE_LOGIN_SCOPE =
    'https://www.googleapis.com/auth/userinfo.email+https://www.googleapis.com/auth/userinfo.profile';
  const GOOGLE_LOGIN_URL = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${GOOGLE_API_KEY}&redirect_uri=${REDIRECT_URL}&type=kakao&response_type=code&scope=${GOOGLE_LOGIN_SCOPE}`;



  const oAuthLogin = (platform: Platform) => {
    window.localStorage.setItem('aPlatform', platform.toString());
    

    switch (platform) {
      case Platform.Kakao:
        window.location.href = KAKAO_LOGIN_URL;
        break;

      case Platform.Google:
        window.location.href = GOOGLE_LOGIN_URL;
        break;

      case Platform.Naver:
        window.location.href = NAVER_LOGIN_URL;
        break;
    }
  };

  return (
    <LoginContainer>
      <div className='inner'>
        <Logo />
        <h1>
          <span className='eco'>ECO</span> <span className='line'></span>{' '}
          <span className='log'>LOG</span>
        </h1>
        <div className='subscribe'>
          <p>
            함께 시작하는 작은 실천, <b>에코로그</b>
          </p>
        </div>
        <div className='button_container'>
        <button
            onClick={() => oAuthLogin(Platform.Naver)}
            className='naver'
          >
            네이버로 시작하기
          </button>
          <button className='kakao' onClick={() => oAuthLogin(Platform.Kakao)}>
            카카오로 시작하기
          </button>
          <button
            onClick={() => oAuthLogin(Platform.Google)}
            className='google'
          >
            구글로 시작하기
          </button>
        </div>
      </div>
    </LoginContainer>
  );
}

const LoginContainer = styled.div`
  .inner {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100vh;
    justify-content: space-between;
    align-items: center;
  }

  .logo {
    margin-top: 20%;
  }

  h1 {
    background-color: aliceblue;
    width: 300px;
    font-family: 'Noto Sans KR';
    font-style: normal;
    font-weight: 700;
    font-size: 3.25rem;
    line-height: 0px;
    text-align: center;
    position: relative;
    display: flex;
    justify-content: space-around;
  }

  h1 .line {
    width: 5rem;
    height: 0px;
    border: 3px solid #333333;
  }

  h1 .log {
  }

  .subscribe {
    width: 80%;
  }

  p {
    font-family: 'Noto Sans KR';
    font-style: normal;
    font-weight: 400;
    font-size: 1.2rem;
    line-height: 2;
    text-align: left;
    width: fit-content;
    border-top: 1px solid;
  }

  .button_container {
    bottom: 10px;
    text-align: center;
    margin-bottom: 15%;
  }

  button {
    margin: auto;
    width: 80%;
    height: 50px;
    border-radius: 10px;
    border: none;
    cursor: pointer;
    margin: 5px;
  }

  button.naver {
    background-color: #52ff00;
  }

  button.kakao {
    background: #fdeb00;
  }

  button.google {
    background: #f1f2f3;
    border-radius: 10px;
  }
`;

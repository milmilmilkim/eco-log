import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Logo from '../components/Common/Logo';

export default function Login() {
  const kakaoApiKey = process.env.REACT_APP_KAKAO_API_KEY;
  const redirectUri = process.env.REACT_APP_REDIRECT_URI;
  const kakaoLoginUrl = `https://kauth.kakao.com/oauth/authorize?client_id=${kakaoApiKey}&redirect_uri=${redirectUri}&response_type=code`;

  return (
    <LoginContainer>
      <div className="inner">
        <Logo />
        <h1>
          <span className="eco">ECO</span> <span className="line"></span> <span className="log">LOG</span>
        </h1>
        <div className="subscribe">
          <p>
            함께 시작하는 작은 실천, <b>에코로그</b>
          </p>
        </div>
        <div className="button_container">
          <Link to="/main">
            <button className="naver">네이버로 시작하기</button>
          </Link>
          <a href={kakaoLoginUrl}>
            <button className="kakao">카카오로 시작하기</button>
          </a>
          <Link to="/main">
            <button className="google">구글로 시작하기</button>
          </Link>
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

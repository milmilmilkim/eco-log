import PageTitle from '../../components/PageTitle';
import Section from '../../components/Section';
import Input from '../../components/Form/Input';
import Switch from '../../components/Form/Switch';
import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import TextButton from '../../components/Common/TextButton';

import axios from '../../config/Axios';
import { useEffect, useState } from 'react';

const Edit = () => {
  const navigate = useNavigate();

  type UserInfo = {
    userPostTotalCount: number;
    userSummary?: Array<any>;
    userNicname: string;
  };

  const [userInfo, setUserInfo] = useState<UserInfo | null>(null);

  const getMyProfile = async () => {
    try {
      const { data } = await axios.get('/api/user/profile');
      setUserInfo(data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getMyProfile();
  }, []);

  const profileSave: React.FormEventHandler<HTMLFormElement> = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { nickname, selfIntroduce, isPublic } = e.target as HTMLFormElement;
    console.log(nickname.value, selfIntroduce.value, isPublic.checked);

    try {
      await axios.post('/api/user/profile', {
        nickname: nickname.value,
        selfIntroduce: selfIntroduce.value,
      });
      console.log('Ok');
    } catch (err) {}
    navigate('/mypage');
  };

  return (
    <>
      {userInfo && (
        <form style={{ width: '100%' }} onSubmit={profileSave}>
          <PageTitle title="프로필 설정">
            <TextButton type="submit">저장</TextButton>
          </PageTitle>

          <Section title="이름">
            <Input name="nickname" placeholder="닉네임을 입력하세요" maxLength={10} defaultValue={userInfo.userNicname} />
          </Section>

          <Section title="자기소개">
            <Input name="selfIntroduce" placeholder="자기소개를 입력하세요" maxLength={100} />
          </Section>

          <Section title="공개 설정">
            <Switch name="isPublic" defaultChecked={false} label="추천 동료 목록에 나타나지 않아요" />
          </Section>
        </form>
      )}
    </>
  );
};

const Button = styled.button`
  color: ${(props) => props.theme.color.primaryColor};
  background-color: #fff;
  border: none;
  cursor: pointer;
  font-weight: 700;
  font-size: 0.9rem;
`;

export default Edit;

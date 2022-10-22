import PageTitle from '../../components/PageTitle';
import Section from '../../components/Section';
import Input from '../../components/Form/Input';
import Switch from '../../components/Form/Switch';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import TextButton from '../../components/Common/TextButton';

import axios from '../../config/Axios';
import { useEffect, useState, useCallback } from 'react';

import { useRecoilState } from 'recoil';
import { recoilMyProfileState } from '../../state/recoilLoginState';

import Swal from 'sweetalert2';

const Edit = () => {
  const navigate = useNavigate();

  type UserInfo = {
    userNickname: String;
    selfIntroduce?: String;
    public: Boolean;
  };

  const [userInfo, setUserInfo] = useState<UserInfo | null>(null);
  const [recoilMyProfile] = useRecoilState(recoilMyProfileState);

  const getMyProfile = useCallback(async () => {
    try {
      const {
        data: { userNickname, selfIntroduce, public: isPublic },
      } = await axios.get('/api/user/profile', {
        params: {
          targetId: recoilMyProfile.userId,
        },
      });
      setUserInfo({
        userNickname,
        public: isPublic,
        selfIntroduce,
      });
    } catch (err) {
      console.error(err);
    }
  }, [recoilMyProfile]);

  useEffect(() => {
    getMyProfile();
  }, [getMyProfile]);

  const profileSave: React.FormEventHandler<HTMLFormElement> = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { nickname, selfIntroduce, isPublic } = e.target as HTMLFormElement;
    console.log(nickname.value, selfIntroduce.value, isPublic.checked);

    try {
      await axios.post('/api/user/profile', {
        nickName: nickname.value,
        selfIntroduce: selfIntroduce.value,
        isPublic: isPublic.checked,
      });
      Swal.fire({
        title: 'Success!',
        text: '저장되었습니다',
        icon: 'success',
        confirmButtonText: 'ok',
      });
      navigate('/mypage');
    } catch (err) {
      navigate('/mypage');
    }
  };

  return (
    <>
      {userInfo && (
        <form style={{ width: '100%' }} onSubmit={profileSave}>
          <PageTitle title="프로필 설정" prevButton>
            <TextButton type="submit">저장</TextButton>
          </PageTitle>

          <Section title="이름">
            <Input name="nickname" placeholder="닉네임을 입력하세요" maxLength={10} defaultValue={userInfo.userNickname as string} />
          </Section>

          <Section title="자기소개">
            <Input name="selfIntroduce" defaultValue={(userInfo.selfIntroduce as string) || ''} placeholder="자기소개를 입력하세요" maxLength={100} />
          </Section>

          <Section title="공개 설정">
            <Switch name="isPublic" defaultChecked={userInfo.public as boolean} label="추천 동료 목록에 나타나지 않아요" />
          </Section>
        </form>
      )}
    </>
  );
};

export default Edit;

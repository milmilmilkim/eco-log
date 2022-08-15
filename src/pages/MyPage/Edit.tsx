import PageTitle from '../../components/PageTitle';
import Section from '../../components/Section';
import Input from '../../components/Form/Input';
import Switch from '../../components/Form/Switch';
import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const Edit = () => {
  const navigate = useNavigate();
  const profileSave: React.FormEventHandler<HTMLFormElement> = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { nickname, bio, isPublic } = e.target as HTMLFormElement;
    console.log(nickname.value, bio.value, isPublic.checked);
    navigate('/mypage');
  };
  return (
    <form style={{ width: '100%' }} onSubmit={profileSave}>
      <PageTitle title="프로필 설정">
        <Button type="submit">저장</Button>
      </PageTitle>

      <Section title="이름">
        <Input name="nickname" placeholder="닉네임을 입력하세요" maxLength={10} />
      </Section>

      <Section title="자기소개">
        <Input name="bio" placeholder="자기소개를 입력하세요" maxLength={100} />
      </Section>

      <Section title="공개 설정">
        <Switch name="isPublic" defaultChecked={false} label="추천 동료 목록에 나타나지 않아요" />
      </Section>
    </form>
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

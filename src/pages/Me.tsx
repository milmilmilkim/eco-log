import PageTitle from '../components/PageTitle';
import Section from '../components/Section';
import styled from 'styled-components';
import { useState, useEffect, useCallback } from 'react';
import axios from '../config/Axios';
import { useRecoilState } from 'recoil';
import { recoilMyProfileState } from '../state/recoilLoginState';
import { getGrowText } from '../config/Const';

const Me = () => {
  const [data, setData] = useState<any>('');
  const [myProfile] = useRecoilState(recoilMyProfileState);
  const [accumulate, setAccumulate] = useState<Number>(0);

  const getData = useCallback(async () => {
    const { data: res } = await axios.get('/api/user/profile', {
      params: {
        targetId: myProfile.userId,
      },
    });
    console.log(res);
    setData(res);
    setAccumulate(res.userPostTotalCount);
  }, [myProfile.userId]);

  useEffect(() => {
    getData();
  }, [getData]);

  return (
    <>
      <PageTitle title="실천 현황" prevButton />
      <Section title="에코 레벨">
        <>{getGrowText(accumulate)}</>
      </Section>
      <Space />
      <Section title="실천수">
        <>{accumulate}</>
      </Section>
      <Space />
      <Section title="자주 기록한 실천">
        <>{JSON.stringify(data.userSummary)}</>
      </Section>
      <Space />
    </>
  );
};

const Space = styled.div`
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  width: 95%;
  margin: 5px;
`;
export default Me;

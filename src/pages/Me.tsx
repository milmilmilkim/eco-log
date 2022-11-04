import PageTitle from '../components/PageTitle';
import Section from '../components/Section';
import styled from 'styled-components';
import { useState, useEffect, useCallback } from 'react';
import axios from '../config/Axios';
import { useRecoilState } from 'recoil';
import { recoilMyProfileState } from '../state/recoilLoginState';
import { getGrowText, maxGrow, getGrowImage } from '../config/Const';

const Me = () => {
  const [data, setData] = useState<any>('');
  const [myProfile] = useRecoilState(recoilMyProfileState);
  const [accumulate, setAccumulate] = useState<Number>(0);

  const getProgress = (value: Number): number => (value >= maxGrow ? 7 : (value as number) % 7);
  const getData = useCallback(async () => {
    if (myProfile.userId) {
      const { data: res } = await axios.get('/api/user/profile', {
        params: {
          targetId: myProfile.userId,
        },
      });
      setData(res);
      setAccumulate(res.userPostTotalCount);
    }
  }, [myProfile.userId]);

  useEffect(() => {
    getData();
  }, [getData]);

  return (
    <>
      <PageTitle title="실천 현황" prevButton />
      <Section title="에코 레벨">
        <>
          기록 {accumulate}일차 <br />
          <img src={getGrowImage(200).src as string} alt={getGrowImage(accumulate).alt as string} />
          <br />
          {getGrowText(accumulate)} <br />
          <MyProgress max="7" value={getProgress(accumulate)}></MyProgress>
        </>
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

const MyProgress = styled.progress`
  width: 100%;
  appearance: none;

  &::-webkit-progress-value {
    background-color: #57ab91;
    border-radius: 15px;
    height: 10px;
    transition: all 300ms ease-in-out;
  }

  &::-webkit-progress-bar {
    background-color: ${(props) => props.theme.color.borderColor};
    border-radius: 15px;
    height: 10px;
  }
`;
const Space = styled.div`
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  width: 95%;
  margin: 5px;
`;
export default Me;

import { useRecoilState } from 'recoil';
import { recoilDateState } from '../state/recoilDateState';
import dayjs from 'dayjs';
import axios from '../config/Axios';
import { useState, useEffect } from 'react';

//components
import PageTitle from '../components/PageTitle';
import TextButton from '../components/Common/TextButton';
import Section from '../components/Section';

const Write = () => {
  const [date] = useRecoilState(recoilDateState);

  const [behavior, setBehavior] = useState([]);

  const getBehavior = async () => {
    const { data } = await axios.get('/api/behavior');
    setBehavior(data);
  };

  useEffect(() => {
    getBehavior();
  }, []);

  return (
    <>
      <PageTitle title={dayjs(date).format('YYYY년 MM월 DD일')}>
        <TextButton>기록</TextButton>
      </PageTitle>
      <Section title="오늘의 실천" />
      <ul>
        {behavior.map(({ behaviorId, name }) => (
          <li key={behaviorId}>{name}</li>
        ))}
      </ul>
    </>
  );
};

export default Write;

import PageTitle from '../../components/PageTitle';
import Section from '../../components/Section';
import styled from 'styled-components';
import { useState, useEffect, useCallback } from 'react';
import axios from '../../config/Axios';
import { useRecoilState } from 'recoil';
import { recoilMyProfileState } from '../../state/recoilLoginState';
import { getGrowText, maxGrow, getGrowImage } from '../../config/Const';
import Tag from '../../components/Tag';
import { Behavior, UserProfile } from '../../typing/common';
import dayjs from 'dayjs';
import { useParams } from 'react-router-dom';


const Stat = () => {

    /* 남의 프로필일 때 */
  const {userId}  = useParams();

  /* ================ STATE ================================ */
  const [data, setData] = useState<UserProfile | null>(null);
  const [myProfile] = useRecoilState(recoilMyProfileState);
  const [accumulate, setAccumulate] = useState<number>(0);
  const [average, setAverage] = useState<number>(0); //하루 평균: 총 발행을 누적 가입일수로 나눈 것
  const [cumulative, setCumulative] = useState<number>(0);
  const [growImage, setGrowImage] = useState<{ src: String; alt: String }>({ alt: '', src: '' });

  const getProgress = (value: Number): number => (value >= maxGrow ? 7 : (value as number) % 7);
  const getData = useCallback(async () => {

    let targetId;
    
    targetId = userId || myProfile.userId
    if (targetId) {
      const { data: res } = await axios.get('/api/user/profile', {
        params: {
          targetId,
        },
      });
      setData(res);
      setAccumulate(res.userPostTotalCount);

      const createAt = dayjs(res.createAt).format('YYYY-MM-DD');
      setCumulative(dayjs(new Date()).diff(createAt, 'day') + 1);
    }
  }, [myProfile.userId, userId]);

  useEffect(() => {
    getData();
  }, [getData]);

  useEffect(() => {
    setAverage(accumulate / cumulative);
  }, [cumulative, accumulate]);
  useEffect(() => {
    accumulate ? setGrowImage(getGrowImage(accumulate)) : setGrowImage(getGrowImage(0));
  }, [accumulate]);

  return (
    <>
      <PageTitle title="실천 현황" prevButton />
      <Section title="에코 레벨">
        <MyLevel>
          <>
            <div className="container">
              <img src={growImage.src as string} alt={growImage.alt as string} />
              <div className="info">
                <h3>
                  <>기록 {accumulate}일차</>
                </h3>
                <span>{growImage.alt}</span>
                <br />
                {getGrowText(accumulate)} <br />
              </div>
            </div>
            <MyProgress max="7" value={getProgress(accumulate)}></MyProgress>
          </>
        </MyLevel>
      </Section>
      <Space />
      <Section title="실천수">
        <MyStat>
          <div className="row">
            <span className="title">하루 평균</span>
            <span className="number">{average?.toFixed(1) || 0}</span>
          </div>
          <div className="row">
            <span className="title">누적</span>
            <span className="number">{accumulate}</span>
          </div>
        </MyStat>
      </Section>
      <Space />
      <Section title="자주 기록한 실천">
        <div style={{ marginTop: '30px' }}></div>
        {data?.userSummary?.map((item: Behavior) => (
          <Tag key={item.behaviorId.toString()}>{item.name}</Tag>
        ))}
      </Section>
      <Space />
    </>
  );
};

const MyLevel = styled.div`
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    color: #333333;
    margin: 30px 0 30px;

    .info {
      h3 {
        margin-bottom: 15px;
        color: #000;
      }
      span {
        font-weight: bolder;
      }
      margin-left: 50px;
    }
  }
  img {
    width: 100px;
  }
`;

const MyStat = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin: 40px 0 40px;
  .row {
    float: left;

    .title {
      margin: 0 80px 0 50px;
    }

    .number {
      font-weight: bolder;
    }
  }
`;

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
export default Stat;

import styled from 'styled-components';
import { badgeInfo } from '../../config/Const';
import BadgeItem from './BadgeItem';
import { Badge } from '../../typing/common';
import { useState, useEffect } from 'react';
import axios from '../../config/Axios';
import { Outlet } from 'react-router-dom';

const BadgeList = () => {
  const [data, setData] = useState<boolean[] | null>(null);

  const getData = async () => {
    const { data } = await axios.get('/api/user/badge');
    const badgeArray: boolean[] = data.badgeStateList?.map((v: string) => (v === '1' ? true : false));
    setData(badgeArray);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <BadgeContainer>
        {data &&
          badgeInfo.map((badge: Badge, index: number) => {
            return (
              <div key={`${index}_${badge.name}`}>
                <BadgeItem badge={badge} isActive={data[badge.index]} />
              </div>
            );
          })}
      </BadgeContainer>

      <DescContainer>{data?.indexOf(true) !== -1 ? <Outlet /> : <span className="title">아직 획득한 뱃지가 없어요</span>}</DescContainer>
    </>
  );
};

const DescContainer = styled.div`
  width: 100%;
  margin-bottom: 100px;
  .title {
    font-size: 1.2rem;
    text-align: center;
    width: 100%;
    display: block;
    margin: 30px 0;
  }

  p {
    font-size: 1rem;
    width: 100%;
    padding: 0 50px;
    line-height: 1.5;
  }
`;

const BadgeContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 50px;
  margin-top: 20px;
  margin-bottom: 20px;
  padding-bottom: 50px;
  border-bottom: 1px solid ${(props) => props.theme.color.borderColor};

  .item {
    display: flex;
    justify-content: center;
  }
`;

export default BadgeList;

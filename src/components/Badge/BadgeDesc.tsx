import { useParams } from 'react-router-dom';
import { badgeInfo } from '../../config/Const';
import { Badge } from '../../typing/common';
import { useEffect, useState } from 'react';

const BadgeDesc = () => {
  const params = useParams();
  const badgeId = params.badgeId as unknown as number;
  //   const info : Badge[] = badgeInfo;

  const [info, setInfo] = useState<Badge>(badgeInfo[badgeId]);

  useEffect(() => {
    setInfo(badgeInfo[badgeId]);
  }, [badgeId]);

  return (
    <>
      <span className="title">{info.name}</span>
      <br />
      <p>{info.condition}!</p>
      <p>{info.desc}</p>
    </>
  );
};

export default BadgeDesc;

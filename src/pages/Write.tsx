import { useRecoilState } from 'recoil';
import { recoilDateState } from '../state/recoilDateState';
import dayjs from 'dayjs';

const Write = () => {
  const [date, setDate] = useRecoilState(recoilDateState);

  return <>{dayjs(date).format('YYYY-MM-DD')}</>;
};

export default Write;

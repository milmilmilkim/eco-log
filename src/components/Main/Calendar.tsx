import { useState } from 'react';
import Calendar from 'react-calendar';
import styled from 'styled-components';
import dayjs from 'dayjs';
import 'react-calendar/dist/Calendar.css';

//recoil
import { recoilDateState } from '../../state/recoilDateState';
import { useRecoilState } from 'recoil';

const MyCalendar = () => {
  const [value, onChange] = useRecoilState<Date>(recoilDateState); //날짜
  const [value2, onViewChange] = useState<any>(new Date()); //타입이 뭔지 모르겠다~!

  //마크할 날짜들
  const marks: String[] = ['2022-08-16'];

  return (
    <>
      <StyledCalendar
        onChange={onChange}
        value={value}
        onViewChange={onViewChange}
        locale="en-EN"
        tileClassName={({ date, view }: any): any => {
          if (marks.find((x) => x === dayjs(date).format('YYYY-MM-DD'))) {
            return 'highlight';
          }
        }}
        onActiveStartDateChange={({ action, activeStartDate, value, view }) => {
          //달마다 데이터 불러오기
          return console.log('Changed view to: ', activeStartDate);
        }}
      />
    </>
  );
};

const StyledCalendar = styled(Calendar)`
  width: 100%;
  border: none;
  font-weight: 700;
  padding: 0 40px;

  .highlight {
    border-bottom: 5px solid ${(props) => props.theme.color.lightColor};
    border-radius: 3px;
  }

  .react-calendar__month-view__days__day {
    color: #666666;
  }

  .react-calendar__tile--active:enabled:hover,
  .react-calendar__tile--active {
    color: #000;
    background-color: #fff;
    font-weight: 700;
  }

  .react-calendar__tile--active:enabled:focus {
    background-color: #eee;
  }

  .react-calendar__tile--now {
    background-color: ${(props) => props.theme.color.backgroundColor} !important;
  }
`;

export default MyCalendar;

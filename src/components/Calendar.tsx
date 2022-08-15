import { useState } from 'react';
import Calendar from 'react-calendar';
import styled from 'styled-components';
import dayjs from 'dayjs';
import 'react-calendar/dist/Calendar.css';

const MyCalendar = () => {
  const [value, onChange] = useState<Date>(new Date());
  const [value2, onViewChange] = useState<any>(new Date());

  console.log(value2);

  const marks: String[] = ['2022-08-16'];

  return (
    <>
      <div>
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
          onActiveStartDateChange={({ action, activeStartDate, value, view }) => console.log('Changed view to: ', activeStartDate)}
        />
      </div>
    </>
  );
};

const StyledCalendar = styled(Calendar)`
  width: 100%;
  padding: 30px;
  border: none;

  .highlight {
    background-color: ${(props) => props.theme.color.primaryColor};
  }
`;

export default MyCalendar;

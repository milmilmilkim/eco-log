import styled from 'styled-components';

import Section from '../components/Section';
import PageTitle from '../components/PageTitle';
import Input from '../components/Form/Input';

const tag = ['친환경 상점 이용', '소비 없는 하루', '중고 거래'];

const Write = () => {
  return (
    <StyledWrite>
      <PageTitle title="선택된 날짜">기록</PageTitle>
      <Section title="오늘의 실천">
        <>
          <h3>소비</h3>
          <ul>
            {tag.map((item) => (
              <li>{item}</li>
            ))}
          </ul>
        </>
      </Section>
      <Section title="오늘의 한마디">
        <Input name="text" placeholder="목표했던 실천이나 아쉬웠던 점을 기록하세요" maxLength={140} />
      </Section>
    </StyledWrite>
  );
};

const StyledWrite = styled.div`
  width: 100%;
  ul {
    li {
      margin: 5px;
      padding: 5px 7px;
      background-color: ${(props) => props.theme.color.backgroundColor};
      color: #333333;
      border-radius: 10px;
      display: inline-block;
    }
  }
`;

export default Write;

import Section from '../Section';
import Profile from '../Profile';

import styled from 'styled-components';

import { Card } from '../../pages/Main';

const Record: React.FC<Card> = ({ nickname, bio, tag, message, like }) => {
  const props = {
    nickname,
    bio,
    tag,
    message,
    like,
  };
  return (
    <StyledRecord>
      <Profile {...props} />
      <Section title="오늘의 실천" />
      <div className="tag">
        <ul>
          {tag.map((v, i) => (
            <li>{v}</li>
          ))}
        </ul>
      </div>

      <Section title="오늘의 한마디">{message}</Section>
      <hr />
      <div className="like">
        <svg width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M10.9996 19.67C10.878 19.6733 10.7576 19.6458 10.6496 19.59C10.3396 19.42 2.92958 15.49 1.37958 10.19C0.489579 7.18995 0.789579 4.25996 2.17958 2.39996C2.68761 1.72869 3.35018 1.18997 4.11099 0.829593C4.87179 0.469211 5.70835 0.297811 6.54958 0.329956C7.4526 0.285725 8.34969 0.497962 9.13716 0.94213C9.92463 1.3863 10.5703 2.04426 10.9996 2.83996C11.4288 2.04426 12.0745 1.3863 12.862 0.94213C13.6495 0.497962 14.5466 0.285725 15.4496 0.329956C16.2908 0.297811 17.1274 0.469211 17.8882 0.829593C18.649 1.18997 19.3115 1.72869 19.8196 2.39996C21.2096 4.25996 21.5096 7.16995 20.6196 10.19C19.0696 15.49 11.6196 19.42 11.3496 19.59C11.2415 19.6458 11.1211 19.6733 10.9996 19.67ZM6.54958 1.82996C5.94133 1.79752 5.33439 1.91454 4.7818 2.17079C4.22921 2.42704 3.74778 2.81472 3.37958 3.29996C2.26958 4.77996 2.05958 7.19996 2.81958 9.76996C4.01958 13.86 9.54958 17.24 10.9996 18.07C12.4496 17.24 17.9996 13.85 19.1796 9.76996C19.9396 7.19996 19.7296 4.76996 18.6196 3.29996C18.2514 2.81472 17.77 2.42704 17.2174 2.17079C16.6648 1.91454 16.0578 1.79752 15.4496 1.82996C11.9396 1.82996 11.7596 5.35996 11.7496 5.50996C11.7496 5.70887 11.6706 5.89963 11.5299 6.04029C11.3893 6.18094 11.1985 6.25996 10.9996 6.25996C10.8007 6.25996 10.6099 6.18094 10.4692 6.04029C10.3286 5.89963 10.2496 5.70887 10.2496 5.50996C10.2296 5.13996 9.99958 1.82996 6.54958 1.82996Z"
            fill="#333333"
          />
        </svg>
        {like}
      </div>
    </StyledRecord>
  );
};

const StyledRecord = styled.div`
  border: solid 1px #83838365;
  border-left: solid 2px ${(props) => props.theme.color.lightColor};

  box-sizing: border-box;
  width: 90%;
  margin-top: 30px;
  padding-bottom: 20px;
  font-size: 0.8rem;

  .tag {
    ul {
      padding-left: 15px;
      margin-bottom: 10px;
      li {
        margin: 5px;
        padding: 5px 7px;
        background-color: ${(props) => props.theme.color.backgroundColor};
        color: #333333;
        border-radius: 5px;
        display: inline-block;
      }
    }
  }

  hr {
    margin: 10px 20px;
  }

  .like {
    margin-left: 20px;
    height: 20px;
    display: flex;
    align-items: center;

    svg {
      margin-right: 5px;
    }
  }
`;

export default Record;

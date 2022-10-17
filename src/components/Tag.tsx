import styled from 'styled-components';

type TagProps = {
  data: Array<String>;
};

const MyTag = styled.div`
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
`;

const Tag: React.FC<TagProps> = ({ data }) => {
  return (
    <MyTag>
      <ul>
        {data.map((tag: String, index: number) => (
          <li key={index}>{tag}</li>
        ))}
      </ul>
    </MyTag>
  );
};

export default Tag;

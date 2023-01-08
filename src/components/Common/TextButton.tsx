import styled from 'styled-components';

const Button = styled.button`
  color: ${(props) => props.theme.color.primaryColor};
  background-color: #fff;
  border: none;
  cursor: pointer;
  font-weight: 700;
  font-size: 0.9rem;
`;

type TextButtonProps = {
  type?: 'submit';
  children?: JSX.Element | String;
  onClick?: (e:React.MouseEvent) => Promise<void>;
};

const TextButton: React.FC<TextButtonProps> = ({ children, type, onClick }) => {
  return <Button type={type} onClick={onClick}>{children}</Button>;
};

export default TextButton;

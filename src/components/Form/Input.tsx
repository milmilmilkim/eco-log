import styled from 'styled-components';

type InputProps = {
  name: string;
  placeholder?: string;
  defaultValue?: string;
  maxLength?: number;
};

const Input: React.FC<InputProps> = ({ name, placeholder, maxLength, defaultValue }) => {
  return <StyledInput type="text" name={name} placeholder={placeholder} defaultValue={defaultValue} maxLength={maxLength || 10} />;
};

const StyledInput = styled.input`
  width: 100%;
  border: none;
  border-bottom: 1px solid #eee;
  margin-top: 20px;
  margin-bottom: 35px;
  height: 45px;
`;
export default Input;

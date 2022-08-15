import styled from 'styled-components';

const SwitchContainer = styled.div`
  display: flex;
  justify-content: start;
  margin-top: 46px;
  .my-label {
    line-height: 1.5;
    margin-left: 20px;
    font-size: 0.8rem;
  }
  .input-container {
    input {
      display: none;
    }
    .react-switch-label {
      display: flex;
      align-items: center;
      justify-content: space-between;
      cursor: pointer;
      width: 50px;
      height: 24px;
      background: grey;
      border-radius: 100px;
      position: relative;
      transition: background-color 0.2s;
    }
    .react-switch-label .react-switch-button {
      content: '';
      position: absolute;
      top: 2px;
      left: 2px;
      width: 20px;
      height: 20px;
      border-radius: 45px;
      transition: 0.2s;
      background: #fff;
      box-shadow: 0 0 2px 0 rgba(10, 10, 10, 0.29);
    }
    .react-switch-checkbox:checked + label.react-switch-label {
      background-color: ${(props) => props.color || props.theme.color.primaryColor};
    }
    .react-switch-checkbox:checked + .react-switch-label .react-switch-button {
      left: calc(100% - 2px);
      transform: translateX(-100%);
    }
  }
`;

type SwitchProps = {
  name: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  defaultChecked?: boolean;
  color?: string;
  label: string;
};
const Switch: React.FC<SwitchProps> = ({ name, onChange, defaultChecked, label, color }) => {
  return (
    <SwitchContainer color={color}>
      <div className="input-container">
        <input className="react-switch-checkbox" id={`react-switch-new`} type="checkbox" name={name} onChange={onChange} defaultChecked={defaultChecked || false} />
        <label className="react-switch-label" htmlFor={`react-switch-new`}>
          <span className={`react-switch-button`} />
        </label>
      </div>
      <div className="my-label">{label}</div>
    </SwitchContainer>
  );
};

export default Switch;

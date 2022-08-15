import styled from 'styled-components';
import { Outlet } from 'react-router-dom';

const Container = () => {
  return (
    <StyledContainer>
      <Outlet />
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  width: 500px;
  min-height: 100vh;
  margin: auto;
  background: #ffffff;
  box-sizing: border-box;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default Container;

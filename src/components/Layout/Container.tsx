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
  max-width: 500px;
  min-height: 100vh;
  margin: auto;
  background: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  height: auto;
`;

export default Container;

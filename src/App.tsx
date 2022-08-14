import GlobalStyle from './components/GlobalStyle';
import Login from './pages/Login';
import Container from './components/Layout/Container';

function App() {
  return (
    <>
      <GlobalStyle />
      <Container>
        <Login />
      </Container>
    </>
  );
}

export default App;

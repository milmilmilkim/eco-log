import GlobalStyle from './components/GlobalStyle';
import Router from './router/Router';
import { ThemeProvider } from 'styled-components';
import theme from './theme';

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Router />
      </ThemeProvider>
    </>
  );
}

export default App;

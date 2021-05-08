import './App.css';
import { StylesProvider } from '@material-ui/styles';
import { ThemeProvider } from 'styled-components';
import Header from './components/Header';
import Home from './components/Home';
import Router from './routers/Router';
function App() {

  const theme = {
    colorPrimary: "#f48024",
    darkRedSecondary: "#662323",
    softGray: "#BDBDBD",
    gray: "#828282",
    lightRed: "#FF7676",
  };

  return (
    <StylesProvider injectFirst>
      <ThemeProvider theme={theme}>
        <Header />
        <Router />
      </ThemeProvider>
    </StylesProvider>  
  );
}

export default App;

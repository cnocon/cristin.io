import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, createTheme } from '@mui/material/styles';
export const LINEAR_RAINBOW_GRADIENT = "linear-gradient(-240deg,#bca2f6,#cdb9f8 5%,#b3e9ff 17%,#b3e9ff 25%,#bffcf7 35%,#ffe366 60%,#fad1d1 85%)";

let newTheme = createTheme({
  palette: {
    primary: {
      main: 'hsl(216, 80%, 41%)',
      dark: 'hsl(216, 81%, 20%)',
      light: 'hsl(216, 81%, 90%)',
      contrastText: '#fff',
    },
    secondary: {
      main: 'hsl(49, 100%, 55%)',
      dark: 'hsl(49, 100%, 25%)',
      light: 'hsl(49, 100%, 85%)',
      contrastText: '#fff',
    },
    warning: {
      main: 'hsl(49, 100%, 55%)',
      dark: 'hsl(49, 100%, 25%)',
      light: 'hsl(49, 100%, 85%)',
      contrastText: '#fff',
    },
    info: {
      main: 'hsl(198, 100%, 55%)',
      light: 'hsl(198, 100%, 85%)',
      dark: 'hsl(198, 100%, 20%)',
      contrastText: '#fff',
    },
    // text: {
    //   link: {
    //     main: 'hsl(259, 81%, 50%)',
    //     dark: 'hsl(259, 81%, 30%)',
    //     light: 'hsl(259, 81%, 90%)',
    //     contrastText: '#fff',
    //   }
    // }
    // secondary: {
    //   main: 'hsl(45, 85%, 50%)',
    //   light: 'hsl(45, 100%, 85%)',
    //   dark: 'hsl(45, 100%, 25%)',
    //   contrastText: '#000',
    // }
  }
});

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <CssBaseline />
    <ThemeProvider theme={newTheme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

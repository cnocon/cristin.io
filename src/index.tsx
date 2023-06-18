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

// const LINEAR_RAINBOW_GRADIENT = "linear-gradient(-240deg,#bca2f6,#cdb9f8 5%,#b3e9ff 17%,#b3e9ff 25%,#bffcf7 35%,#ffe366 60%,#fad1d1 85%)";
let newTheme = createTheme({
  palette: {
    primary: {
      main: 'hsl(216, 80%, 41%)',
      light: 'hsl(216, 100%, 90%)',
      dark: 'hsl(216, 70%,26%)',
      contrastText: '#fff',
    },
    secondary: {
      main: 'hsl(45, 85%, 50%)',
      light: 'hsl(45, 100%, 91%)',
      dark: 'hsl(45, 100%, 25%)',
      contrastText: '#000',
    }
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

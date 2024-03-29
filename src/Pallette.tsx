import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { purple } from '@mui/material/colors';
import Button from '@mui/material/Button';
import { ThemeContext } from '@emotion/react'

// const theme = createTheme({
//   palette: {
//     primary: {
//       // Purple and green play nicely together.
//       main: purple[500],
//     },
//     secondary: {
//       // This is green.A700 as hex.
//       main: '#11cb5f',
//     },
//   },
// });

export default function Pallette() {
  const theme = React.useContext(ThemeContext)
  return (
    <>
      <Button>Primary</Button>
      <Button color="secondary">Secondary</Button>
    </>
  );
}
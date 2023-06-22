import React, { useEffect, useState } from 'react';
import Header from './Header';
import Resume from './tabs/Resume';
import Contact from './tabs/Contact';
import Spinner from './Spinner';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Container, Stack, Typography } from '@mui/material'
import { useTheme } from '@mui/material/styles';
import NotFound from "./NotFound"

const App: React.FunctionComponent<{ children?: any }> = ({ children }) => {
  const theme = useTheme();
  const [loading, setLoading] = useState(true);
  const newDate = new Date();

  useEffect(() => {
    setLoading(false);
  }, []);

  if (loading) {
    return <Spinner />
  }

  return (
    <BrowserRouter>
      <Stack direction="column">
        <Header />

      <Routes>
        <Route path="/contact" element= {<Contact />}/>
        <Route path="/" element= {<Resume />}/>
        <Route path="*" element={<NotFound />} />
      </Routes>
      <div className="content">{children}</div>
      </Stack>
      <Container maxWidth={false} sx={{px: 4, py: 4, bgcolor: theme.palette.secondary.main, color: theme.palette.getContrastText(theme.palette.secondary.main)}}  className="footer-container">
      <Container maxWidth="lg" sx={{boxShadow: 0, bgcolor: 'inherit'}}>
        <footer>
          <Typography variant="h6" sx={{color: theme.palette.getContrastText(theme.palette.secondary.main)}}>&copy; {`${newDate.getUTCFullYear()}`} Cristin O'Connor</Typography>
        </footer>
        </Container>
      </Container>
    </BrowserRouter>
  )
}

export default App;

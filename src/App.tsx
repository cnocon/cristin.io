import React, { useEffect, useState } from 'react';
import ResponsiveAppBar from './ResponsiveAppBar';
import Page from './Page';
import Resume from './tabs/Resume';
import Contact from './tabs/Contact';
import Spinner from './Spinner';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Container } from '@mui/material'
import { useTheme } from '@mui/material/styles';
import NotFound from "./NotFound"

const App: React.FunctionComponent<{ children?: any }> = ({ children }) => {
  // const theme = useTheme();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  if (loading) {
    return <Spinner />
  }
  return (<BrowserRouter>

        <Container maxWidth={false}>
          <Container maxWidth="lg" sx={{boxShadow: 0}}>
            <ResponsiveAppBar />
          </Container>
        </Container>

      <Routes>
        <Route path="/" element= {<Page><p>Home</p></Page>}/>
        <Route path="/contact" element= {<Contact />}/>
        <Route path="/resume" element= {<Resume />}/>
        <Route path="*" element={<NotFound />} />
      </Routes>
      {children}


    </BrowserRouter>
  )
}

export default App;

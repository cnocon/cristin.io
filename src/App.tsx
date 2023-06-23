import React, { useEffect, useState } from 'react';
import Header from './Header';
import Resume from './tabs/Resume';
import Contact from './tabs/Contact';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Stack, Skeleton, Box, Container } from '@mui/material';
import Footer from "./Footer";
import NotFound from "./NotFound"

const App: React.FunctionComponent<{ children?: any }> = ({ children }) => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(false);
  }, []);

  // if (loading) {
  //   return (
  //     <Container maxWidth="lg">
  //       <Skeleton variant="rectangular" sx={{height: {xs: "120px", md: "330px"}}} />
  //   <Box sx={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center'}}>
  //     {[1,2,3,4,5,6,7].map((i) => <Box key={`box-${i}`} sx={{display: "flex", flexDirection: "column", alignItems: "center", flexBasis: 'calc(50% - 4rem)', margin: '2rem'}}>
  //       <Skeleton variant="circular" height="80px" width="80px" sx={{mb: 2}}/>
  //       <Skeleton variant="text" sx={{ fontSize: '1rem', width: '100%' }} />
  //       <Skeleton variant="text" sx={{ fontSize: '1rem', width: '100%' }} />
  //       <Skeleton variant="text" sx={{ fontSize: '1rem', width: '100%' }} />
  //       <Skeleton variant="text" sx={{ fontSize: '1rem', width: '100%' }} />
  //     </Box>
  //   )}
  //   </Box>
  //   <Skeleton variant="rectangular" sx={{ fontSize: '1rem', width: '100%' }} height="100px"/>
  //   </Container>
  // )}

  return (
    <BrowserRouter>
      <Stack direction="column">
        <Header />
        <Routes>
          <Route path="/contact" element= {<Contact />}/>
          <Route path="/" element= {<Resume />}/>
          <Route path="*" element={<NotFound />} />
        </Routes>
        <div className='content'>{children}</div>
      </Stack>
      <Footer />
    </BrowserRouter>
  )
}

export default App;

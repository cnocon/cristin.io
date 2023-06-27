import React from 'react';
import Header from './Header';
import Resume from './tabs/Resume';
import Contact from './tabs/Contact';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Box, Stack } from '@mui/material';
import Footer from "./Footer";
import NotFound from "./NotFound"

const App: React.FunctionComponent<{ children?: any }> = ({ children }) => {
  return (
    <BrowserRouter>
      <Stack direction="column">
        <Header />
        <Routes>
          <Route path="/contact" element={<Contact />}/>
          <Route path="/" element={<Resume />}/>
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Box className="content">{children}</Box>
      </Stack>
      <Footer />
    </BrowserRouter>
  )
}

export default App;

import React, { useEffect, useState } from 'react';
import ResponsiveAppBar from './ResponsiveAppBar';
import Page from './Page';
import Resume from './tabs/Resume';
import Contact from './tabs/Contact';
import Spinner from './Spinner';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App: React.FunctionComponent<{ children?: any }> = ({ children }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  if (loading) {
    return <Spinner />
  }
  return (
    <BrowserRouter>
    <ResponsiveAppBar />
    <Page>
    <Routes>
      <Route path="/" element= {<Page><p>Home</p></Page>}/>
      <Route path="/contact" element= {<Contact />}/>
      <Route path="/resume" element= {<Resume />}/>
    </Routes>
    </Page>
    {children}
  </BrowserRouter>)
}

export default App;

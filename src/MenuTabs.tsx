import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Resume from "./tabs/Resume"
import Pallette from './Pallette'
import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom'

export const STab = styled(Tab)`
  outline: 0
`

export default function MenuTabs() {
  const [activeNav, setActiveNav] = React.useState("/contact");
  // const navigate = useNavigate();


  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    // event.preventDefault();
    setActiveNav(newValue);
  };

  const boxprops: any = {sx: { borderBottom: 1, borderColor: 'divider' }}

  React.useEffect(() => {
    console.log("activeNav", activeNav);
    if (window.location.pathname !== activeNav) {
      // navigate(`/${activeNav}`);
    }
  }, [activeNav])

  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={activeNav}>
        <Box {...boxprops}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <STab label="contact" value="contact" />
            <STab label="resume" value="resume" />
          </TabList>
        </Box>
        <TabPanel value="contact"><Pallette /></TabPanel>
        <TabPanel value="resume"><Resume /></TabPanel>
      </TabContext>
    </Box>
  );
}
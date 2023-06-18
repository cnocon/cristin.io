import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Resume from "./tabs/Resume"
import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom'

export const StyledTab = styled(Tab)`
  outline: 0
`

export default function MenuTabs() {
  const [activeNav, setActiveNav] = React.useState("/resume");
  const navigate = useNavigate();


  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    event.preventDefault();
    setActiveNav(newValue);
  };

  const boxprops: any = {sx: { borderBottom: 1, borderColor: 'divider' }}

  React.useEffect(() => {
    console.log("activeNav", activeNav);
    navigate(`/${activeNav}`);
  }, [activeNav])

  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={activeNav}>
        <Box {...boxprops}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <StyledTab label="contact" value="contact" />
            <StyledTab label="resume" value="resume" />
          </TabList>
        </Box>
        <TabPanel value="resume"><Resume /></TabPanel>
      </TabContext>
    </Box>
  );
}
import React from "react";
import { Container, useTheme } from "@mui/material";
import ResponsiveAppBar from "./ResponsiveAppBar"

const Header: React.FC = () => {
  const theme = useTheme();
  return (
    <Container maxWidth={false} sx={{backgroundColor: theme.palette.primary.main, boxShadow: 3, pt: 2, pb: 4}}>
      <Container maxWidth="lg" sx={{boxShadow: 0}}>
        <ResponsiveAppBar />
      </Container>
    </Container>
  )
}

export default Header;

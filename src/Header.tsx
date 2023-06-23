import React from "react";
import { Container, useTheme } from "@mui/material";
import ResponsiveAppBar from "./ResponsiveAppBar"

const Header: React.FC = () => {
  const theme = useTheme();
  return (
    <Container maxWidth={false} sx={{backgroundColor: theme.palette.primary.main, pt: 2, pb: 4, minHeight: {xs: 0, md: '330px'}}}>
      <Container maxWidth="lg" sx={{boxShadow: 0}}>
        <ResponsiveAppBar />
      </Container>
    </Container>
  )
}

export default Header;

import React from "react";
import { Container, useTheme, Typography } from "@mui/material";

const Footer: React.FC = () => {
  const theme = useTheme();
  const newDate = new Date();

  return (
    <Container maxWidth={false} sx={{bgcolor: theme.palette.grey[100], color: theme.palette.getContrastText(theme.palette.grey[300])}} className="footer-container">
      <Container maxWidth="lg" sx={{boxShadow: 0, bgcolor: "inherit"}}>
        <footer>
          <Typography variant="h6" sx={{color: theme.palette.getContrastText(theme.palette.grey[100])}}>&copy; {`${newDate.getUTCFullYear()}`}
          <span style={{fontFamily: "Pacifico", marginLeft: '1rem'}}>Cristin O'Connor</span></Typography>
        </footer>
      </Container>
    </Container>
  )
}

export default Footer;

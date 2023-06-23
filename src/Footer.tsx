import React from "react";
import { Container, useTheme, Typography } from "@mui/material";

const Footer: React.FC = () => {
  const theme = useTheme();
  const newDate = new Date();

  return (
    <Container maxWidth={false} sx={{px: 4, py: 4, bgcolor: theme.palette.grey[100], color: theme.palette.getContrastText(theme.palette.grey[100]), position: "absolute", bottom: 0}} className="footer-container">
      <Container maxWidth="lg" sx={{boxShadow: 0, bgcolor: 'inherit'}}>
        <footer>
          <Typography variant="h6" sx={{color: theme.palette.getContrastText(theme.palette.grey[100])}}>&copy; {`${newDate.getUTCFullYear()}`} Cristin O'Connor</Typography>
        </footer>
        </Container>
      </Container>
  )
}

export default Footer;

import * as React from "react";
import { useNavigate } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import { useTheme } from "@mui/material"
import SquarePortrait from "./images/square-portrait.png";

const pages = ["Resume","Contact"];

const ResponsiveAppBar: React.FC<{ styles?: any }> = ({ styles }) => {
  const theme = useTheme();
  const navigate = useNavigate();
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static" sx={{boxShadow: 0, backgroundColor: 'inherit'
    }}>
      <Toolbar sx={{mt: 4, mb: 2, flexWrap: 'wrap', justifyContent: 'center'}}>
        <Box sx={{flexBasis: "100%", display: 'flex', flexWrap: {xs: 'nowrap', md: 'wrap', justifyContent: 'center', alignItems: 'center'} }}>
          <Avatar
            sx={{ display: { xs: "none", md: "flex" }, flexBasis: '100px', height: '100px', bgcolor: theme.palette.grey[100], border: `6px solid ${theme.palette.secondary.main}`, borderRadius: '50%', overflow: 'hidden', mx: 'auto', justifyContent: 'center'}}
            src={SquarePortrait}
          />
          <Typography
            variant="h1"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              flexBasis: '100%',
              justifyContent: 'center',
              fontFamily: "Pacifico, serif",
              fontWeight: 400,
              letterSpacing: ".3rem",
              textDecoration: "none",
              fontSize: "3.5rem",
              color: theme.palette.getContrastText(theme.palette.primary.dark)
            }}
          >
            Cristin O'Connor
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" }}}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              sx={{color: theme.palette.getContrastText(theme.palette.primary.dark)}}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left"
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left"
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem
                  key={page}
                  sx={{color: theme.palette.grey.A700}}
                  onClick={(e) => {
                    e.preventDefault();
                    navigate(page === "Home" ? "/" : `/${page.toLowerCase()}`);
                  }}>
                  <Typography textAlign="center" sx={{color: theme.palette.grey.A700}} color={theme.palette.grey.A700}>{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          {/* <Avatar
            sx={{ display: { xs: "flex", md: "none" }, mr: 1 }}
            src="https://vue.cristin.io/img/square-portrait.d29137a7.png"
          /> */}
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "Pacifico, serif",
              fontWeight: 700,
              letterSpacing: ".3rem",
              textDecoration: "none",
              color: theme.palette.getContrastText(theme.palette.primary.dark)
            }}
          >
            Cristin O'Connor
          </Typography>
        </Box>

        <Box
          sx={{ flexGrow: 1, display: { xs: "none", md: "flex" }, width: '100%', justifyContent: 'center'}}
        >
          {pages.map((page) => (
            <Button
              key={page}
              variant="contained"
              color="secondary"
              onClick={() => window.location.pathname = page === "Resume" ? "/" : `/${page.toLowerCase()}`}
              sx={{ mx: 1, my: 2, boxShadow: 0}}
            >
              {page}
            </Button>
          ))}
        </Box>

        <Box sx={{ flexGrow: 0 }}></Box>

      </Toolbar>

    </AppBar>

  );
}
export default ResponsiveAppBar;


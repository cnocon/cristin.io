import * as React from "react";
import { useNavigate } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
// import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { StyledComponentProps, useTheme } from "@mui/material"
// import { Link } from "@mui/material"
// import AdbIcon from "@mui/icons-material/Adb";



const pages = ["Home", "Contact", "Resume"];
// const settings = ["Profile", "Account", "Dashboard", "Logout"];

const ResponsiveAppBar: React.FC<{ styles?: any }> = ({ styles }) => {
  const navigate = useNavigate();
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  // const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
  //   null
  // );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  // const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
  //   setAnchorElUser(event.currentTarget);
  // };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const theme = useTheme();

  // const handleCloseUserMenu = () => {
  //   setAnchorElUser(null);
  // };

  return (

    <AppBar position="static" sx={{boxShadow: 0}}>
      <Toolbar disableGutters>

        <Avatar sx={{ display: { xs: "none", md: "flex" }, mr: 1, backgroundColor: theme.palette.primary.light }} src="https://vue.cristin.io/img/square-portrait.d29137a7.png" />
        <Typography
          variant="h6"
          noWrap
          component="a"
          href="/"
          sx={{
            mr: 2,
            display: { xs: "none", md: "flex" },
            fontFamily: "Pacifico, serif",
            fontWeight: 700,
            letterSpacing: ".3rem",
            color: "inherit",
            textDecoration: "none"
          }}
        >
          Cristin O'Connor
        </Typography>

        <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleOpenNavMenu}
            color="inherit"
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
              display: { xs: "block", md: "none" }
            }}
          >
            {pages.map((page) => (

              <MenuItem
                key={page}
                onClick={(e) => {
                  e.preventDefault();
                  navigate(page === "Home" ? "/" : `/${page.toLowerCase()}`);
                }}>
                <Typography textAlign="center">{page}</Typography>
              </MenuItem>
            ))}
          </Menu>
        </Box>
        <Avatar
          sx={{ display: { xs: "flex", md: "none" }, mr: 1 }}
          src="https://vue.cristin.io/img/square-portrait.d29137a7.png"
        />
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
            color: "inherit",
            textDecoration: "none"
          }}
        >
          Cristin O'Connor
        </Typography>
        <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
          {pages.map((page) => (
            <Button
              key={page}
              onClick={() => window.location.pathname = page === "Home" ? "/" : `/${page.toLowerCase()}`}
              sx={{ my: 2, color: "white", display: "block" }}
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


/* REACT */

import * as React from "react";
import { Link } from "react-router-dom";

/* MUI */
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import CardMedia from "@mui/material/CardMedia";

/* PROJECT */
import CartWidget from "../CartWidget/CartWidget";
import CategoryMenu from "../CategoryMenu/CategoryMenu";

const Navbar = () => {
  const logo =
    "https://firebasestorage.googleapis.com/v0/b/steam-arg.appspot.com/o/logo.png?alt=media&token=c00b53ee-bdb3-4fb3-bf18-1bd7489e3da2";

  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const pages = [
    {
      route: "/about",
      name: "Acerca de",
    },
  ];

  return (
    <AppBar position="sticky" sx={{ mb: 3 }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Link to="/">
            <CardMedia
              component="img"
              sx={{ height: "60px" }}
              image={logo}
              alt="STEAM-ARG"
            />
          </Link>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="categories"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit">
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}>
              <CategoryMenu />
              {pages.map((page) => {
                return (
                  <Link
                    to={page.route}
                    key={page.route}
                    style={{ textDecoration: "none" }}>
                    <Button
                      onClick={handleCloseNavMenu}
                      sx={{ my: 2, color: "white", display: "block" }}>
                      {page.name}
                    </Button>
                  </Link>
                );
              })}
            </Menu>
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <CategoryMenu />
            {pages.map((page) => {
              return (
                <Link
                  to={page.route}
                  key={page.route}
                  style={{ textDecoration: "none" }}>
                  <Button
                    onClick={handleCloseNavMenu}
                    sx={{ my: 2, color: "white", display: "block" }}>
                    {page.name}
                  </Button>
                </Link>
              );
            })}
          </Box>

          <CartWidget />
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navbar;

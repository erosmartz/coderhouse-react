/* REACT */

import * as React from 'react';
import { Link } from "react-router-dom"

/* MUI */
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';


/* PROJECT */
import CartWidget from "../CartWidget/CartWidget"
import CategoryMenu from "../CategoryMenu/CategoryMenu"



const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };


  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

    
  const pages = [
    {
      route:'/about', 
      name:'Acerca de'
    }
  ];

  return (
    <AppBar position="sticky" sx={{ mb: 3}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <SportsEsportsIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.2rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            STEAM-ARG
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
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
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              
              {pages.map( (page) => {
                return (
                  <MenuItem key={page.route} onClick={handleCloseNavMenu}>
                    <Link to={page.route} style={{textDecoration: "none"}}>
                      <Typography textAlign="center">{page.name}</Typography>
                      
                    </Link>
                  </MenuItem>
                  )
                })}
              
            </Menu>
          </Box>
          <SportsEsportsIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            STEAM-ARG
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            <CategoryMenu/>
            {pages.map((page) => {
              return(
                <Link to={page.route} key={page.route} style={{textDecoration: "none"}}>
                <Button
                
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
                >
                  
                    {page.name}
                  
                </Button>
                </Link>
              
            )}
            )}
            
            
          </Box>
          
          
          <CartWidget />


        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;
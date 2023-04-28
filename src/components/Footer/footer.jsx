import React from 'react'

import Container from '@mui/material/Container';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

const Footer = () => {
  return (

    <AppBar position="static" sx={{mt:5, pt:2, pb: 4}}>
      <Container maxWidth="xl">
        <Toolbar>
          <Typography variant="subtitle1">
            Eros Martínez  © {new Date().getFullYear()}, Construido con React. Para Proyecto de React @ CODERHOUSE
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default Footer
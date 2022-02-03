import React from 'react';
import Link from './navbar-link';
import { AppBar, Container, Box } from '@mui/material';


const Navbar = () => (
  <AppBar position="sticky" color="error" sx={{ height: 60 }}>
    <Container color="error" sx={{
      height: '100%',
      display: 'flex',
      
      justifyContent: 'space-between',
    }}
    >
      <Box sx={{ display: 'flex' }}>
        <Link to="/">Pradžia</Link>
        <Link to="/paslaugos">Paslaugos</Link>
        <Link to="/kontaktai">Kontaktai</Link>
      </Box>
      <Box sx={{ display: 'flex' }}>
        <Link to="/login">Prisijungti</Link>
        <Link to="/register">Registruotis</Link>
      </Box>
    </Container>
  </AppBar>
);

export default Navbar;
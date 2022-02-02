import React from 'react';
import { Box } from '@mui/material';
import { Outlet } from 'react-router-dom';
import WideContainer from '../wide-container'
import Navbar from '../navbar/navbar';
import Footer from './page-footer'

const PageLayout = ({ children }) => (
  <Box component="main">
    <Navbar/>
    <WideContainer>
      {children}
      <Outlet />
      <Footer/>
    </WideContainer>
    
  </Box>
);

export default PageLayout;
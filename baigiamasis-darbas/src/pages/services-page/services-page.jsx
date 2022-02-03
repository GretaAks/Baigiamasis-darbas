import React from 'react';
import { Box } from '@mui/material';
import WideContainer from '../../components/wide-container';
import ServiceCard from './service-card';

const ServicesPage = () => {
  return (
      <Box component="main" sx={{ py: 3 }}>
          <WideContainer sx={{
      height: '100%',
      display: 'flex',
      alignItems: 'center',
    }}>
            <ServiceCard />
            <ServiceCard />
            <ServiceCard />
            <ServiceCard />
            <ServiceCard />
            <ServiceCard />
            <ServiceCard />
            <ServiceCard />
            
          </WideContainer>
        </Box>
   
  );
};

export default ServicesPage;
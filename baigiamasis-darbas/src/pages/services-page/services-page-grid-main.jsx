import React, { useState, useEffect } from "react";

import { Box, Grid, Container } from "@mui/material";
import React, { useEffect, useState } from 'react';
import { Box } from '@mui/material';
import APIService from '../../services/api-service';

const emptyServices = [...new Array(20)].map((_, id) => ({ id }));
const ServicesPageGrid = () => {
  const [services, setServices] = useState(emptyServices);

  useEffect(() => {
    (async () => {
      const fetchedServices = await APIService.fetchJoinedServices();
      setServices(fetchedServices);
    })();
  }, []);

  return (
    <Box sx={{
      height: '100%',
      display: 'flex',
      alignItems: 'center',
    }}>
      <ServicesPageGrid>
      </ServicesPageGrid>
    </Box>
  );
};

export default ServicesPageGridMain;

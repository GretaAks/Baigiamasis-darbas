import React, { useState, useEffect } from "react";

import { Box, Grid} from "@mui/material";

import ServiceCard from "./service-card";
import APIService from "../../services/api-service";

const ServicesPageGrid = () => {
  const [items, setItems] = useState(Array.from(Array(6)));

  useEffect(() => {
    (async () => {
      const fetchedItems = await APIService.fetchServices();
      setItems(fetchedItems);
    })();
  }, []);

  return (
    <Box>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {items.map((item, index) => (
          <Grid item xs={6} sm={4} md={4} key={index}>
            <ServiceCard title={item?.title ?? " "} description={item?.description ?? " "} image={item?.image ?? " "}>
              xs=2
            </ServiceCard>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ServicesPageGrid;

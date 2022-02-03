import React from 'react';
import { Box, Typography } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';



const styles = {
    box: {
        backgroundImage: 'url(https://source.unsplash.com/random)',  
        display: 'relative',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        height: 500,
        
    }
};

const HomePage = () => {
        return(
          <>
          <CssBaseline>
            <Box style={styles.box}>
              <Box sx={{
              position: 'relative',
              p: { xs: 3, md: 6 },
              pr: { md: 0 },
            }}>
                <Typography component="h1" variant="h3" color="white" gutterBottom position="center">
              Pagrindinis puslapis
            </Typography>
            <Typography variant="h5" color="white" paragraph>
              Lorem Ipsum.............................................................
            </Typography>
            <Box variant="contained" color="white" href="#">
              Sužinoti daugiau
            </Box>
            </Box>
            </Box>
            </CssBaseline>
            </>
        )
    
};

export default HomePage;
import React from 'react';
import { Box, Typography } from '@mui/material';

const AboutPage = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', p: 6, gap: 2 }}>
      <Typography variant="h3" component="h1" fontWeight="bold">
        About Us
      </Typography>
      <Typography variant="h5" component="p">
        Created by me
      </Typography>
    </Box>
  );
};

export default AboutPage;
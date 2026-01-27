import React from 'react';
import { Box, Typography } from '@mui/material';

const HomePage = () => {
  return (
    <Box
      sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', p: 6, gap: 2 }}
    >
      <Typography variant="h3" component="h1" fontWeight="bold">
        Welcome to the Home Page
      </Typography>
      <Typography variant="h5" component="p" align="center">
        To explore the variety of Rick and Morty characters, visit the Heroes page.
      </Typography>
    </Box>
  );
};

export default HomePage;
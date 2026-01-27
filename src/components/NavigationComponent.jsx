import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { BottomNavigation, BottomNavigationAction, Box } from '@mui/material';
import { Home, Info, Group } from '@mui/icons-material';

const NavigationComponent = () => {
  const currentLocation = useLocation();

  const navItems = [
    { label: 'Home', path: '/', icon: <Home /> },
    { label: 'Heroes', path: '/heroes', icon: <Group /> },
    { label: 'About', path: '/about', icon: <Info /> },
  ];

  const currentIndex = navItems.findIndex(
    item => item.path === currentLocation.pathname
  );

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
      <BottomNavigation
        showLabels
        value={currentIndex}
        onChange={(_, newValue) => {}}
        sx={{
          flexDirection: 'column',
          width: 'auto',
          height: 'auto',
          bgcolor: 'transparent',
          position: 'fixed',
          gap: 1,
        }}
      >
        {navItems.map((item) => (
          <BottomNavigationAction
            key={item.path}
            label={item.label}
            icon={item.icon}
            component={Link}
            to={item.path}
          />
        ))}
      </BottomNavigation>
    </Box>
  );    
};


export default NavigationComponent;

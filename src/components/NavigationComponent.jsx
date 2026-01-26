import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {BottomNavigation, BottomNavigationAction} from '@mui/material'
import {Home, Info} from '@mui/icons-material'
import HeroesIcon from '../assets/HeroesIcon.svg';
import Box from '@mui/material/Box';


const NavigationComponent = () => {
  const currentLocation = useLocation();

  const navItems = [
    { label: 'Home', path: '/', icon: <Home /> },
    { label: 'Heroes', path: '/heroes', icon: <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: 24, height: 24 }}><HeroesIcon style={{ width: 24, height: 24 }} /></Box> },
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

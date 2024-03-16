import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';

const Header = () => {
  return (
    <AppBar position="static" style={{ backgroundColor: 'black', height: '80px' }}>
      <Toolbar>
        <Typography variant="h6" style={{ color: 'white', fontSize: '30px', textAlign: 'center' }}>ENJOY ENGLISH</Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
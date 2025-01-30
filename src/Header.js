// Header.js
import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';


const Header = () => {
  return (
    <AppBar position="static" style={{ backgroundColor: '#333D79FF' }}>
      <a href="https://test-two-tau-58.vercel.app/" style={{ textDecoration: 'none' }}>
  <Toolbar>
    
      <img
        src="https://cdn.shopify.com/s/files/1/0736/1180/4946/files/logo-1.png"
        alt="Logo"
        style={{ width: '40px', marginRight: '10px', cursor: 'pointer' }}
      />
  
    <Typography variant="h6">
      Webpage Speed Test Tool
    </Typography>
    
  </Toolbar>
  </a>
</AppBar>

  );
};

export default Header;
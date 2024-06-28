// src/components/Navbar.js
import React from 'react';
import { AppBar, Toolbar, Typography, Button, Grid, Box } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();

  return (
    <AppBar position="static" sx={{ bgcolor: 'white', color: 'black' }}>
      <Toolbar>
        <Grid container alignItems="center">
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" component="div" sx={{ color: 'gold', textAlign: { xs: 'center', sm: 'left' } }}>
              LYXUX
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
              <Button color="inherit" component={Link} to="/" sx={{ mx: 1 }}>
                Home
              </Button>
              <Button
                color="inherit"
                component={Link}
                to="/blogs"
                sx={{ mx: 1, color: location.pathname === '/blogs' ? 'purple' : 'inherit' }}
              >
                Blogs
              </Button>
              <Button color="inherit" component={Link} to="/news" sx={{ mx: 1 }}>
                News
              </Button>
            </Box>
          </Grid>
          <Grid item xs={12} sm={4} sx={{ textAlign: { xs: 'center', sm: 'right' }, mt: { xs: 1, sm: 0 } }}>
            <Button sx={{ bgcolor: 'purple', color: 'white' }}>Subscribe</Button>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;

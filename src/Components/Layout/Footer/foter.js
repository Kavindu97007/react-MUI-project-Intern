import React from 'react';
import { Box, Typography, Container, Grid, Divider } from '@mui/material';

const Footer = () => {
  return (
    <Box sx={{ bgcolor: 'white', color: 'black', py: 20, borderTop: '1px solid black' }}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>Our Services</Typography>
            <Typography>IoT Development</Typography>
            <Typography>Mobile Development</Typography>
            <Typography>Enterprise Solutions</Typography>
            <Typography>Blockchain Development</Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>Quick Links</Typography>
            <Typography>About Us</Typography>
            <Typography>Contact Us</Typography>
            <Typography>Careers</Typography>
          </Grid>
          <Grid item xs={12} sm={4} sx={{ textAlign: { xs: 'center', sm: 'right' } }}>
            <Typography variant="h6" gutterBottom>Contact Us</Typography>
            <Typography>Phone: 123456789</Typography>
            <Typography>Email: hr@lyxux.com</Typography>
            <Typography>Location: London</Typography>
          </Grid>
        </Grid>
        <Box mt={2}>
          <Typography variant="body2" color="inherit" align="center">
            {'Copyright © '}
            LYXUX LTD {new Date().getFullYear()}
            {'. All rights reserved.'}
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}

export default Footer;

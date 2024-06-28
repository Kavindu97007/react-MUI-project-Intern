import React from 'react';
import { Grid, Container, Typography, Box } from '@mui/material';
import NewsCard from '../../Components/newsCard';

const NewsPage = () => {
  return (
    <Container maxWidth="lg" sx={{ paddingTop: 4 }}>
      <Box sx={{ textAlign: 'center', marginBottom: 3 }}>
        <Typography variant="h4" sx={{ color: 'purple' }}>News</Typography>
      </Box>
      <Grid container spacing={3} justifyContent="center">
        {/* Each Grid item will take 3 columns on extra small screens (xs), and 3 columns on small (sm), medium (md), and large (lg) screens */}
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <NewsCard

            image=""
            title="Example Blog Title 1"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <NewsCard
            image=""
            title="Example Blog Title 1"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <NewsCard
            image=""
            title="Example Blog Title 1"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <NewsCard
            image=""
            title="Example Blog Title 1"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          />
        </Grid>
        {/* Add more NewsCard components as needed */}
      </Grid>
    </Container>
  );
}

export default NewsPage;

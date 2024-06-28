import React from 'react';
import { Grid, Container, Typography, Box } from '@mui/material';
import OutlinedCard from '../../Components/card';

const BlogPage = () => {
  return (
    <Container maxWidth="lg" sx={{ paddingTop: 4 }}>
      <Box sx={{ textAlign: 'center', marginBottom: 3 }}>
        <Typography variant="h4" sx={{ color: 'purple' }}>Blog</Typography>
      </Box>
      <Grid container spacing={3} justifyContent="center">
        {/* Each Grid item will take 3 columns on extra small screens (xs), and 3 columns on small (sm), medium (md), and large (lg) screens */}
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <OutlinedCard
            title="Example Blog Title 1"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            time="July 1, 2024"
            comments={5}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <OutlinedCard
            title="Example Blog Title 2"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            time="July 1, 2024"
            comments={5}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <OutlinedCard
            title="Example Blog Title 3"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            time="July 1, 2024"
            comments={5}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <OutlinedCard
            title="Example Blog Title 4"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            time="July 1, 2024"
            comments={5}
          />
        </Grid>
        {/* Add more OutlinedCard components as needed */}
      </Grid>
    </Container>
  );
}

export default BlogPage;

import React from 'react';
import { Card, CardContent, Typography, CardActions, Button, CardMedia } from '@mui/material';

const NewsCard = ({ imageUrl, title, description }) => {
  return (
    <Card sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      <CardMedia
        component="img"
        height="50%"
        image={imageUrl}
        alt={title}
      />
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
          {title}
        </Typography>
        <Typography variant="body2" sx={{ mt: 1 }}>
          {description}
        </Typography>
      </CardContent>
      
    </Card>
  );
}

export default NewsCard;

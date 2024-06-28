import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const OutlinedCard = ({ title, description, time, comments }) => {
  return (
    <Box sx={{ minWidth: 275, marginTop: 2, padding: 2 }}>
      <Card variant="outlined" sx={{ width: 275, height: '100%', display: 'flex', flexDirection: 'column' }}>
        <CardContent>
          <Typography variant="h5" component="div" sx={{ color: 'purple' }}>
            {title}
          </Typography>
          <Typography variant="body2">
            {description}
            <br />
          </Typography>
          <Typography sx={{ mt: 2 }} variant="body2" color="text.secondary">
            by A.K, {time}, {comments} Comment{comments !== 1 ? 's' : ''}
          </Typography>
        </CardContent>
        <CardActions>
          <Button className="cardButton" variant="outlined" size="small" sx={{ border: '1px solid #000', fontWeight: 'bold', color: '#000' }}>Read More</Button>
        </CardActions>
      </Card>
    </Box>
  );
}

export default OutlinedCard;

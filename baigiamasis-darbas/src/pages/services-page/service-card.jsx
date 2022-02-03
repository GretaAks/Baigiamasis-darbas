import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


export default function ServiceCard({image, title, description}) {
  return (
    <Card sx={{ maxWidth: 345, mt:4 }}>
      <CardMedia
        component="img"
        height="140"
        image={image}
        alt={title}
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button  size="small" variant="contained" color="success">Pirkti</Button>
        <Button sx= {{color:"green"}}size="small" variant="contained" color="grey">Daugiau</Button>
      </CardActions>
    </Card>
  );
};

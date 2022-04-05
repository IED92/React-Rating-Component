import * as React from 'react';
import './styles.css'
import Card from '@mui/material/Card';
import logo from '../../logo.svg';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import styled from '@emotion/styled';

const StyledCard = styled(Card)({})

export default function RatingCard() {
  return (
    <StyledCard className='ratingCard'>
      <CardContent className='cardContent'>
      <div className='starButton'>
        <img src={logo} className="starIcon" alt="star" />
      </div>
        <Typography className="header" variant="h5" color="white" gutterBottom>
          How did we do?
        </Typography>
        <Typography variant="body2" color="white" component="div">
          Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!
        </Typography>
        <Typography variant="body1" color="white">
          1 2 3 4 5
        </Typography>
      </CardContent>
      <CardActions className='cardActions'>
        <Button size="small">Submit</Button>
      </CardActions>
    </StyledCard>
  );
}
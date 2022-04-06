import * as React from 'react';
import './styles.css'
import Card from '@mui/material/Card';
import logo from '../../logo.svg';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import { IconButton } from '@mui/material';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import styled from '@emotion/styled';

const StyledCard = styled(Card)({})

const StyledIconButton = styled(IconButton)({})

export default function RatingCard() {
  return (
    <StyledCard className='ratingCard'>
      <CardContent className='cardContent'>
      <StyledIconButton className='starButton'>
        <img src={logo} className="starIcon" alt="star" />
      </StyledIconButton>
        <Typography className="header" variant="h5" color="white" gutterBottom>
          How did we do?
        </Typography>
        <Typography className='content' variant="p" color="white" component="div">
          Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!
        </Typography>
        <div className='container'>
          <StyledIconButton className='ratingIcon'><p>1</p></StyledIconButton>
          <StyledIconButton className='ratingIcon'><p>2</p></StyledIconButton>
          <StyledIconButton className='ratingIcon'><p>3</p></StyledIconButton>
          <StyledIconButton className='ratingIcon'><p>4</p></StyledIconButton>
          <StyledIconButton className='ratingIcon'><p>5</p></StyledIconButton>
        </div>
      </CardContent>
      <CardActions className='cardActions'>
        <Button className='submitButton' size="large"><p>Submit</p></Button>
      </CardActions>
    </StyledCard>
  );
}
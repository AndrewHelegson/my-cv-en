import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { Typography, Card, CardActionArea, CardMedia, CardContent } from '@mui/material'

function MyCarousel(props) {
  return (
    <Carousel
      sx={{
        width: 645,
        /* height: 100 */
      }}

    >
      <Card sx={{ maxWidth: 645 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image="https://media.newyorker.com/photos/59095bb86552fa0be682d9d0/master/w_2560%2Cc_limit/Monkey-Selfie.jpg"
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Lizard
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over 6,000
              species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <Card
        sx={{
          maxWidth: 645,
          Height: 645
        }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image="https://i.natgeofe.com/n/82fddbcc-4cbb-4373-bf72-dbc30068be60/drill-monkey-01_2x3.jpg"
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Meme
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over 6,000
              species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Carousel>
  )
}



export default MyCarousel
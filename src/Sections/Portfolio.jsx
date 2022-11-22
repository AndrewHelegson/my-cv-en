import { Box, Card, Typography } from '@mui/material'
import React from 'react'
import Card1 from './websites/Card1'
import { Fade } from 'react-awesome-reveal';
import image1 from '../icons/sneackers.gif'
import image2 from '../icons/weather.gif'
import image3 from '../icons/todos.gif'
const images = [
    {
        name: 'Sneackers shop',
        img: image1,
        text:'Adaptive React app using Redux toolkit using Redux Toolkit local storage, Tailwind',
        link:'https://sneackers-shop-redux-tailwind.vercel.app/'
    },
    {
        name: 'Weather app',
        img: image2,
        text:'Adaptive React app to get current weather and forecast using Open Weather API, Tailwind.',
        link:'https://andrewhelegson.github.io/weather-app/'
    },
    {
        name: 'Todo list',
        img: image3,
        text:'Simple todo list using react hooks and local storage',
        link:'https://andrewhelegson.github.io/local-storage-todo-list-practice/'
    },
]

const Portfolio = () => {
    return (
        <Box>
            <Card
                id="portfolio"
                sx={{
                    borderRadius: "0",
                    boxShadow: "none",
                    marginTop: {
                        sm: "5%"
                    },
                    borderBottom: "1px solid #0000ff"
                }}
            >
                <Typography
                    variant="h5"
                    sx={{
                        fontWeight: 600,
                        color: "#0000ff"
                    }}
                >
                    Portfolio
                </Typography>
            </Card>
            <Box

                gap={5}
                sx={{
                    marginTop: "0.5%",
                    display: "flex",
                    flexDirection: "row",
                    flexWrap: "wrap",
                    display: {
                        xs: "none",
                        sm: "flex"
                    },
                    justifyContent: "space-around"
                }}>
                <Fade direction='up' cascade={true} duration={600} >
                {images.map((image)=><Card1 image={image}  />)}
                    {/* <Card1 />
                    <Card1 />
                    <Card1 />
                    <Card1 />
                    <Card1 />
                    <Card1 /> */}
                </Fade>
            </Box>
            <Box
                sx={{
                    display: {
                        xs: "flex",
                        sm: "none"
                    }
                }}
            >
                 {images.map((image)=><Card1 image={image}  />)}
                {/* <Card1 />
                <Card1 />
                <Card1 />
                <Card1 />
                <Card1 />
                <Card1 /> */}
            </Box>
        </Box >
    )
}

export default Portfolio

import { Typography, Box, Link } from '@mui/material'
import React from 'react'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Link as MyLink } from "react-scroll"
import { Fade } from 'react-awesome-reveal';
const Title = () => {
    return (
        <Box

            sx={{
                display: "flex",
                flexDirection: {
                    xs: "column",
                    sm: "row"
                },
                marginTop: {
                    xs: "6rem"
                },

                alignItems: {
                    xs: "start",
                    sm: "end"
                },
                justifyContent: "space-around"
            }}
        >
            <Box
                sx={{
                    display: "flex",
                    marginTop: "10%",
                    flexDirection: "column",
                    height: "80%"
                }}
            >
                <Typography
                    variant="h1"
                    sx={{
                        fontSize: {
                            xs: "3rem"
                        }
                    }}
                >
                    Andrei Khrustikov
                </Typography>
                <Typography
                    variant="h3"
                    sx={{
                        fontWeight: 300,
                        fontSize: {
                            xs: "2rem"
                        },
                        marginTop: {
                            xs: "1rem"
                        }
                    }}
                >
                    Frontend developer
                </Typography>
                <Fade direction="up" >
                    <Box
                        gap={1}
                        sx={{
                            display: "flex",
                            flexDirection: "row",
                            marginTop: "20px",

                        }}
                    >
                        <Link
                            target="_blank"
                            href="https://www.linkedin.com/in/andrei-khrustikov-155371238/"
                        >
                            <LinkedInIcon
                                fontSize="large"
                                sx={{
                                    color: "#000"
                                }}
                            />
                        </Link>
                        <Link
                            target="_blank"
                            href="https://www.facebook.com/andrew.khrustikov"
                        >
                            <FacebookIcon
                                fontSize="large"
                                sx={{
                                    color: "#000"
                                }}
                            />
                        </Link>
                        <Link
                            target="_blank"
                            href="https://github.com/AndrewHelegson" >
                            <GitHubIcon
                                fontSize="large"
                                sx={{
                                    color: "#000"
                                }}
                            />
                        </Link>
                    </Box>
                </Fade>
            </Box>
            <Box
                sx={{
                    maxWidth: {
                        xs: "100%",
                        sm: "30%"
                    },
                    marginTop: {
                        xs: "1rem"
                    }
                }}>
                <Typography
                    align="justify"
                    sx={{
                        marginTop: {
                            xs: "3rem"
                        }
                    }}
                >
                    Hi! My name is Andrei, I'm a frontend developer. I started actively studying Javascript and React in 2020. I have experience in developing React web applications using various libraries and environments, developing and layout software for tasks of any complexity. You can get acquainted with my projects in my github profile, and also see some <Link
                        sx={{
                            cursor: "pointer",
                            color: "#000000",
                            fontWeight: "bold",
                            textDecoration: "none"
                        }}>
                        <MyLink to="portfolio" spy={true} smooth={true} offset={-10} duration={600} >here.</MyLink>
                    </Link>

                </Typography>
            </Box>
        </Box>
    )
}

export default Title

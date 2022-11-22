import { Box, Card, Typography } from '@mui/material'
import React from 'react'

const Experience = () => {
    return (
        <Box>
            <Card
                id="experience"
                sx={{
                    borderRadius: "0",
                    boxShadow: "none",
                    marginTop: {
                        xs: "60%",
                        sm: "15%"
                    },
                    borderBottom: "1px solid #0000ff"
                }}
            >
                <Typography
                    id="#test1"
                    variant="h5"
                    sx={{
                        fontWeight: 600,
                        color: "#0000ff"
                    }}
                >
                    Experience
                </Typography>
            </Card>
            <Box
                sx={{
                    display: "flex",
                    flexDirection: {
                        xs: "column",
                        sm: "row"
                    },
                    justifyContent: "space-between",
                    marginRight: "20px",
                    marginTop: "40px"
                }}
            >
                <Typography
                    variant="h4"
                >
                    Commercial assistant
                    (Junior Frontend developer)
                </Typography>
                <Typography
                    variant="h5"
                    sx={{
                        marginTop: {
                            xs: "1rem"
                        }
                    }}
                >
                    october 2020 - august 2022
                </Typography>
            </Box>
            <Box>

                <Typography>
                    Recordati LLC (OOO Rusfic)
                </Typography>

                <Typography
                    sx={{
                        marginTop: {
                            xs: "1rem",
                            sm: "2%"
                        },
                        width: {
                            xs: "100%",
                            sm: "60%"
                        }
                    }}
                >
                    Development of design and layout of websites for training and work purposes employees professional development(using Figma, <strong>React JS, materail UI, axios, redux libraries</strong>)



                </Typography>
                <Typography
                    sx={{
                        marginTop: {
                            xs: "1rem",
                            sm: "2%"
                        },
                        width: {
                            xs: "100%",
                            sm: "60%"
                        }
                    }}
                >
                    Development of websites for the distribution department: statistics on the prices of wholesalers and pharmacy chains, formation of a single reference base for managers (using <strong>React, Sass, axios, redux</strong>)
                </Typography>
                <Typography
                    sx={{
                        marginTop: {
                            xs: "1rem",
                            sm: "2%"
                        },
                        width: {
                            xs: "100%",
                            sm: "60%"
                        }
                    }}
                >
                    Development and layout of a system for approving contracts, invoices and other documents within the company (using <strong>CSS, HTML, native Javascript and proprietary libraries</strong>)
                </Typography>
                <Typography
                    sx={{
                        marginTop: {
                            xs: "1rem",
                            sm: "2%"
                        },
                        width: {
                            xs: "100%",
                            sm: "60%"
                        }
                    }}
                >
                    Processing of closing documents and interaction with contractors and regional managers throughout the country.
                    Translation of letters and business correspondence in English between subsidiaries of Recordati LLC.
                </Typography>
            </Box>
        </Box>
    )
}

export default Experience

import { Box, Card, Typography } from '@mui/material'
import React from 'react'

const Education = () => {
    return (
        <Box>
            <Card
                id="education"
                sx={{
                    borderRadius: "0",
                    boxShadow: "none",
                    marginTop: {
                        xs: "35%",
                        sm: "15%"
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
                    Education
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
                    marginTop: {
                        xs: "2rem",
                        sm: "6rem"
                    }
                }}
            >
                <Typography
                    variant="h4"
                    sx={{
                        fontSize: {
                            xs: "2rem"
                        }
                    }}
                >
                    Russian State University of Justice
                </Typography>
                <Typography
                    variant="h5"
                >
                    2018 - 2022
                </Typography>

            </Box>
            <Typography>
                Jurisprudence
            </Typography>
            <Box
                sx={{
                    display: "flex",
                    flexDirection: {
                        xs: "column",
                        sm: "row"
                    },
                    justifyContent: "space-between",
                    marginRight: {
                        xs: "5px",
                        sm: "20px"
                    },
                    marginTop: {
                        xs: "2rem",
                        sm: "6rem"
                    }
                }}
            >
                <Typography
                    variant="h4"
                    sx={{
                        fontSize: {
                            xs: "2rem"
                        }
                    }}
                >
                    College by Russian State University of Justice
                </Typography>
                <Typography
                    variant="h5"
                >
                    2014 - 2018
                </Typography>

            </Box>
            <Typography>
                Law and organization of social security
            </Typography>
            <Box
                sx={{
                    display: "flex",
                    flexDirection: {
                        xs: "column",
                        sm: "row"
                    },
                    justifyContent: "space-between",
                    marginRight: "20px",
                    marginTop: {
                        xs: "2rem",
                        sm: "6rem"
                    }
                }}
            >
                <Typography
                    variant="h4"
                    sx={{
                        fontSize: {
                            xs: "2rem"
                        }
                    }}
                >
                    Cambridge Regional College
                </Typography>
                <Typography
                    variant="h5"
                >
                    2016
                </Typography>


            </Box>
            <Typography>
                IELTS preparation and law
            </Typography>
            <Typography>
                English level B2 (upper intermediate)
            </Typography>
        </Box>
    )
}

export default Education

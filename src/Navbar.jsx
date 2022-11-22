import { AppBar, Box, Toolbar, Button, ButtonGroup, Link, LinearProgress, useScrollTrigger, Slide, Typography } from '@mui/material'
import { Link as MyLink } from "react-scroll"
import { useEffect, useState } from "react";
import { Stack } from '@mui/system';
/////////////1
function HideOnScroll(props) {
    const { children, window } = props;
    const trigger = useScrollTrigger({
        target: window ? window() : undefined,
    });

    return (
        <Slide appear={false} direction="down" in={!trigger}>
            {children}
        </Slide>
    );
}
const Navbar = (props) => {
    const buttons = [
        {
            route: "experience",
            labael: "Experience"
        },
        {
            route: "education",
            labael: "Education"
        },
        {
            route: "tech_stack",
            labael: "Tech stack"
        },
        {
            route: "portfolio",
            labael: "Portfolio"
        },
        {
            route: "contacts",
            labael: "Contacts"
        },
    ]
    ////
    const [scrollTop, setScrollTop] = useState(0);

    const onScroll = () => {
        const winScroll = document.documentElement.scrollTop;
        const height =
            document.documentElement.scrollHeight -
            document.documentElement.clientHeight;
        const scrolled = (winScroll / height) * 100;
        setScrollTop(scrolled);
    };

    useEffect(() => {
        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <Box id="title" >
            <Button><Link
                href="https://andrewhelegson.github.io/my-cv-ru"
                underline="none" ><Typography
                    color="#000000"
                    sx={{
                        fontWeight: "500",
                        display: {
                            sm: "none"
                        }
                    }}
                >RU</Typography></Link></Button>
            <HideOnScroll {...props}>
                <AppBar
                    position="fixed"
                    sx={{
                        backgroundColor: "white",
                        boxShadow: "none",
                        borderBottom: "1px solid black",

                    }}>
                    <Toolbar sx={{
                        display: {
                            xs: "none",
                            sm: "flex"
                        },
                        justifyContent: "end",

                    }}>
                        <ButtonGroup
                            variant="string"
                            aria-label="outlined primary button group"
                            sx={{
                                color: "#000000",
                                display: {
                                    xs: "none",
                                    sm: "flex"
                                }
                            }}
                        >
                            {buttons.map((b) => {
                                return (

                                    <Button><MyLink to={b.route} spy={true} smooth={true} offset={-10} duration={600} >{b.labael}</MyLink></Button>
                                )
                            })}
                            <Button><Link
                                href="http://localhost:3001/"
                                underline="none" ><Typography
                                    color="#000000"
                                    sx={{
                                        fontWeight: "500"
                                    }}
                                >RU</Typography></Link></Button>
                        </ButtonGroup>
                    </Toolbar>

                </AppBar>
            </HideOnScroll>
            <AppBar
                sx={{
                    boxShadow: "none"
                }} >
                <Stack>
                    <LinearProgress
                        color='secondary'
                        sx={{
                            height: "1px",
                            color: "#000000",
                            backgroundColor: "#ffffff",
                            opacity: "1",
                            "& .MuiLinearProgress-barColorSecondary": {
                                backgroundColor: `#000000`,

                            }
                        }}
                        variant="determinate" value={scrollTop} />
                </Stack>
            </AppBar>
        </Box>
    )
}

export default Navbar

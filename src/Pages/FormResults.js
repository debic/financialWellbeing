import { CardContent, Container, Divider, Typography, Grid, Box } from '@mui/material';
import React from 'react'

export default function FormResults(props) {
    const { score, formQuestions } = props;
    return (
        <Container component="main" sx={{ backgroundColor: "#F8F7F3", width: "100%", pt: 10 }}>

            <Typography sx={{ m: 1, mb: 3, display: "flex", justifyContent: "flex-start", fontWeight: "bold" }} variant="h4">
                Thank you for answering the survey
            </Typography>

            <Typography sx={{ m: 1, mb: 3, display: "flex", textAlign: "start", justifyContent: "flex-start", color: "#F99746", fontWeight: "bold" }} variant="h6">
                {`Your score is ${score}`}
            </Typography>

            <Divider />
            <CardContent>
                <Grid container sx={{ border: 1, mb: 2, flexDirection: 'column', alignItems: 'flex-start', p:1 }}>
                    <Box sx={{fontWeight: 'bold'}}>Because of my money situation I will never have the things I want in life</Box>
                    <Box>Not at all</Box>
                    <Box>Your score was lower than most of the citizens. Here is a link to improve... </Box>
                </Grid>
                <Grid container sx={{ border: 1, mb: 2, flexDirection: 'column', alignItems: 'flex-start', p:1 }}>
                    <Box sx={{fontWeight: 'bold'}}>I am just getting by financially</Box>
                    <Box>Not at all</Box>
                    <Box>Your score was lower than most of the citizens. Here is a link to improve...</Box>
                </Grid>

            </CardContent>

        </Container>
    )
}

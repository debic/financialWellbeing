import { CardContent, Container, Divider, Typography, Grid } from '@mui/material';
import React from 'react'

export default function FormResults(props) {
    const { score } = props;
    return (
        <Container component="main" sx={{ backgroundColor: "#F8F7F3", width: "100%", pt: 10 }}>

            <Typography sx={{ m: 1, mb: 3, display: "flex", justifyContent: "flex-start", fontWeight: "bold" }} variant="h4">
                Thank you for answering the survey
            </Typography>

            <Typography sx={{ m: 1, mb: 3, display: "flex", textAlign: "start", justifyContent: "flex-start", color: "#F99746", fontWeight: "bold" }} variant="h6">
                {`Your score is ${score.score}`}
            </Typography>

            <Divider />
            <CardContent>
                <Grid container spacing={5}>

                </Grid>
            </CardContent>

        </Container>
    )
}

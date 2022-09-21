import { Card, CardContent, Container, Divider, Typography, Grid, Box } from '@mui/material';
import React from 'react'

export default function FormResults(props) {
    const { scores } = props;
    return (
        <Container component="main" maxWidth="lg" sx={{ mt: 12, mb: 2, backgroundColor: "#F8F7F3" }}>

            <Typography sx={{ m: 1, mb: 3, display: "flex", justifyContent: "flex-start", fontWeight: "bold" }} variant="h4">
                Thank you for answering the survey
            </Typography>

            <Typography sx={{ m: 1, mb: 3, display: "flex", textAlign: "start", justifyContent: "flex-start" }} variant="h6">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.
                Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec,
                pellentesque eu, pretium quis, sem
            </Typography>

            <Divider />
            <CardContent>
                <Grid container spacing={5}>

                </Grid>
            </CardContent>

        </Container>
    )
}

import { Box, Button, Card, CardContent, Container, Divider, Grid, InputLabel, MenuItem, TextField, Typography } from '@mui/material'
import axios from 'axios';
import React, { useState } from 'react'

export default function MainForm(props) {
  const { setScore, setFormQuestions } = props;
  const [formData, setFormData] = useState({
    'What is your name?': "",
    'How old are you?': "",
    'How many houses do you own?': "",
    'How many children do you have?': "",
    'Do you save money?': "",
    q6: "",
    q7: "",
    q8: "",
    q9: "",
    q10: "",
    q11: "",
    q12: "",
    q13: "",
    q14: "",
    q15: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  function handleChange(event) {
    setFormData((previousState) => ({
      ...previousState,
      [event.target.id]: event.target.value,
    }));
  }

  function handleChangeSelect(event) {
    setFormData((previousState) => ({
      ...previousState,
      [event.target.name]: event.target.value,
    }));
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setIsLoading(true);
    const finalData = {
      ...formData,
      'How old are you?': parseInt(formData['How old are you?']),
      'How many houses do you own?': parseInt(formData['How many houses do you own?']),
      'How many children do you have?': parseInt(formData['How many children do you have?']),
    };
    setFormQuestions(finalData);
    try {
      const response = await axios.post(`http://localhost:8080/surveys`, formData,
        {
          headers: {
            "Content-Type": "application/json"
          }
        });
      setIsLoading(false);
      setScore(response.data);
    } catch (error) {
      console.log(error);
      setScore(null);
    }
    setIsLoading(false);
  }

  return (
    <Container component="main" sx={{ backgroundColor: "#F8F7F3", width: "100%", pt: 10 }}>
      <Card sx={{ border: 0, boxShadow: 0, backgroundColor: "#F8F7F3", width: "100%" }}>

        <Typography sx={{ p: 1, pb: 3, display: "flex", justifyContent: "flex-start", fontWeight: "bold" }} variant="h4">
          Annual financial wellbeing survey of “City”
        </Typography>

        <Typography sx={{ p: 1, pb: 3, display: "flex", textAlign: "start", justifyContent: "flex-start" }} variant="h6">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.
          Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec,
          pellentesque eu, pretium quis, sem
        </Typography>

        <Divider />
        <CardContent>
          <Grid container spacing={5}>

            <Grid item xs={12} sx={{ mb: 0 }}>
              <InputLabel sx={{ justifyContent: "start", display: "flex", mb: 1 }}>What is your name?</InputLabel>
              <TextField
                required
                fullWidth
                id="What is your name?"
                name="What is your name?"
                variant="standard"
                placeholder="Enter your answer"
                value={formData['What is your name?']}
                onChange={handleChange}
              />
            </Grid>

            <Grid item xs={12}>
              <InputLabel sx={{ justifyContent: "start", display: "flex", mb: 1 }}>How old are you?</InputLabel>
              <TextField
                required
                fullWidth
                type="number"
                id="How old are you?"
                name="How old are you?"
                variant="standard"
                placeholder="Enter your answer"
                value={formData['How old are you?']}
                onChange={handleChange}
              />
            </Grid>

            <Grid item xs={12}>
              <InputLabel sx={{ justifyContent: "start", display: "flex", mb: 1 }}>How many houses do you own?</InputLabel>
              <TextField
                required
                fullWidth
                type="number"
                id="How many houses do you own?"
                name="How many houses do you own?"
                variant="standard"
                placeholder="Enter your answer"
                value={formData['How many houses do you own?']}
                onChange={handleChange}
              />
            </Grid>

            <Grid item xs={12}>
              <InputLabel sx={{ justifyContent: "start", display: "flex", mb: 1 }}>How many children do you have?</InputLabel>
              <TextField
                required
                fullWidth
                type="number"
                id="How many children do you have?"
                name="How many children do you have?"
                variant="standard"
                placeholder="Enter your answer"
                value={formData['How many children do you have?']}
                onChange={handleChange}
              />
            </Grid>

            <Grid item xs={12}>
              <InputLabel sx={{ justifyContent: "start", display: "flex", mb: 1 }}>Do you save money?</InputLabel>
              <TextField
                required
                fullWidth
                id="Do you save money?"
                name="Do you save money?"
                value={formData['Do you save money?']}
                select
                onChange={handleChangeSelect}
              >
                <MenuItem value="">
                  <em>Choose an option</em>
                </MenuItem>
                <MenuItem value={true}>
                  Yes
                </MenuItem>
                <MenuItem value={false}>
                  No
                </MenuItem>

              </TextField>
            </Grid>

            <Grid item xs={12}>
              <InputLabel sx={{ justifyContent: "start", display: "flex", mb: 1 }}>Giving a gift, would it put a strain on your finances for the month?</InputLabel>
              <TextField
                required
                fullWidth
                id="Giving a gift, would it put a strain on your finances for the month?"
                name="Giving a gift, would it put a strain on your finances for the month?"
                value={formData['Giving a gift, would it put a strain on your finances for the month?']}
                select
                onChange={handleChangeSelect}
              >
                <MenuItem value="">
                  <em>Choose an option</em>
                </MenuItem>
                <MenuItem value={"Never"}>
                  Never
                </MenuItem>
                <MenuItem value={"Rarely"}>
                  Rarely
                </MenuItem>
                <MenuItem value={"Sometimes"}>
                  Sometimes
                </MenuItem>
                <MenuItem value={"Often"}>
                  Often
                </MenuItem>
                <MenuItem value={"Always"}>
                  Always
                </MenuItem>

              </TextField>
            </Grid>

          </Grid>
        </CardContent>
        <Divider />
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            p: 2,
          }}
        >
          <Button color="primary"
            variant="contained"
            onClick={handleSubmit}
            disabled={isLoading}
          >
            Send
          </Button>
        </Box>
      </Card>
    </Container>
  )
}

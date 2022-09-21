import { Box, Button, Card, CardContent, Container, Divider, Grid, InputLabel, MenuItem, TextField, Typography } from '@mui/material'
import axios from 'axios';
import React, { useState, useContext } from 'react'
import Context from './Context/Context';

export default function MainForm(props) {
  const { setScore, setFormQuestions } = props;
  const { q1, q2, q3, q4, q5, q6, q7 } = useContext(Context)
  const [formData, setFormData] = useState({
    [q1._id]: "",
    [q2._id]: "",
    [q3._id]: "",
    [q4._id]: "",
    [q5._id]: "",
    [q6._id]: "",
    [q7._id]: "",
  });

  console.log(formData)

  const [isLoading, setIsLoading] = useState(false);



  function handleChangeSelect(event) {
    setFormData((previousState) => ({
      ...previousState,
      [event.target.name]: event.target.value,
    }));
  }

  async function handleSubmit(event) {
    try {
      const response = axios.post(`http://localhost:8080/surveys`, formData);
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


            <Grid item xs={12}>
              <InputLabel sx={{ justifyContent: "start", display: "flex", mb: 1 }}>{q1.text}</InputLabel>
              <TextField
                required
                fullWidth
                id={[q1._id]}
                name={[q1._id]}
                value={formData[q1._id]}
                select
                onChange={handleChangeSelect}
                label="Choose an option"
              >

                <MenuItem value={"0"}>
                  Never
                </MenuItem>
                <MenuItem value={"1"}>
                  Rarely
                </MenuItem>
                <MenuItem value={"2"}>
                  Sometimes
                </MenuItem>
                <MenuItem value={"3"}>
                  Often
                </MenuItem>
                <MenuItem value={"4"}>
                  Always
                </MenuItem>

              </TextField>
            </Grid>

            <Grid item xs={12}>
              <InputLabel sx={{ justifyContent: "start", display: "flex", mb: 1 }}>{q2.text}</InputLabel>
              <TextField
                required
                fullWidth
                id={[q2._id]}
                name={[q2._id]}
                value={formData[q2._id]}
                select
                onChange={handleChangeSelect}
                label="Choose an option"
              >

                <MenuItem value={"0"}>
                  Never
                </MenuItem>
                <MenuItem value={"1"}>
                  Rarely
                </MenuItem>
                <MenuItem value={"2"}>
                  Sometimes
                </MenuItem>
                <MenuItem value={"3"}>
                  Often
                </MenuItem>
                <MenuItem value={"4"}>
                  Always
                </MenuItem>

              </TextField>
            </Grid>

            <Grid item xs={12}>
              <InputLabel sx={{ justifyContent: "start", display: "flex", mb: 1 }}>{q3.text}</InputLabel>
              <TextField
                required
                fullWidth
                id={[q3._id]}
                name={[q3._id]}
                value={formData[q3._id]}
                select
                onChange={handleChangeSelect}
                label="Choose an option"
              >

                <MenuItem value={"0"}>
                  Never
                </MenuItem>
                <MenuItem value={"1"}>
                  Rarely
                </MenuItem>
                <MenuItem value={"2"}>
                  Sometimes
                </MenuItem>
                <MenuItem value={"3"}>
                  Often
                </MenuItem>
                <MenuItem value={"4"}>
                  Always
                </MenuItem>

              </TextField>
            </Grid>

            <Grid item xs={12}>
              <InputLabel sx={{ justifyContent: "start", display: "flex", mb: 1 }}>{q4.text}</InputLabel>
              <TextField
                required
                fullWidth
                id={[q4._id]}
                name={[q4._id]}
                value={formData[q4._id]}
                select
                onChange={handleChangeSelect}
                label="Choose an option"
              >

                <MenuItem value={"0"}>
                  Never
                </MenuItem>
                <MenuItem value={"1"}>
                  Rarely
                </MenuItem>
                <MenuItem value={"2"}>
                  Sometimes
                </MenuItem>
                <MenuItem value={"3"}>
                  Often
                </MenuItem>
                <MenuItem value={"4"}>
                  Always
                </MenuItem>

              </TextField>
            </Grid>

            <Grid item xs={12}>
              <InputLabel sx={{ justifyContent: "start", display: "flex", mb: 1 }}>{q5.text}</InputLabel>
              <TextField
                required
                fullWidth
                id={[q5._id]}
                name={[q5._id]}
                value={formData[q5._id]}
                select
                onChange={handleChangeSelect}
                label="Choose an option"
              >

                <MenuItem value={"0"}>
                  Never
                </MenuItem>
                <MenuItem value={"1"}>
                  Rarely
                </MenuItem>
                <MenuItem value={"2"}>
                  Sometimes
                </MenuItem>
                <MenuItem value={"3"}>
                  Often
                </MenuItem>
                <MenuItem value={"4"}>
                  Always
                </MenuItem>

              </TextField>
            </Grid>

            <Grid item xs={12}>
              <InputLabel sx={{ justifyContent: "start", display: "flex", mb: 1 }}>{q6.text}</InputLabel>
              <TextField
                required
                fullWidth
                id={[q6._id]}
                name={[q6._id]}
                value={formData[q6._id]}
                select
                onChange={handleChangeSelect}
                label="Choose an option"
              >

                <MenuItem value={"0"}>
                  Never
                </MenuItem>
                <MenuItem value={"1"}>
                  Rarely
                </MenuItem>
                <MenuItem value={"2"}>
                  Sometimes
                </MenuItem>
                <MenuItem value={"3"}>
                  Often
                </MenuItem>
                <MenuItem value={"4"}>
                  Always
                </MenuItem>

              </TextField>
            </Grid>

            <Grid item xs={12}>
              <InputLabel sx={{ justifyContent: "start", display: "flex", mb: 1 }}>{q7.text}</InputLabel>
              <TextField
                required
                fullWidth
                id={[q7._id]}
                name={[q7._id]}
                value={formData[q7._id]}
                select
                onChange={handleChangeSelect}
                label="Choose an option"
              >

                <MenuItem value={"0"}>
                  Never
                </MenuItem>
                <MenuItem value={"1"}>
                  Rarely
                </MenuItem>
                <MenuItem value={"2"}>
                  Sometimes
                </MenuItem>
                <MenuItem value={"3"}>
                  Often
                </MenuItem>
                <MenuItem value={"4"}>
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

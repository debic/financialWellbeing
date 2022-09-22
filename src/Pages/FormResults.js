import { CardContent, Container, Divider, Typography, Grid, Box } from '@mui/material';
import React,{useContext, useEffect} from 'react'
import Context from '../Components/Context/Context'

export default function FormResults(props) {
    const{ q1, q2, q3, q4, q5, q6, q7, formData, generalScore, userScore} = useContext(Context)

    useEffect(() => {
        console.log(formData)
    }, [])

    return (
        <Container component="main" sx={{ backgroundColor: "#F8F7F3", width: "100%", pt: 10 }}>

                <Typography sx={{ m: 1, mb: 3, display: "flex", justifyContent: "flex-start", fontWeight: "bold" }} variant="h4">
                    Thank you for answering the survey
                </Typography>

                <Box sx={{ flexDirection: 'row', display: "flex"}}>

                    <Box sx={{ mr: 3, p:1, textAlign: "start", color: "#F99746"}}>
                        <Box sx={{ width: 170, height: 10, display: "flex", textAlign: "start", justifyContent: "flex-start", fontSize: 15 }} >
                                {`Your score is`}
                        </Box>
                        <Box sx={{fontSize: 70, fontWeight: 'bold'}}>
                        <div>{userScore}</div>                        
                        </Box>
                    </Box>

                    <Box sx={{ textAlign: "start", p:1, color: "rgba(110, 187, 229, 0.85)"}}>
                        <Box sx={{ width: 170, height: 10, display: "flex", textAlign: "start", justifyContent: "flex-start", fontSize: 15 }}>
                            {`The score of your city is`}
                        </Box>
                        <Box sx={{fontSize: 70, fontWeight: 'bold'}}>
                        <div>{generalScore}</div> 
                        </Box>
                    </Box>
                </Box>

            <Divider />
            <CardContent>
                <Grid container sx={{ bgcolor: 'white', mb: 3, flexDirection: 'column', alignItems: 'flex-start', p:3, height: 120, justifyContent: 'center' }}>
                    <Box>{q1?.text}</Box>
                    <Box sx={{fontWeight: 'bold'}}>{q1?.possibleAnswers?.[formData?.[q1?._id]]}</Box>
                    <Box sx={{color: "#F99746"}}>Your score was lower than most of the citizens. Here is a link to improve... </Box>
                </Grid>
                <Grid container sx={{ bgcolor: 'white', mb: 3, flexDirection: 'column', alignItems: 'flex-start', p:3, height: 120, justifyContent: 'center' }}>
                    <Box>{q2?.text}</Box>
                    <Box sx={{fontWeight: 'bold'}}>{q2?.possibleAnswers?.[formData?.[q2?._id]]}</Box>
                    <Box sx={{color: "#F99746"}}>Your score was lower than most of the citizens. Here is a link to improve...</Box>
                </Grid>
                <Grid container sx={{ bgcolor: 'white', mb: 3, flexDirection: 'column', alignItems: 'flex-start', p:3, height: 120, justifyContent: 'center' }}>
                    <Box>{q3?.text}</Box>
                    <Box sx={{fontWeight: 'bold'}}>{q3?.possibleAnswers?.[formData?.[q3?._id]]}</Box>
                </Grid>
                <Grid container sx={{ bgcolor: 'white', mb: 3, flexDirection: 'column', alignItems: 'flex-start', p:3, height: 120, justifyContent: 'center' }}>
                    <Box>{q4?.text}</Box>
                    <Box sx={{fontWeight: 'bold'}}>{q4?.possibleAnswers?.[formData?.[q4?._id]]}</Box>
                </Grid>
                <Grid container sx={{ bgcolor: 'white', mb: 3, flexDirection: 'column', alignItems: 'flex-start', p:3, height: 120, justifyContent: 'center' }}>
                    <Box>{q5?.text}</Box>
                    <Box sx={{fontWeight: 'bold'}}>{q4?.possibleAnswers?.[formData?.[q4?._id]]}</Box>
                    <Box sx={{color: "#F99746"}}>Your score was lower than most of the citizens. Here is a link to improve...</Box>
                </Grid>
                <Grid container sx={{ bgcolor: 'white', mb: 3, flexDirection: 'column', alignItems: 'flex-start', p:3, height: 120, justifyContent: 'center' }}>
                    <Box>{q6?.text}</Box>
                    <Box sx={{fontWeight: 'bold'}}>{q5?.possibleAnswers?.[formData?.[q5?._id]]}</Box>
                    <Box sx={{color: "#F99746"}}>Your score was lower than most of the citizens. Here is a link to improve...</Box>
                </Grid>
                <Grid container sx={{ bgcolor: 'white', mb: 3, flexDirection: 'column', alignItems: 'flex-start', p:3, height: 120, justifyContent: 'center' }}>
                    <Box>{q7?.text}</Box>
                    <Box sx={{fontWeight: 'bold'}}>{q6?.possibleAnswers?.[formData?.[q6?._id]]}</Box>
                </Grid>

            </CardContent>

        </Container>
    )
}
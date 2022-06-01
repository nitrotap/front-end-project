/* js file for rendering a single question to screen 
 * programmatically displays answer boxes
*/
import * as React from 'react';
import { Container, makeStyles, Typography, Card, CardActions, Box, CardContent, CardMedia, } from '@material-ui/core';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

const Question = (props) => {
    const { currentQuestion, setCurrentQuestion, handleSubmit } = props;

    const questionStyle = {
        width: '100%',
        textAlign: 'center',
        backgroundColor: 'white',
        marginBottom: '400px',
    }
    const questionTextStyle = {
        fontSize: '24pt',

    }
        const useStyles = makeStyles((theme) => ({
            container: {
                backgroundColor: '#18344A',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh',
                width: '100vw',
                marginTop: '60px',
                marginBottom: '60px',
                padding: 0,
            },
            title: {
                fontSize: '4rem',
                textAlign: 'center',
                color: 'white',
                paddingBottom: theme.spacing(3),
                [theme.breakpoints.down('md')]: {
                    fontSize: '2rem',
                },
            },
            text: {
                fontSize: '2rem',
                textAlign: 'center',
                color: '#f5f5f5',
                paddingBottom: theme.spacing(3),
                [theme.breakpoints.down('md')]: {
                    fontSize: '1rem',
                },
            },
            hero: {
                width: '50%',
                marginTop: theme.spacing(4),
                [theme.breakpoints.down('sm')]: {
                    width: '75%',
                },
            },
            card: {
                backgroundColor: '#255070',
                display: 'flex',
                flexDirection: 'column',
            },
            cardButtons: {
                display: 'flex',
                flexDirection: 'row',
                backgroundColor: '#255070',
                justifyContent: 'space-evenly',
                alignItems: 'center',
        
            },
            cardTitle: {
                color: '#f5f5f5',
                fontSize: '2.5rem',
                textAlign: 'center',
                [theme.breakpoints.down('md')]: {
                    fontSize: '1.5rem',
                },
            },
            cardText: {
                fontSize: '1.3rem',
                textAlign: 'center',
                color: '#f5f5f5',
                [theme.breakpoints.down('md')]: {
                    fontSize: '1rem',
                },
            },
            button: {
                color: '#4798D6',
                fontSize: '1rem',
                width: '100%',
            },
        }));

        const bstyle = {
            margin: '10px',
        }
        const classes = useStyles();
    return (
        <Container className={classes.container}>
            <Typography className={classes.text}>{currentQuestion.question}
            </Typography>
            <Box className={classes.hero}>
                <CardActions className={classes.cardButtons}>
                    {currentQuestion.response.map((i, index) => {
                        return (
                        <Button variant="contained" onClick={() => {
                            handleSubmit(currentQuestion.response[index])
                        }} style={bstyle}> 
                            <h5>{currentQuestion.response[index].text}</h5>
                        </Button>
                    )
                })}
                </CardActions>
            </Box>
        </Container>
    )
}

export default Question

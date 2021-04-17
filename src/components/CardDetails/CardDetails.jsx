import { CardContent, Grid, Box, Typography, Card, makeStyles } from '@material-ui/core';
import React from 'react';
import CountUp from 'react-countup';


const useStyles = makeStyles({
    header: {
        background: '#F5F5F5',
        padding: 10
    }
  });

const CardDetails = ({cardTitle,value,desc,lastUpdate,borderColor}) => {
    const classes = useStyles();
    return (
        <Grid component={Card} style={{margin:20, borderBottom:`10px solid ${borderColor}`}}>
            <Box className={classes.header}>
                <Typography variant="h5" color="textSecondary">{cardTitle}</Typography>
            </Box>
            <CardContent>
            <Typography variant="h5">
                <CountUp start={0} end={value} duration={3} separator="," />
            </Typography>
            <Typography color="textSecondary">{desc}</Typography>
            <Typography>{lastUpdate}</Typography>
            </CardContent>
        </Grid>
    );
};

export default CardDetails;
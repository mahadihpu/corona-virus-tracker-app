import { Box, Grid, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import CardDetails from "../CardDetails/CardDetails";

const useStyles = makeStyles({
  component: {
    margin: "50px 0",
    flexDirection: 'column',
    display:'flex',
    alignItems:'center'
  },
  container: {
    color: "green",
    marginBottom: 40
  },
});

const Cards = (props) => {
  const classes = useStyles();
  const { confirmed, recovered, deaths, lastUpdate } = props.info;
  if (!confirmed) {
    return "loading";
  }
  return (
    <Box className={classes.component}>
      <Typography className={classes.container} variant="h4">
        Cases Internationally
      </Typography>
      <Grid container spacing={3} justify="center">
        <CardDetails
           cardTitle="Infected"
           value={confirmed.value}
           desc="Number of Covid-19 Infected"
           lastUpdate={lastUpdate}
           borderColor='yellow'
         />
        <CardDetails
           cardTitle="Recovered"
           value={recovered.value}
           desc="Number Recovered from Covid-19"
           lastUpdate={lastUpdate}
           borderColor='green'
         />
         <CardDetails
           cardTitle="Deaths"
           value={deaths.value}
           desc="Number of deaths by Covid-19"
           lastUpdate={lastUpdate}
           borderColor='red'
         />
      </Grid>
    </Box>
  );
};

export default Cards;

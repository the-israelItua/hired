import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";
import Button from "@material-ui/core/Button";


const useStyles = makeStyles((theme) => ({
  button1: {
    margin: "2rem 2rem 2rem 0",
    padding: "1rem",
    background: "rgb(108, 163, 108)",
  },
  button2: {
    margin: "2rem 2rem 2rem 0",
    padding: "1rem",
    background: "rgb(160, 160, 83)",
  },
}));

function Next() {
  const classes = useStyles();
  return (
    <section className="next-section">
      <Grid container spacing={6}>
        <Grid item xs={12} sm={2}></Grid>
        <Grid item xs={12} sm={8}>
          <Typography variant="h5">Take The Next Step</Typography>
          <Typography variant="body2" component="p">
            Finding the right tech talent can be difficult and time consuming,
            let's make it easier and efficient for you
          </Typography>
          <Button className={classes.button1}>Hire Talents</Button>
          <Button className={classes.button2}>Apply To Jobs</Button>
        </Grid>
        <Grid item xs={12} sm={2}></Grid>
      </Grid>
    </section>
  );
}

export default Next;

import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";

const useStyles = makeStyles((theme) => ({
  button: {
    margin: "2rem 0",
    background: "none",
    width: "15rem",
    color: "green",
  },
  arrow: {
    color: "green",
  },
}));

function TopContent() {
  const classes = useStyles();
  return (
    <section className="top-content">
      <div className="top-content-bg">
        <Grid container spacing={6}>
          <Grid item xs={12} md={6} className="header">
            <Typography varaint="h1">
              Find Your Dream Job With Us Easily.
            </Typography>
            <Typography variant="body2" component="p">
              Get awesome tech roles on the go with the best job-search platform
              available
            </Typography>
            <Link to="/signup">
              <Button
                variant="contained"
                className={classes.button}
                endIcon={<ArrowForwardIcon className={classes.arrow} />}
              >
                Get Started
              </Button>
            </Link>
          </Grid>
        </Grid>
      </div>
    </section>
  );
}

export default TopContent;

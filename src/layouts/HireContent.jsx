import React from "react";
import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import img1 from "../assets/images/contract.jpg";
import img2 from "../assets/images/map.jpeg";
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

function HireContent() {
  const classes = useStyles();
  return (
    <>
      <section className="hire-content">
        <div className="hire-content-bg">
          <Grid container spacing={6}>
            <Grid item md={6}>
              <img src={img2} alt="" />
            </Grid>
            <Grid item xs={12} md={6} className="header">
              <Typography varaint="h1">
                Hire Professionals From Any Location In The World. Remote And
                On-site
              </Typography>
              <Typography variant="body2" component="p">
                Find specialized experts and agencies for large projects, expand
                your team with a skilled resource or access a pool of diverse
                experts for one-off tasks all in one place. <span>Hired</span>{" "}
                makes it possible.
              </Typography>
              <Typography variant="body2" component="p">
                We carefully check everybody before allowing them onto our
                platform to guarantee you'll be working with an expert in their
                field of work.
              </Typography>
              <Button
                variant="contained"
                className={classes.button}
                endIcon={<ArrowForwardIcon className={classes.arrow} />}
              >
                Post A JOB
              </Button>
            </Grid>
          </Grid>
        </div>
      </section>
      <section className="hire-content2">
        <div className="hire-content2-bg">
          <Grid container spacing={6}>
            <Grid item xs={12} md={6} className="header2">
              <Typography varaint="h1">
                Get Proven Talent From Our Pool Of Vetted Professionals
              </Typography>
              <Typography variant="body2" component="p">
                Connect with in-demand, independent professionals and
                specialized agencies—and see why businesses give{" "}
                <span>Hired</span> talent a 4.8 out of 5 rating based on 1M+
                reviews.
              </Typography>
              <Typography variant="body2" component="p">
                We carefully check everybody before allowing them onto our
                platform to guarantee you'll be working with an expert in their
                field of work.
              </Typography>
              <Button
                variant="contained"
                className={classes.button}
                endIcon={<ArrowForwardIcon className={classes.arrow} />}
              >
                Post A JOB
              </Button>
            </Grid>
            <Grid item md={6}>
              <img src={img1} alt="" />
            </Grid>
          </Grid>
        </div>
      </section>
    </>
  );
}

export default HireContent;

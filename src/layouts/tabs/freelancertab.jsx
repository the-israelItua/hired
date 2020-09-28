import React from "react";
import freelancerImg from "../../assets/images/freelancer.jpg";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    margin: "3rem 0 ",
  },
  text: {
    margin: "1rem 0",
  },
  pos: {
    marginBottom: 8,
  },
});

const FreeLancerTab = () => {
  const classes = useStyles();

  return (
    <Grid container spacing={6}>
      <Grid item xs={12} sm={1}></Grid>
      <Grid item xs={12} sm={6}>
        <img src={freelancerImg} alt="" />
      </Grid>
      <Grid item xs={12} sm={4}>
        <Card className={classes.root}>
          <CardContent>
            <Typography variant="body2" component="p" className={classes.text}>
              <span>Hired</span> is bridging the gap between great talents and
              the job market allowing brilliant minds to focus on honing their
              skills without worrying much about job-hunting and also allows
              companies fill vacant positions quicker.
            </Typography>
            <Typography variant="body2" component="p" className={classes.text}>
              I believe it would bridge the gap in the market for engineers in
              the market which is growing daily.
            </Typography>
            <Typography variant="h5" component="h2">
              Maxwell Schimdt
            </Typography>
            <Typography className={classes.pos} color="textSecondary">
              CTO, Auswitch Germany
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} sm={1}></Grid>
    </Grid>
  );
};

export default FreeLancerTab;

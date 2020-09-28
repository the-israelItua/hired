import React from "react";
import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import EngageSVG from "../assets/svgs/engage";
import HireSVG from "../assets/svgs/hire";
import RatingSVG from "../assets/svgs/rating";

function Process() {
  return (
    <section className="process-section">
      <Grid container spacing={6}>
        <Grid item xs={12} sm={4}>
          <EngageSVG />
          <Typography variant="h5">Engage on your terms</Typography>
          <Typography variant="body2" component="p">
            From one-offs to longer-term contracts (through Hired Payroll), you
            can tailor your engagements to achieve your business goals and scale
            dynamically as business needs change.
          </Typography>
          <Button>
            <ArrowForwardIcon /> See what you can do
          </Button>
        </Grid>
        <Grid item xs={12} sm={4}>
          <HireSVG />
          <Typography variant="h5">Hire with confidence</Typography>
          <Typography variant="body2" component="p">
            With 1M+ reviews, get a reliable evaluation of candidates’ previous
            work from businesses like yours. Plus, unlike other solutions, only
            see client reviews from legitimate jobs completed though Upwork.
          </Typography>
          <Button>
            <ArrowForwardIcon /> See the reviews
          </Button>
        </Grid>
        <Grid item xs={12} sm={4}>
          <RatingSVG />
          <Typography variant="h5">Enterprise-ready</Typography>
          <Typography variant="body2" component="p">
            Get white-glove support for your job postings, shortlisting,
            onboarding, and driving company adoption. Plus, get a solution
            customized to your existing contingent worker policies, providing
            the protection you need—from compliance to results risk limitation
            to IP and data security.
          </Typography>
          <Button>
            <ArrowForwardIcon /> Hired for enterprise
          </Button>
        </Grid>
      </Grid>
    </section>
  );
}

export default Process;

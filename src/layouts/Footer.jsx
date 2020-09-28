import React from "react";
import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import AppleIcon from "@material-ui/icons/Apple";
import AndroidIcon from "@material-ui/icons/Adb";

function Footer() {
  return (
    <footer>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={3}>
          <Typography variant="h5">Company</Typography>
          <Typography variant="body2" component="p">
            About Us
          </Typography>
          <Typography variant="body2" component="p">
            Investor Relations
          </Typography>
          <Typography variant="body2" component="p">
            Careers
          </Typography>
          <Typography variant="body2" component="p">
            Upwork Foundation
          </Typography>
          <Typography variant="body2" component="p">
            Press
          </Typography>
          <Typography variant="body2" component="p">
            Trust, Safety &amp; Security
          </Typography>
          <Typography variant="body2" component="p">
            Terms of Service
          </Typography>
          <Typography variant="body2" component="p">
            Privacy Policy
          </Typography>
          <Typography variant="body2" component="p">
            Accessibility
          </Typography>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Typography variant="h5">Resources</Typography>
          <Typography variant="body2" component="p">
            Customer Support
          </Typography>
          <Typography variant="body2" component="p">
            Customer Stories
          </Typography>
          <Typography variant="body2" component="p">
            Business Resources
          </Typography>
          <Typography variant="body2" component="p">
            Payroll Services
          </Typography>
          <Typography variant="body2" component="p">
            Upwork Reviews
          </Typography>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Typography variant="h5">Browse</Typography>
          <Typography variant="body2" component="p">
            Freelancers by Skill
          </Typography>
          <Typography variant="body2" component="p">
            Freelancers in USA
          </Typography>
          <Typography variant="body2" component="p">
            Freelancers in UK
          </Typography>
          <Typography variant="body2" component="p">
            Freelancers in Canada
          </Typography>
          <Typography variant="body2" component="p">
            Freelancers in Australia
          </Typography>
          <Typography variant="body2" component="p">
            Jobs in USA
          </Typography>
          <Typography variant="body2" component="p">
            Find Jobs
          </Typography>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Typography variant="h5">Support</Typography>
          <Typography variant="body2" component="p">
            Apply For Jobs
          </Typography>
          <Typography variant="body2" component="p">
            Post A Job
          </Typography>
          <Typography variant="body2" component="p">
            Read Testimonies
          </Typography>
          <Typography variant="body2" component="p">
            Login
          </Typography>
        </Grid>
      </Grid>
      <div className="footer-bottom">
        <div className="socials">
          <p>Follow Us</p>
          <FacebookIcon />
          <TwitterIcon />
          <LinkedInIcon />
          <InstagramIcon />
        </div>
        <div className="mobile">
          <p>Mobile App</p>
          <AppleIcon />
          <AndroidIcon />
        </div>
      </div>
      <div className="foot-notes">
        <Typography variant="h5">
          &copy; Israel Itua. <span>Hired</span> Inc
        </Typography>
      </div>
    </footer>
  );
}

export default Footer;

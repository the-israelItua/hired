import React from "react";
import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";
import PaypalLogo from "../assets/images/paypal-logo.png";
import InfosysLogo from "../assets/images/infosys-limited.png";
import CotyLogo from "../assets/images/Coty-logo.png";
import AlisaLogo from "../assets/images/Alisa_Logo.png";
import KipptLogo from "../assets/images/Kippt_Logo.png";
import LingLogo from "../assets/images/LingQ_Logo.png";
import RedoxLogo from "../assets/images/Redox_Logo.png";
import RotaryLogo from "../assets/images/Rotary_logo.png";
import SpheroLogo from "../assets/images/Sphero_Logo.png";

function Trustees() {
  return (
    <section className="trustees">
      <Grid container spacing={6}>
        <Grid item xs={12}>
          <Typography varaint="h1">Trusted by 5k+ businesses</Typography>
        </Grid>
        <Grid container item xs={12} className="trustees-icons">
          <Grid item xs={4} sm={2}>
            <img src={SpheroLogo} alt="logo" />
          </Grid>
          <Grid item xs={4} sm={2}>
            <img src={KipptLogo} alt="logo" />
          </Grid>
          <Grid item xs={4} sm={2}>
            <img src={PaypalLogo} alt="logo" />
          </Grid>
          <Grid item xs={4} sm={2}>
            <img src={CotyLogo} alt="logo" />
          </Grid>
          <Grid item xs={4} sm={2}>
            <img src={AlisaLogo} alt="logo" />
          </Grid>
          <Grid item xs={4} sm={2}>
            <img src={InfosysLogo} alt="logo" />
          </Grid>
          <Grid item xs={4} sm={2}>
            <img src={RedoxLogo} alt="logo" />
          </Grid>
          <Grid item xs={4} sm={2}>
            <img src={LingLogo} alt="logo" />
          </Grid>
          <Grid item xs={4} sm={2}>
            <img src={RotaryLogo} alt="logo" />
          </Grid>
        </Grid>
      </Grid>
    </section>
  );
}

export default Trustees;

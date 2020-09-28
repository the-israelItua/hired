import React, { useEffect } from "react";
import { connect } from "react-redux";
import { switchPage } from "../store/actions";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import DeskSidebar from "./DeskSidebar";
import JobList from "./JobList";

function TopJobs({ switchPage }) {
  useEffect(() => {
    switchPage("Top");
  }, []);

  return (
    <div className="desk-top-page">
      <Grid container spacing={1}>
        <Grid item sm={3}>
          <DeskSidebar />
        </Grid>
        <Grid item sm={7}>
          <JobList />
        </Grid>
        <Grid item sm={2}></Grid>
      </Grid>
    </div>
  );
}

export default connect(null, { switchPage })(TopJobs);

import React from "react";
import "../css/deskdashboard.css";
import Grid from "@material-ui/core/Grid";
import DeskSidebar from "./DeskSidebar";
import JobList from "./JobList";

function DeskDashboard() {
  return (
    <Grid container spacing={1} className="desk-dashboard">
      <Grid item sm={3}>
        <DeskSidebar />
      </Grid>
      <Grid item sm={7}>
        <JobList />
      </Grid>
      <Grid item sm={2}></Grid>
    </Grid>
  );
}

export default DeskDashboard;

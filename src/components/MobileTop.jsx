import React, { useEffect } from "react";
import { connect } from "react-redux";
import { switchPage } from "../store/actions";
import Typography from "@material-ui/core/Typography";
import MobileHeader from "./MobileHeader";
import MobileFooter from "./MobileFooter";
import JobList from "./JobList";

function TopJobs({ switchPage }) {
  useEffect(() => {
    switchPage("Top");
  }, []);

  return (
    <div className="mobile-top-page">
      <MobileHeader />
      <div className="subheader">
        <Typography variant="h5">Top Companies </Typography>
      </div>
      <JobList />
      <MobileFooter />
    </div>
  );
}

export default connect(null, { switchPage })(TopJobs);

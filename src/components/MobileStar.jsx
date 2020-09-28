import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getStarredJobs, switchPage, clearStarredJobs } from "../store/actions";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import JobItem from "./JobItem";
import MobileFooter from "./MobileFooter";
import MobileHeader from "./MobileHeader";
import Message from "./Message";

const useStyles = makeStyles((theme) => ({
  button: {
    color: "green",
    width: "50%",
    margin: "2rem",
  },
}));

function StarJobsPage(props) {
  useEffect(() => {
    props.switchPage("Favourite");
    props.getStarredJobs();
  }, []);

  const handleClear = () => {
    props.clearStarredJobs(() => props.getStarredJobs());
  };

  const disp =
    props.starred.length === 0 ? (
      <Message text="You currently have no starred job. Open a job description and star it to reference it in future" />
    ) : (
      props.starred.map((job) => <JobItem key={job._id} job={job} />)
    );

  const classes = useStyles();
  return (
    <div className="mobile-star-page">
      <MobileHeader />
      <div className="star-list">{disp}</div>
      <Button
        variant={props.starred.length === 0 ? "disabled" : "contained"}
        className={classes.button}
        onClick={handleClear}
      >
        Clear List
      </Button>
      <MobileFooter />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    starred: state.starred,
  };
};

export default connect(mapStateToProps, {
  getStarredJobs,
  switchPage,
  clearStarredJobs,
})(StarJobsPage);

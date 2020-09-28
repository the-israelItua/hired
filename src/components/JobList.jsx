import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getJobsList } from "../store/actions";
import JobItem from "./JobItem";
import Spinner from "./Spinner";

function JobList({ getJobsList, jobs }) {
  useEffect(() => {
    getJobsList();
  }, []);

  const disp =
    jobs.length === 0 ? (
      <Spinner />
    ) : (
      jobs.map((job) => <JobItem job={job} key={job._id} />)
    );
  return <div className="job-list">{disp}</div>;
}

const mapStateToProps = (state) => {
  return {
    jobs: state.jobs,
  };
};

export default connect(mapStateToProps, { getJobsList })(JobList);

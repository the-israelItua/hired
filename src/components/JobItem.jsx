import React from "react";
import { Link } from "react-router-dom";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import MoreVertIcon from "@material-ui/icons/MoreVert";

export default function JobItem({ job }) {
  return (
    <Link to={`/job/details/${job._id}`}>
      <div className="job-item">
        <div className="job-title">
          <h3>{job.title}</h3>
          <p>{job.company}</p>
        </div>
        <div className="company">
          <h3>{job.location}</h3>
          <p>Location</p>
        </div>
        <div className="type">
          <h3>{job.type}</h3>
          <p>Job Type</p>
        </div>
        <IconButton>
          <MoreVertIcon />
        </IconButton>
      </div>
    </Link>
  );
}

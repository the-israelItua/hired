import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Spinner from "./Spinner";
import { getJobById, starJob } from "../store/actions";
import HomeIcon from "@material-ui/icons/Home";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  home: {
    left: "2vh",
    top: "5vh",
    color: "grey",
    position: "absolute",
  },
  button2: {
    margin: "1rem 0",
    padding: "1rem",
    background: "black",
    width: "10rem",
    color: "white",
  },
}));

function DeskDetails({ getJobById, id, selected, starJob }) {
  const classes = useStyles();
  const [show, setShow] = useState(false);
  const [hide, setHide] = useState(true);

  useEffect(() => {
    getJobById(id);
  }, []);

  const truncate = (string) => {
    return `${string.slice(0, 1000)}...`;
  };

  const handleStar = (event) => {
    event.preventDefault();
    starJob(id);
    setHide(false);
  };

  const truncatedDesc =
    selected.description !== undefined
      ? show
        ? selected.description
        : truncate(selected.description)
      : "";

  return selected === {} ? (
    <Spinner />
  ) : (
    <div className="desk-details">
      <Link to="/dashboard">
        <div className={classes.home}>
          <HomeIcon />
        </div>
      </Link>

      <div className="company">
        <img src={selected.company_logo} alt="" />
        <Typography variant="h5">{selected.company}</Typography>
        <Typography variant="body2" component="p">
          Technology Company{" "}
        </Typography>
      </div>
      <div className="role">
        <Typography variant="h5">{selected.title}</Typography>
        <div className="bottom">
          <Typography variant="body2" component="p">
            {selected.location}
          </Typography>
          <Typography variant="body2" component="p">
            {selected.type}
          </Typography>
        </div>
      </div>
      <div className="description">
        <Typography variant="h5">Description</Typography>
        <div
          dangerouslySetInnerHTML={{
            __html: truncatedDesc,
          }}
        ></div>

        <Typography
          variant="body2"
          component="p"
          onClick={() => setShow(!show)}
        >
          {show ? "show less" : "show more"}
        </Typography>
      </div>

      <Button
        variant={hide ? "contained" : "disabled"}
        className={classes.button2}
        onClick={handleStar}
      >
        Star this Job
      </Button>
    </div>
  );
}

const mapStateToProps = (state, ownProps) => {
  return {
    id: ownProps.match.params.id,
    selected: state.selected,
  };
};

export default connect(mapStateToProps, { getJobById, starJob })(DeskDetails);

import React, { useEffect } from "react";
import { connect } from "react-redux";
import { switchPage } from "../store/actions";
import FilterIcon from "@material-ui/icons/FilterList";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import MobileHeader from "./MobileHeader";
import MobileFooter from "./MobileFooter";
import JobList from "./JobList";

const useStyles = makeStyles((theme) => ({
  appBar: {
    background: "white",
    color: "grey",
  },
  grow: {
    flexGrow: 1,
  },
  logo: {
    display: "flex",
    flexGrow: 1,
  },
  title: {
    color: "green",
  },

  menuSearch: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: "white",
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
    padding: theme.spacing(1),
  },
  top: {
    display: "flex",
  },
  searchIcon: {
    padding: theme.spacing(1, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    // alignItems: "center",
    // justifyContent: "center",
  },
  inputInput: {
    // padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

function MobileDashboard({ switchPage }) {
  useEffect(() => {
    switchPage("Home");
  }, []);
  const classes = useStyles();
  return (
    <div className="mobile-dashboard">
      <MobileHeader />
      <div className="header">
        <div className={classes.top}>
          <div className={classes.menuSearch}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search Job Titles"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ "aria-label": "search" }}
            />
          </div>

          <IconButton>
            <FilterIcon />
            <Typography variant="body2" component="p">
              Filter
            </Typography>
          </IconButton>
        </div>
      </div>
      <div className="subheader">
        <Typography variant="body2" component="p">
          Popular Jobs{" "}
        </Typography>
      </div>
      <JobList />
      <MobileFooter />
    </div>
  );
}

export default connect(null, { switchPage })(MobileDashboard);

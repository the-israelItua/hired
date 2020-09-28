import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { switchPage } from "../store/actions";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Tooltip from "@material-ui/core/Tooltip";
import IconButton from "@material-ui/core/IconButton";
import HomeIcon from "@material-ui/icons/Home";
import TopIcon from "@material-ui/icons/Equalizer";
import FavouriteIcon from "@material-ui/icons/Star";

const useStyles = makeStyles((theme) => ({
  appBar: {
    top: "auto",
    bottom: 0,
    background: "white",
  },
  toolBar: {
    display: "flex",
    justifyContent: "center",
    textAlign: "center",
    width: "100%",
  },
  section: {
    flex: 1,
    color: "grey",
  },
  icons: {
    margin: 0,
    padding: 0,
  },
  text: {
    fontSize: "0.7rem",
  },
  current: {
    color: "green",
  },
}));

function MobileFooter({ page, switchPage }) {
  const classes = useStyles();
  return (
    <React.Fragment>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar className={classes.toolBar}>
          <Link
            to="/dashboard"
            className={`${classes.section} ${
              page === "Home" ? classes.current : ""
            }`}
          >
            <Tooltip title="Home">
              <IconButton
                edge="start"
                className={`${classes.icons} ${
                  page === "Home" ? classes.current : ""
                }`}
                onClick={() => switchPage("Home")}
              >
                <HomeIcon />
              </IconButton>
            </Tooltip>
          </Link>
          <Link
            to="/star"
            className={`${classes.section} ${
              page === "Favourite" ? classes.current : ""
            }`}
          >
            <Tooltip title="Favourite Companies">
              <IconButton
                className={`${classes.icons} ${
                  page === "Favourite" ? classes.current : ""
                }`}
                onClick={() => switchPage("Favourite")}
              >
                <FavouriteIcon />
              </IconButton>
            </Tooltip>
          </Link>
          <Link
            to="/companies/top"
            className={`${classes.section} ${
              page === "Top" ? classes.current : ""
            }`}
            onClick={() => switchPage("Top")}
          >
            <Tooltip title="Top Companies">
              <IconButton
                edge="end"
                className={`${classes.icons} ${
                  page === "Top" ? classes.current : ""
                }`}
              >
                <TopIcon />
              </IconButton>
            </Tooltip>
          </Link>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}

const mapStateToProps = (state) => {
  return {
    page: state.page,
  };
};

export default connect(mapStateToProps, { switchPage })(MobileFooter);

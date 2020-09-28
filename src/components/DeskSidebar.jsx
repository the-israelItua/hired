import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Tooltip from "@material-ui/core/Tooltip";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import TopIcon from "@material-ui/icons/Equalizer";
import StarIcon from "@material-ui/icons/Star";
import HomeIcon from "@material-ui/icons/Home";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import EditIcon from "@material-ui/icons/Edit";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import WorkIcon from "@material-ui/icons/Work";
import AccountCircle from "@material-ui/icons/AccountCircle";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";

const useStyles = makeStyles((theme) => ({
  nested: {
    paddingLeft: theme.spacing(4),
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
}));

function DeskSidebar({ page }) {
  const classes = useStyles();
  //   const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  //   const handleChange = (event) => {
  //     setAuth(event.target.checked);
  //   };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div className="desk-sidebar">
      <Typography className="logo" variant="h5" display="block" noWrap>
        HIRED
      </Typography>

      <List
        component="nav"
        aria-labelledby="nested-list-subheader"
        className="list"
      >
        <Link to="/dashboard">
          <ListItem button>
            <ListItemIcon>
              <HomeIcon className={page === "Home" ? "current" : ""} />
            </ListItemIcon>
            <ListItemText
              primary="Home"
              className={page === "Home" ? "current" : ""}
            />
          </ListItem>
        </Link>
        <Link to="/star">
          <ListItem button>
            <ListItemIcon>
              <StarIcon className={page === "Favourite" ? "current" : ""} />
            </ListItemIcon>
            <ListItemText
              primary="Starred Jobs"
              className={page === "Favourite" ? "current" : ""}
            />
          </ListItem>
        </Link>
        <Link to="/companies/top">
          <ListItem button>
            <ListItemIcon>
              <TopIcon className={page === "Top" ? "current" : ""} />
            </ListItemIcon>
            <ListItemText
              primary="Top Companies"
              className={page === "Top" ? "current" : ""}
            />
          </ListItem>
        </Link>
      </List>
      <Card className="card">
        <IconButton
          aria-label="account of current user"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          onClick={handleMenu}
        >
          <AccountCircle />
        </IconButton>
        <Menu
          id="menu-appbar"
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          keepMounted
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          open={open}
          onClose={handleClose}
        >
          <MenuItem onClick={handleClose}>Profile</MenuItem>
          <MenuItem onClick={handleClose}>My account</MenuItem>
        </Menu>
      </Card>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    page: state.page,
  };
};

export default connect(mapStateToProps)(DeskSidebar);

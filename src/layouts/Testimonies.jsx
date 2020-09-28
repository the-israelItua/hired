import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import CreativeTab from "./tabs/creativetab";
import EnterpreneurTab from "./tabs/entrepreneutab";
import FreeLancerTab from "./tabs/freelancertab";
import SmallbizTab from "./tabs/smallbixtab";
import StudentTab from "./tabs/studenttab";
import DevTab from "./tabs/devtab";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && <Box div={3}>{children}</Box>}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    "aria-controls": `scrollable-auto-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    padding: "4rem",
  },
  header: {
    textAlign: "center",
  },
  panel: {
    justifyContent: "center",
    alignContent: "center",
  },
}));

export default function ScrollableTabsButtonAuto() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <div className={classes.root} id="testimony">
        <div className={classes.header}>
          <Typography variant="h4">TESTIMONIES</Typography>
          <Typography variant="body2" component="p">
            See What Recruiters And Employees Are Saying About Hired.
          </Typography>
        </div>
        <TabPanel value={value} index={0}>
          <CreativeTab />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <SmallbizTab />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <EnterpreneurTab />
        </TabPanel>
        <TabPanel value={value} index={3}>
          <StudentTab />
        </TabPanel>
        <TabPanel value={value} index={4}>
          <FreeLancerTab />
        </TabPanel>
        <TabPanel value={value} index={5}>
          <DevTab />
        </TabPanel>

        <Grid container spacing={6}>
          <Grid item xs={12} sm={3}></Grid>
          <Grid item xs={12} sm={6}>
            <Tabs
              value={value}
              onChange={handleChange}
              indicatorColor="primary"
              textColor="primary"
              variant="scrollable"
              scrollButtons="auto"
              aria-label="scrollable auto tabs example"
              className="panel"
            >
              <Tab label="Small Businesses" {...a11yProps(0)} />
              <Tab label="Start-Ups" {...a11yProps(1)} />
              <Tab label="Students" {...a11yProps(2)} />
              <Tab label="Freelancers" {...a11yProps(3)} />
              <Tab label="Employees" {...a11yProps(4)} />
              <Tab label="Executives" {...a11yProps(5)} />
            </Tabs>
          </Grid>
          <Grid item xs={12} sm={3}></Grid>
        </Grid>
      </div>
      <div className="mobile-testimony">
        <Typography variant="h4">TESTIMONIES</Typography>
        <ul>
          <li>
            <CreativeTab />
          </li>
          <li>
            <DevTab />
          </li>
          <li>
            <StudentTab />
          </li>
          <li>
            <SmallbizTab />
          </li>
          <li>
            <EnterpreneurTab />
          </li>
          <li>
            <FreeLancerTab />
          </li>
        </ul>
      </div>
    </>
  );
}

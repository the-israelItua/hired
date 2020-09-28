import React from "react";
import { makeStyles } from "@material-ui/styles";
import Typography from "@material-ui/core/typography";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    textAlign: "center",
    minHeight: "100%",
    padding: "2rem",
  },
}));

function Message({ text }) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography variant="body2" component="p">
        {text}
      </Typography>
    </div>
  );
}

export default Message;

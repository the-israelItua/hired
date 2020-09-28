import React, { useState } from "react";
import { connect } from "react-redux";
import "../css/auth.css";
import Nav from "../layouts/Nav";
import Footer from "../layouts/Footer";
import { Link } from "react-router-dom";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import IconButton from "@material-ui/core/IconButton";
import Input from "@material-ui/core/Input";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControl from "@material-ui/core/FormControl";
import MailIcon from "@material-ui/icons/Mail";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import { getLogin } from "../store/actions";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    textAlign: "left",
    minHeight: "100%",
    marginTop: "6rem",
    padding: "1rem 2rem 1rem 1rem",
  },
  header: {
    color: "green",
    marginBottom: "2rem",
    fontWeight: "600"
  },
  margin: {
    margin: theme.spacing(2, 1),
  },
  withoutLabel: {
    marginTop: theme.spacing(3),
  },
  textField: {
    width: "100%",
  },
  bottom: {
    display: "flex",
    justifyContent: "space-between",
  },
  button: {
    color: "green",
    width: "100%",
    margin: "2rem 0",
  },
  text: {
    marginTop: "0.5rem",
    color: "green",
  },
  
  terms: {
    fontStyle: "italic",
  },
  floatingLabelFocus: {
    color: "green",
  },
  error: {
    color: "red",
    textAlign: "center",
  },
}));

function Login(props) {
  const classes = useStyles();
  const [values, setValues] = useState({
    email: "",
    password: "",
    showPassword: false,
  });

  const [errors, setErrors] = useState({ email: "", password: "" });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors({ email: "", password: "" });
    if (!values.email) {
      setErrors({ ...errors, email: "Required" });
      return;
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      setErrors({ ...errors, email: "Please Enter A Valid Email" });
      return;
    } else if (!values.password) {
      setErrors({ ...errors, password: "Required" });
      return;
    }
    props.getLogin(
      {
        email: values.email,
        password: values.password,
      },
      () => {
        props.history.push("/dashboard");
      }
    );
  };

  return (
    <div className="auth">
      <Nav />
      <div className={classes.root}>
        <Typography variant="h5" className={classes.header}>LOG IN</Typography>
        <div>
          <FormControl
            className={clsx(classes.margin, classes.textField)}
            variant="filled"
          >
            <InputLabel htmlFor="filled-adornment-email">Email</InputLabel>
            <Input
              id="filled-adornment-email"
              type="text"
              value={values.email}
              onChange={handleChange("email")}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    edge="end"
                  >
                    <MailIcon />
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
          <Typography variant="body2" component="p" className={classes.error}>
            {errors.email}
          </Typography>
          <FormControl
            className={clsx(classes.margin, classes.textField)}
            variant="filled"
          >
            <InputLabel htmlFor="filled-adornment-password">
              Password
            </InputLabel>
            <Input
              id="filled-adornment-password"
              type={values.showPassword ? "text" : "password"}
              value={values.password}
              onChange={handleChange("password")}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {values.showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
          <Typography variant="body2" component="p" className={classes.error}>
            {errors.password}
          </Typography>
          <Typography variant="body2" component="p" className={classes.error}>
            {props.loginError}
          </Typography>
          <div className={classes.bottom}>
            <FormControl component="fieldset">
              <FormControlLabel
                value="true"
                control={
                  <Checkbox
                    defaultChecked
                    color="default"
                    inputProps={{ "aria-label": "checkbox with default color" }}
                  />
                }
                label="Remember Me"
                labelPlacement="end"
              />
            </FormControl>
            <Typography variant="body2" component="p" className={classes.text}>
              Forgot password?
            </Typography>
          </div>
          <Typography variant="body2" component="p">
            Don't have an account? <Link to="/signup">Sign up</Link>
          </Typography>
          <Button
            variant="contained"
            className={classes.button}
            onClick={handleSubmit}
          >
            LOG IN
          </Button>
          <Typography variant="body2" component="p" className={classes.terms}>
            By clicking Log In, you agree to <span>Hired</span>{" "}
            <Link to="/terms">Terms and Conditions.</Link>
          </Typography>
        </div>
      </div>
      <Footer />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    loginError: state.isLoggedIn.errorMessage,
  };
};

export default connect(mapStateToProps, { getLogin })(Login);

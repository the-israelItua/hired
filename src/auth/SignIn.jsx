import React from "react";
import { connect } from "react-redux";
import { getSignUp } from "../store/actions";
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
import PersonIcon from "@material-ui/icons/Person";
import MailIcon from "@material-ui/icons/Mail";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";

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
    fontWeight: "600",
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

function SignUp(props) {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    name: "",
    email: "",
    password: "",
    cpassword: "",
    showPassword: false,
    showcPassword: false,
  });

  const [errors, setErrors] = React.useState({
    name: "",
    email: "",
    password: "",
    cpassword: "",
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleClickShowcPassword = () => {
    setValues({ ...values, showcPassword: !values.showcPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors({ name: "", email: "", password: "" });
    if (!values.email) {
      setErrors({ ...errors, name: "Required" });
      return;
    } else if (!values.email) {
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
    } else if (!values.cpassword) {
      setErrors({ ...errors, cpassword: "Required" });
      return;
    } else if (values.password !== values.cpassword) {
      setErrors({ ...errors, password: "Passwords do not match" });
      return;
    }
    props.getSignUp(values, () => {
      props.history.push("/profile");
    });
  };

  return (
    <div className="auth">
      <Nav />
      <div className={classes.root}>
        <Typography variant="h5" className={classes.header}>
          Sign Up
        </Typography>
        <div>
          <FormControl
            className={clsx(classes.margin, classes.textField)}
            variant="filled"
          >
            <InputLabel htmlFor="filled-adornment-email">Name</InputLabel>
            <Input
              id="filled-adornment-name"
              type="text"
              value={values.name}
              onChange={handleChange("name")}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    edge="end"
                  >
                    <PersonIcon />
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
          <Typography variant="body2" component="p" className={classes.error}>
            {errors.name}
          </Typography>
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
          <FormControl
            className={clsx(classes.margin, classes.textField)}
            variant="filled"
          >
            <InputLabel htmlFor="filled-adornment-cpassword">
              Confirm Password
            </InputLabel>
            <Input
              id="filled-adornment-cpassword"
              type={values.showcPassword ? "text" : "password"}
              value={values.cpassword}
              onChange={handleChange("cpassword")}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowcPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {values.showcPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
          <Typography variant="body2" component="p" className={classes.error}>
            {errors.cpassword}
          </Typography>
          <Typography variant="body2" component="p" className={classes.error}>
            {props.isSignedUp.errorMessage}
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
          </div>
          <Typography variant="body2" component="p">
            Already have an account? <Link to="/login">Log In</Link>
          </Typography>
          <Button
            variant="contained"
            className={classes.button}
            onClick={handleSubmit}
          >
            Sign Up
          </Button>
          <Typography variant="body2" component="p" className={classes.terms}>
            By clicking Sign Up, you agree to <span>Hired</span>{" "}
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
    isSignedUp: state.isSignedUp,
  };
};

export default connect(mapStateToProps, { getSignUp })(SignUp);

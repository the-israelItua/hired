import React from "react";
import { connect, compose } from "react-redux";
import { submitProfile } from "../store/actions";
import Nav from "../layouts/Nav";
import Footer from "../layouts/Footer";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import clsx from "clsx";

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
  margin: {
    margin: theme.spacing(2, 1),
  },
  textField: {
    width: "100%",
  },
  button: {
    color: "green",
    width: "100%",
    margin: "2rem 0",
  },
}));

function ProfilePage(props) {
  const classes = useStyles();
  const [specialty, setSpecialty] = React.useState("");
  const [country, setCountry] = React.useState("");
  const [type, setType] = React.useState("");
  const [isSubmitting, setSubmitting] = React.useState(false);

  const handleSpecialtyChange = (event) => {
    setSpecialty(event.target.value);
  };

  const handleCountryChange = (event) => {
    setCountry(event.target.value);
  };

  const handleTypeChange = (event) => {
    setType(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitting(true);
    props.submitProfile(
      {
        specialty,
        country,
        type,
      },
      () => {
        props.history.push("/dashboard");
      }
    );
  };

  return (
    <>
      <Nav />
      <div className={classes.root}>
        <Typography variant="h5">Set up a quick profile</Typography>
        <FormControl className={clsx(classes.margin, classes.textField)}>
          <InputLabel id="demo-simple-select-label">
            Whats Your Specialty
          </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={specialty}
            onChange={handleSpecialtyChange}
          >
            <MenuItem value={10}>AR Developer</MenuItem>
            <MenuItem value={20}>Backend Developer</MenuItem>
            <MenuItem value={30}>Data Scientist</MenuItem>
            <MenuItem value={40}>Devops Engineer</MenuItem>
            <MenuItem value={50}>Frontend Developer</MenuItem>
            <MenuItem value={60}>Fullstack</MenuItem>
            <MenuItem value={70}>Mobile Developer</MenuItem>
            <MenuItem value={80}>Software Developer</MenuItem>
            <MenuItem value={90}>UI/UX Designer</MenuItem>
          </Select>
        </FormControl>

        <FormControl className={clsx(classes.margin, classes.textField)}>
          <InputLabel id="demo-simple-select-label">
            What country are you from
          </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={country}
            onChange={handleCountryChange}
          >
            <MenuItem value={10}>Afghanistan</MenuItem>
            <MenuItem value={20}>Aland Islands</MenuItem>
            <MenuItem value={30}>Albania</MenuItem>
            <MenuItem value={40}>Algeria</MenuItem>
            <MenuItem value={50}>Amarican samoa</MenuItem>
            <MenuItem value={60}>Andorra</MenuItem>
            <MenuItem value={70}>Angola</MenuItem>
            <MenuItem value={80}>Anguilla</MenuItem>
            <MenuItem value={90}>Antartica</MenuItem>
            <MenuItem value={100}>Antigua and Barbuda</MenuItem>
            <MenuItem value={110}>Argentina</MenuItem>
            <MenuItem value={120}>Bahrain</MenuItem>
            <MenuItem value={130}>Bangladesh</MenuItem>
            <MenuItem value={140}>Barbados</MenuItem>
            <MenuItem value={150}>Belarus</MenuItem>
            <MenuItem value={160}>Belgium</MenuItem>
            <MenuItem value={170}>Belize</MenuItem>
            <MenuItem value={180}>Benin</MenuItem>
            <MenuItem value={190}>Cambodia</MenuItem>
            <MenuItem value={200}>Cameroon</MenuItem>
            <MenuItem value={210}>Canada</MenuItem>
            <MenuItem value={220}>Cape Verde</MenuItem>
            <MenuItem value={230}>Cayman Islands</MenuItem>
            <MenuItem value={240}>Central African Republic</MenuItem>
            <MenuItem value={250}>Costa Rica</MenuItem>
            <MenuItem value={260}>Croatia</MenuItem>
            <MenuItem value={270}>Cuba</MenuItem>
            <MenuItem value={280}>Denmrk</MenuItem>
            <MenuItem value={290}>Djibouti</MenuItem>
            <MenuItem value={300}>Dominica</MenuItem>
            <MenuItem value={310}>Dominican Republic</MenuItem>
            <MenuItem value={320}>Ecuador</MenuItem>
            <MenuItem value={330}>Egypt</MenuItem>
            <MenuItem value={340}>El Salvador</MenuItem>
            <MenuItem value={350}>Equatorial Guinea</MenuItem>
            <MenuItem value={360}>Eritrea</MenuItem>
            <MenuItem value={370}>Estonia</MenuItem>
            <MenuItem value={380}>Ethiopia</MenuItem>
            <MenuItem value={390}>Israel</MenuItem>
            <MenuItem value={400}>Italy</MenuItem>
            <MenuItem value={410}>Jamaica</MenuItem>
            <MenuItem value={420}>Japan</MenuItem>
            <MenuItem value={430}>Jersey</MenuItem>
            <MenuItem value={440}>Jordan</MenuItem>
            <MenuItem value={450}>Kenya</MenuItem>
            <MenuItem value={460}>Laos</MenuItem>
            <MenuItem value={470}>Latvia</MenuItem>
            <MenuItem value={480}>Lebanon</MenuItem>
            <MenuItem value={490}>Lesotho</MenuItem>
            <MenuItem value={500}>Liberia</MenuItem>
            <MenuItem value={510}>Libya</MenuItem>
            <MenuItem value={520}>Luxemborg</MenuItem>
            <MenuItem value={530}>Madagascar</MenuItem>
            <MenuItem value={540}>Malawi</MenuItem>
            <MenuItem value={550}>Nepal</MenuItem>
            <MenuItem value={560}>Netherlands</MenuItem>
            <MenuItem value={570}>New Zealand</MenuItem>
            <MenuItem value={580}>Niger</MenuItem>
            <MenuItem value={590}>Nigeria</MenuItem>
            <MenuItem value={600}>Norfolk Island</MenuItem>
            <MenuItem value={610}>Norway</MenuItem>
            <MenuItem value={620}>Peru</MenuItem>
            <MenuItem value={630}>Philippines</MenuItem>
            <MenuItem value={640}>Portugal</MenuItem>
            <MenuItem value={650}>Puerto Rico</MenuItem>
            <MenuItem value={660}>Qatar</MenuItem>
            <MenuItem value={670}>Romania</MenuItem>
            <MenuItem value={680}>Russia</MenuItem>
            <MenuItem value={690}>Rwanda</MenuItem>
            <MenuItem value={690}>Samoa</MenuItem>
            <MenuItem value={700}>Senegal</MenuItem>
            <MenuItem value={710}>seychelles</MenuItem>
          </Select>
        </FormControl>

        <FormControl className={clsx(classes.margin, classes.textField)}>
          <InputLabel id="demo-simple-select-label">
            Whats your preferred Job Type
          </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={type}
            onChange={handleTypeChange}
          >
            <MenuItem value={10}>Full Time</MenuItem>
            <MenuItem value={20}>Part Time</MenuItem>
            <MenuItem value={30}>Remote</MenuItem>
            <MenuItem value={40}>Freelancing</MenuItem>
            <MenuItem value={50}>Internship</MenuItem>
          </Select>
        </FormControl>

        <Button
          variant={isSubmitting ? "disabled" : "contained"}
          className={classes.button}
          onClick={handleSubmit}
        >
          Submit Profile
        </Button>
        <Typography variant="body2" component="p" className={classes.terms}>
          You can edit your profile anytime from your account
        </Typography>
      </div>
      <Footer />
    </>
  );
}

export default connect(null, { submitProfile })(ProfilePage);

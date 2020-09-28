import axios from "axios";
import { requests } from "./requests";
import { types } from "./types";

export const getLogin = ({ email, password }, callback) => async (dispatch) => {
  try {
    const response = await axios.post(requests.login, {
      email,
      password,
    });

    localStorage.setItem("token", response.data.token);

    dispatch({
      type: types.authenticated,
      payload: response.data.token,
    });

    callback();
  } catch (err) {
    dispatch({
      type: types.loginError,
      payload: "Email or Password Incorrect",
    });
  }
};

export const getSignUp = (
  { name, email, password, cpassword },
  callback
) => async (dispatch) => {
  try {
    const response = await axios.post(requests.signup, {
      name,
      email,
      password,
      cpassword,
    });
    localStorage.setItem("token", response.data.token);

    dispatch({
      type: types.signUpauthenticated,
      payload: response.data.token,
    });

    callback();
  } catch (err) {
    dispatch({
      type: types.signUpError,
      payload: "A user with this email already exists",
    });
  }
};

export const getJobsList = () => async (dispatch) => {
  try {
    const response = await axios.get(requests.getJobs, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    dispatch({
      type: types.getJobs,
      payload: response.data.jobs,
    });
  } catch (err) {
    dispatch({
      type: types.getJobsErr,
      payload: err.message,
    });
  }
};

export const submitProfile = (props, callback) => async (dispatch) => {
  try {
    await axios.post(requests.submitProfile, props, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });

    callback();
  } catch (err) {
    console.log(err);
  }
};

export const getJobById = (id) => async (dispatch) => {
  try {
    const response = await axios.get(`${requests.getJobs}/${id}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    dispatch({
      type: types.getSingleJob,
      payload: response.data.job,
    });
  } catch (err) {
    dispatch({
      type: types.getJObByIdErr,
      payload: err.message,
    });
  }
};

export const switchPage = (page) => {
  return {
    type: types.switchPage,
    payload: page,
  };
};

export const starJob = (id) => async (dispatch) => {
  try {
    const response = await axios.post(
      `${requests.starJob}`,
      { id: id },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );
    dispatch({
      type: types.starJob,
      payload: response.data.message,
    });
  } catch (err) {
    dispatch({
      type: types.starJobErr,
      payload: err.message,
    });
  }
};

export const getStarredJobs = () => async (dispatch) => {
  try {
    const response = await axios.get(`${requests.getStarredJobs}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    dispatch({
      type: types.getStarredJobs,
      payload: response.data.jobs,
    });
  } catch (err) {
    dispatch({
      type: types.getStarredJobsErr,
      payload: err.message,
    });
  }
};

export const clearStarredJobs = (callback) => async (dispatch) => {
  try {
    await axios.post(
      `${requests.clearStarredJobs}`,
      { id: 1 },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );
    callback();
  } catch (err) {
    console.log(err);
  }
};

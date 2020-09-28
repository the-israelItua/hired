import { types } from "../actions/types";

export const getJobsReducer = (state = [], action) => {
  switch (action.type) {
    case types.getJobs:
      return [...action.payload];
    default:
      return state;
  }
};

export const selectedReducer = (state = {}, action) => {
  switch (action.type) {
    case types.getSingleJob:
      return action.payload;
    default:
      return state;
  }
};

export const starJobsReducer = (state = [], action) => {
  switch (action.type) {
    case types.getStarredJobs:
      return action.payload;
    default:
      return state;
  }
};

export const topJobsReducer = (state = [], action) => {
  switch (action.type) {
    case types.getTopJobs:
      return action.payload;
    default:
      return state;
  }
};

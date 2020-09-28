import { types } from "../actions/types";

export const pageReducer = (state = "", action) => {
  switch (action.type) {
    case types.switchPage:
      return action.payload;
    default:
      return state;
  }
};

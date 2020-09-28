import { combineReducers } from "redux";
import {
  getJobsReducer,
  selectedReducer,
  starJobsReducer,
  topJobsReducer,
} from "./jobsReducer";
import { loginReducer, signUpReducer } from "./authReducer";
import { pageReducer } from "./pageReducer";

const reducer = combineReducers({
  jobs: getJobsReducer,
  isLoggedIn: loginReducer,
  isSignedUp: signUpReducer,
  selected: selectedReducer,
  starred: starJobsReducer,
  top: topJobsReducer,
  page: pageReducer,
});

export default reducer;

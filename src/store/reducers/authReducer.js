import { types } from "../actions/types";

const Login_Initial_State = {
  auth: "",
  errorMessage: "",
};

const SignUp_Initial_State = {
  auth: "",
  errorMessage: "",
};

export const loginReducer = (state = Login_Initial_State, action) => {
  switch (action.type) {
    case types.authenticated:
      return { ...state, auth: action.payload };
    case types.loginError:
      return { ...state, errorMessage: action.payload };
    default:
      return state;
  }
};

export const signUpReducer = (state = SignUp_Initial_State, action) => {
  switch (action.type) {
    case types.signUpauthenticated:
      return { ...state, auth: action.payload };
    case types.signUpError:
      return { ...state, errorMessage: action.payload };
    default:
      return state;
  }
};

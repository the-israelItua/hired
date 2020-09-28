import React from "react";
import { render } from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import reducer from "./store/reducers";
import App from "./App";

const store = createStore(
  reducer,
  { isLoggedIn: { authenticated: localStorage.getItem("token") } },
  applyMiddleware(thunk)
);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import Root from "./screens/Root";
import initialState from "../data.json";
import reducer from "./reducers/index";

const store = createStore(reducer, initialState);

ReactDOM.render(
  <Provider store={store}>
    <Root />
  </Provider>,
  document.getElementById("app")
);

import React from "react";
import Router from "./routes";
import { Provider } from "react-redux";
import createStore from "./store/store";

const Root = () => {
  return (
    <Provider store={createStore()}>
      <Router />
    </Provider>
  );
};

export default Root;

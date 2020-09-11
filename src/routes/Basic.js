import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import ResetPassword from "../pages/ResetPassword";

const Basic = () => {
  return (
    <BrowserRouter>
      <Switch>
        {/* We don't have landing page for now, so just redirect to login. */}
        <Redirect from="/" exact to="/login" />
        <Route path="/login" exact component={Login} />
        <Route path="/signup" exact component={Signup} />
        <Route path="/reset" exact component={ResetPassword} />
        <Redirect from="*" to="/" />
      </Switch>
    </BrowserRouter>
  );
};

export default Basic;

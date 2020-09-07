import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import AuthenticatedHeader from "../components/Header/AuthenticatedHeader";

const Authenticated = () => {
  return (
    <BrowserRouter>
      <AuthenticatedHeader />
      <Switch>
        <Redirect path="/" exact to="/dashboard" />
        <Route path="/dashboard" exact component={Dashboard} />
      </Switch>
    </BrowserRouter>
  );
};

export default Authenticated;

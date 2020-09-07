import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import AuthenticatedHeader from "../components/Header/AuthenticatedHeader";
import ErrorPage from "../pages/Error";

const Authenticated = () => {
  return (
    <BrowserRouter>
      <AuthenticatedHeader />
      <Switch>
        <Redirect path="/" exact to="/dashboard" />
        <Route path="/dashboard" exact component={Dashboard} />
        <Route path="/error" exact component={ErrorPage} />
        <Redirect from="*" to="/error" />
      </Switch>
    </BrowserRouter>
  );
};

export default Authenticated;

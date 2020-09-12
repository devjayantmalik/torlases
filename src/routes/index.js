import React from "react";
import Authenticated from "./Authenticated";
import Basic from "./Basic";
import { connect } from "react-redux";
import { validateLogin } from "../store/auth/action";

const Routes = ({ isLoggedIn, validateLogin }) => {
  // Validate the login
  validateLogin();

  // Prevents Awkward behaviour of displaying login screen and
  // then immediately switching to dashboard screen
  if (isLoggedIn === null) return null;

  return isLoggedIn ? <Authenticated /> : <Basic />;
};

const mapStateToProps = (state) => {
  return { isLoggedIn: state.auth.isLoggedIn };
};

export default connect(mapStateToProps, { validateLogin })(Routes);

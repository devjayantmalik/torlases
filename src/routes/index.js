import React from "react";
import Authenticated from "./Authenticated";
import Basic from "./Basic";
import { connect } from "react-redux";

const Routes = ({ isLoggedIn }) => {
  return isLoggedIn ? <Authenticated /> : <Basic />;
};

const mapStateToProps = (state) => {
  return { isLoggedIn: state.auth.isLoggedIn };
};

export default connect(mapStateToProps, null)(Routes);

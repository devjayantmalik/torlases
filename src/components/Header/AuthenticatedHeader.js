import React from "react";
import { Link } from "react-router-dom";

const AuthenticatedHeader = () => {
  return (
    <header className="auth-navbar">
      <div className="navbar-brand">
        <Link to="/">T</Link>
      </div>
      <ul className="navbar-menu">
        <li>
          <Link to="/">
            <span className="icon mdi mdi-plus"></span>
          </Link>
        </li>
        <li>
          <Link to="/">
            <span className="icon mdi mdi-professional-hexagon"></span>
          </Link>
        </li>
        <li>
          <Link to="/">
            <span className="icon mdi mdi-bell-outline"></span>
          </Link>
        </li>
        <li>
          <Link to="/">
            <span className="icon mdi mdi-account"></span>
          </Link>
        </li>
      </ul>
    </header>
  );
};

export default AuthenticatedHeader;

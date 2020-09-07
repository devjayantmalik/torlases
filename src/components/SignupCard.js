import React from "react";
import { Link } from "react-router-dom";

const LoginCard = () => {
  return (
    <div className="card">
      <form className="login-form">
        <div>
          <label>Your Full name</label>
          <input type="text" />
        </div>
        <div>
          <label>Your Email Address</label>
          <input type="email" />
        </div>
        <div>
          <label>Your Password</label>
          <input type="password" />
        </div>
        <div>
          <label>Confirm Password</label>
          <input type="password" />
        </div>
        <div>
          <button className="button" type="submit">
            Create New Account
          </button>
        </div>
        <div className="card-links">
          <div>
            <Link to="/login">Proceed to Login ?</Link>
          </div>
          <div>
            <Link to="/reset">Forgot Password ?</Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default LoginCard;

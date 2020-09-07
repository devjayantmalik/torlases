import React from "react";
import { Link } from "react-router-dom";

const LoginCard = () => {
  return (
    <div className="card">
      <form className="login-form">
        <div>
          <label>Your Email Address</label>
          <input type="email" />
        </div>
        <div>
          <label>Your Password</label>
          <input type="password" />
        </div>
        <div>
          <button className="button" type="submit">
            Login Now
          </button>
        </div>
        <div className="card-links">
          <div>
            <Link to="/signup">Create an account</Link>
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

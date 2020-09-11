import React, { useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { signIn } from "../store/auth/action";
import ErrorCard from "./ErrorCard";

const LoginCard = ({ signIn }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Clear the previous errors
    setError("");

    if (!email) return setError("Email is Required.");
    if (!password) return setError("Password is Required.");

    signIn(email, password, (err) => {
      return setError(err.message);
    });
    return false;
  };

  return (
    <div className="card">
      <ErrorCard error={error} />
      <form className="login-form" onSubmit={handleFormSubmit}>
        <div>
          <label>Your Email Address</label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value.toLowerCase())}
            type="email"
          />
        </div>
        <div>
          <label>Your Password</label>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
          />
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

export default connect(null, { signIn })(LoginCard);

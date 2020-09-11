import React, { useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { signUp } from "../store/auth/action";
import ErrorCard from "./ErrorCard";

const SignupCard = ({ signUp }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Always reset the error
    setError("");

    /**
     * Basic Form Validation
     */
    if (!name) return setError("Name is required");
    if (!email) return setError("Email is required");
    if (!password) return setError("Password is required");
    if (!confirmPassword) return setError("Confirm Password is required.");
    if (password !== confirmPassword)
      return setError("Password does not match");

    /**
     * Register the user
     */
    signUp({ name, email, password }, (err) => {
      return setError(err.message);
    });

    return false;
  };

  return (
    <div className="card">
      <ErrorCard error={error} />
      <form className="login-form" onSubmit={handleFormSubmit}>
        <div>
          <label>Your Full name</label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
          />
        </div>
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
          <label>Confirm Password</label>
          <input
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            type="password"
          />
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

export default connect(null, { signUp })(SignupCard);

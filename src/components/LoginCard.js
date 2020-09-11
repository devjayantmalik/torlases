import React, { useState } from "react";
import { Link } from "react-router-dom";

const LoginCard = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="card">
      <form className="login-form">
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

export default LoginCard;

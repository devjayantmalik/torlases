import React, { useState } from "react";
import { Link } from "react-router-dom";

const ResetCard = () => {
  const [email, setEmail] = useState("");
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
          <button className="button" type="submit">
            Reset Your Account
          </button>
        </div>
        <div className="card-links">
          <div>
            <Link to="/login">Proceed to Login ?</Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ResetCard;

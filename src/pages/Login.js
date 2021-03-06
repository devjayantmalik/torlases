import React from "react";
import LoginCard from "../components/LoginCard";
import Image from "../components/Image";
import illustration from "../assets/images/login-illustration.svg";

const Login = () => {
  return (
    <section className="login">
      <div className="login-container">
        <div className="columns">
          <div className="column">
            <h1>Login Now</h1>
            <LoginCard />
          </div>
          <div className="column is-hidden-mobile">
            <Image src={illustration} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;

import React from "react";
import SignupCard from "../components/SignupCard";
import Image from "../components/Image";
import illustration from "../assets/images/login-illustration.svg";

const Signup = () => {
  return (
    <section className="login">
      <div className="login-container">
        <div className="columns">
          <div className="column">
            <h1 className="title">Create new account</h1>
            <SignupCard />
          </div>
          <div className="column is-hidden-mobile">
            <Image src={illustration} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Signup;

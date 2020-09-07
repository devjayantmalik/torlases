import React from "react";
import ResetCard from "../components/ResetCard";
import Image from "../components/Image";
import illustration from "../assets/images/login-illustration.svg";

const ResetPassword = () => {
  return (
    <section className="login">
      <div className="login-container">
        <div className="columns">
          <div className="column">
            <h1 className="title">Reset Password</h1>
            <ResetCard />
          </div>
          <div className="column is-hidden-mobile">
            <Image src={illustration} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResetPassword;

import React from "react";
import Register from "../components/AuthComponents/Register";
import AboutLinks from "../components/AboutLinks";

const RegisterScreen = () => {
  window.scrollTo(0, 0);

  return (
    <div className="stretch-me">
      <div className="register-me">
        <div className="image">
          <img className="m-0" alt="logo" src="/images/login-image.png" />
          <div className="centered-links">
            <AboutLinks />
          </div>
        </div>
        <Register />
      </div>
    </div>
  );
};

export default RegisterScreen;

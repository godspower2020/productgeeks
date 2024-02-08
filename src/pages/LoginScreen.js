import React from "react";
import Login from "../components/AuthComponents/Login";
import AboutLinks from "../components/AuthComponents/AboutLinks";

const LoginScreen = () => { 
  window.scrollTo(0, 0);

  return (
    <div className="stretch-me">
      <div className="login-me">
        <div className="image">
          <img className="m-0" alt="logo" src="/img/login-image.png" />
          <div className="centered-links">
            <AboutLinks />
          </div>
        </div>
        <Login headingText="Log In" useParagraphTag={false} />
      </div>
    </div>
  );
};

export default LoginScreen;

import React from "react";
import Login from "../components/AuthComponents/Login";

const LoginScreen = () => {
  window.scrollTo(0, 0);

  return (
    <div className="stretch-me">
      <div className="login-me">
        <div className="image">
          <img className="m-0" alt="logo" src="/images/login-image.png" />
        </div>
        <Login />
      </div>
    </div>
  );
};

export default LoginScreen;

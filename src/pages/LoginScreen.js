import React from "react";
import Login from "../components/AuthComponents/Login";

const LoginScreen = () => {
  window.scrollTo(0, 0);

  return (
    <>
      <div className="login-me">
        <img className="" alt="register" src="/images/login-image.png" />
        <Login />
      </div>
    </>
  );
};

export default LoginScreen;

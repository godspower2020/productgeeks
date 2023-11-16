import React from "react";
import Register from "../components/AuthComponents/Register";

const RegisterScreen = () => {
  window.scrollTo(0, 0);

  return (
    <>
      <div className="register-me">
        <img className="" alt="register" src="/images/login-image.png" />
        <Register />
      </div>
    </>
  );
};

export default RegisterScreen;

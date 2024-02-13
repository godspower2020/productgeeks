import React, { useState, useEffect } from "react";
import { useSelector } from 'react-redux';
import Register from "../components/AuthComponents/Register";
import AboutLinks from "../components/AuthComponents/AboutLinks";
import ConfirmEmail from "../components/AuthComponents/ConfirmEmail";

const RegisterScreen = () => {
  window.scrollTo(0, 0);

  const [showConfirmEmail, setShowConfirmEmail] = useState(false);

  const userRegister = useSelector((state) => state.userRegister); 
  const { success } = userRegister; 

  useEffect(() => {
    if (success) {
      setShowConfirmEmail(true);
    }
  }, [success]);

  return (
    <div className="stretch-me">
      <div className="register-me">
        <div className="image">
          <img className="m-0" alt="logo" src="/img/login-image.png" />
          <div className="centered-links">
            <AboutLinks />
          </div>
        </div>
        {showConfirmEmail ? <ConfirmEmail /> : <Register />}
      </div>
    </div>
  );
};

export default RegisterScreen;

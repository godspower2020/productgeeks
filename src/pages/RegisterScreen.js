import React, { useState } from "react";
import Register from "../components/AuthComponents/Register";
import AboutLinks from "../components/AuthComponents/AboutLinks";
// import MailCode from "../components/AuthComponents/MailCode";

const RegisterScreen = () => {
  window.scrollTo(0, 0);

  // const [showMailCode, setShowMailCode] = useState(false);

  // const switchToMailCode = () => {
  //   setShowMailCode(true);
  // };

  return (
    <div className="stretch-me">
      <div className="register-me">
        <div className="image">
          <img className="m-0" alt="logo" src="/img/login-image.png" />
          <div className="centered-links">
            <AboutLinks />
          </div>
        </div>
        <Register />
        {/* {showMailCode ? <MailCode /> : <Register onSuccess={switchToMailCode} />} */}
      </div>
    </div>
  );
};

export default RegisterScreen;

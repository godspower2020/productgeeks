import React, { useState, useEffect } from "react";
import { useSelector } from 'react-redux';
import { toast } from "react-toastify";
import Toast from "../components/LoadingError/Toast";
import Register from "../components/AuthComponents/Register";
import AboutLinks from "../components/AuthComponents/AboutLinks";
import ConfirmEmail from "../components/AuthComponents/ConfirmEmail";

const ToastObjects = {
  pauseOnFocusLoss : false,
  draggable: false,
  pauseOnHover: false,
  autoClose: 3000,
}

const RegisterScreen = () => {
  window.scrollTo(0, 0);

  const [showConfirmEmail, setShowConfirmEmail] = useState(false);

  const toastId = React.useRef(null);

  const userRegister = useSelector((state) => state.userRegister); 
  const { success } = userRegister; 

  useEffect(() => {
    if (success && !toast.isActive(toastId.current)) {
      toastId.current = toast.success("Email Sent Successfully", ToastObjects);
      setShowConfirmEmail(true);
    }
  }, [success]);

  return (
    <>
      <Toast />
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
    </>
  );
};

export default RegisterScreen;

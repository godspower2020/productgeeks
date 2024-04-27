import React, { useState, useEffect } from "react";
import { Helmet } from 'react-helmet';
import { useSelector } from 'react-redux';
import { toast } from "react-toastify";
import Toast from "../components/LoadingError/Toast";
import Register from "../components/AuthComponents/Register";
import AboutLinks from "../components/AuthComponents/AboutLinks";
import ConfirmEmail from "../components/AuthComponents/ConfirmEmail";
import GoogleAnalytics from "../utils/GoogleAnalytics";

const ToastObjects = {
  pauseOnFocusLoss : false,
  draggable: false,
  pauseOnHover: false,
  autoClose: 3000,
}

const RegisterScreen = () => {
  window.scrollTo(0, 0);

  const [showConfirmEmail, setShowConfirmEmail] = useState(false);
  const [email, setEmail] = useState("");

  const toastId = React.useRef(null);

  const userRegister = useSelector((state) => state.userRegister); 
  const { success } = userRegister; 

  useEffect(() => {
    if (success && !toast.isActive(toastId.current)) {
      toastId.current = toast.success("Email Sent Successfully", ToastObjects);
      setShowConfirmEmail(true);
    }
  }, [success]);

  const handleEmailChange = (email) => {
    setEmail(email);
  };

  return (
    <>
      <Helmet>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-X68KRGZPLC"></script>
        <GoogleAnalytics /> 
        <title>myproductgeeks | Register</title>
        <meta name="description" content="Register now on myproductgeeks to unlock a world of possibilities. Sign up to access exclusive features tailored just for you. Join our community of product enthusiasts and stay updated with the latest trends. Start your journey with us today!" />
      </Helmet>
      <Toast />
      <div className="stretch-me">
        <div className="register-me">
          <div className="image">
            <img className="m-0" alt="logo" src="/img/login-image.png" />
            <div className="centered-links">
              <AboutLinks />
            </div>
          </div>
          {showConfirmEmail ? <ConfirmEmail email={email} /> : <Register onEmailChange={handleEmailChange} />}
        </div>
      </div>
    </>
  );
};

export default RegisterScreen;

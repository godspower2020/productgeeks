import React, { useEffect } from "react";
import { Helmet } from 'react-helmet';
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import Toast from "../components/LoadingError/Toast";
import Login from "../components/AuthComponents/Login";
import AboutLinks from "../components/AuthComponents/AboutLinks";
import GoogleAnalytics from "../utils/GoogleAnalytics";

const ToastObjects = {
  pauseOnFocusLoss : false,
  draggable: false,
  pauseOnHover: false,
  autoClose: 3000,
}

const LoginScreen = () => { 
  window.scrollTo(0, 0);

  const toastId = React.useRef(null);

  const { success } = useSelector((state) => state.passwordReset);

 useEffect(() => {
    if (success && !toast.isActive(toastId.current)) {
      toastId.current = toast.success("Password reset Successfully, login now", ToastObjects);
    }
  }, [success]);

  return (
    <>
      <Helmet>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-X68KRGZPLC"></script>
        <GoogleAnalytics /> 
        <title>myproductgeeks | Login</title>
        <meta name="description" content="Login to your account on ProductGeeks to access exclusive features and content. Join our community of product enthusiasts and stay updated with the latest trends." />
      </Helmet>
      <Toast />
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
    </>
  );
};

export default LoginScreen;

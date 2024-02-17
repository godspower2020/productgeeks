import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { toast } from "react-toastify";
import Toast from "../components/LoadingError/Toast";

import AboutLinks from '../components/AuthComponents/AboutLinks'
import ResetEmail from '../components/AuthComponents/ResetEmail'
import ResetPassword from '../components/AuthComponents/ResetPassword';
import { useNavigate } from 'react-router-dom';

const ToastObjects = {
  pauseOnFocusLoss : false,
  draggable: false,
  pauseOnHover: false,
  autoClose: 3000,
}

const ResetPasswordScreen = () => {
  const [showResetPassword, setShowResetPassword] = useState(false);
  const [resetEmail, setResetEmail] = useState('');

  const navigate = useNavigate()
  
  const toastId = React.useRef(null);

  const { loading, error, success } = useSelector((state) => state.userRequestResetPasswordMail);

  const { loading:resetLoading, error:resetError, success:resetSuccess } = useSelector((state) => state.passwordReset);
  
  useEffect(() => {
    if (success && !toast.isActive(toastId.current)) {
      toastId.current = toast.success("Email Sent Successfully", ToastObjects);
      setShowResetPassword(true);
    }
    if (resetSuccess) {
      navigate("/login")
    }
  }, [success, resetSuccess, navigate]);

  const handleEmailChange = (email) => {
    setResetEmail(email);
  };

  return (
    <>
      <Toast />
      <div className="stretch-me">
        <div className="reset-me">
          <div className="image">
            <img className="m-0" alt="logo" src="/img/login-image.png" />
            <div className="centered-links">
              <AboutLinks />
            </div>
          </div>
          { showResetPassword ? (
            <ResetPassword loading={resetLoading}  error={resetError} email={resetEmail} />
          ) : (
            <ResetEmail loading={loading} error={error} onEmailChange={handleEmailChange} />
          )}
        </div>
      </div>
    </>
  )
}

export default ResetPasswordScreen
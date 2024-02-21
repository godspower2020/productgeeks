import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from "react-toastify";
import Toast from '../LoadingError/Toast';
import Message from '../LoadingError/Error';
import { useNavigate } from 'react-router-dom';
import { confirmEmail, resendOTP } from '../../redux/actions/userActions';
import { SpinnerLoading } from '../LoadingError/Loading';

const ToastObjects = {
  pauseOnFocusLoss : false,
  draggable: false,
  pauseOnHover: false,
  autoClose: 3000,
}

const ConfirmEmail = ({email}) => {
  const [otp, setOtp] = useState('');
  
  const toastId = React.useRef(null);

  const navigate = useNavigate(); 
  const dispatch = useDispatch();

  const { loading, success, error } = useSelector((state) => state.userEmailConfirmation);

  const { loading: resendLoading, success:resendSuccess, error:resendError } = useSelector((state) => state.userResendEmailConfirmation);

  useEffect(() => {
    if (success) {
      navigate('/landing-page');
    }
    if (resendSuccess) {
      if (!toast.isActive(toastId.current)) {
        toastId.current = toast.success("Email Resent Successfully", ToastObjects);
      }
    }
  }, [success, resendSuccess, navigate]);

  const handleConfirmation = async (e) => {
    e.preventDefault();

    dispatch(confirmEmail(email, otp))
  }

  const handleResendOTP = async () => {
    try {
      dispatch(resendOTP(email));
      
    } catch (error) {
      console.error('Error resending OTP:', error);
    }
  }

  return (
    <>
      <Toast />
      <div className="form-confirm">
        <h4 className='heading'>Verify Email</h4>
        {error && <Message variant="alert-danger">{error}</Message>}
        {resendError && <Message variant="alert-danger">{resendError}</Message>}
        <form className="form-me">
          <p className='mb-5'>
            A short code was sent to your email address <a href={`mailto:${email}`} target="_blank" rel='noreferrer' style={{ color: 'blue' }}>{email}</a>. Enter the code to verify your account.
          </p>
          <div className="fullname-input-container">
            <label htmlFor="account-confirm-pass">Enter Code</label>
            <input
              required
              type="text"
              placeholder="Enter code"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
            />
          </div>
          <button
            onClick={handleConfirmation}
            className="register-button"
            type="button"
            disabled={!otp || loading}  
            style={{ opacity: !otp || loading ? '0.5' : '1' }} 
          >
            {loading ? <SpinnerLoading /> : 'Verify'}
          </button>
          <div className='resend' onClick={handleResendOTP}>
            <span className="resend-otp">{resendLoading ? <SpinnerLoading variant="text-primary" /> : 'Resend OTP'}</span>
          </div>
        </form>
      </div>
    </>
  );
};

export default ConfirmEmail;

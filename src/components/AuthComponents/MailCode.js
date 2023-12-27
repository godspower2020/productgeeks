import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { confirmEmail } from '../../redux/actions/userActions';
import { toast } from "react-toastify";
import Toast from '../LoadingError/Toast';
import { SpinnerLoading } from '../LoadingError/Loading';

const MailCode = ({ email }) => {
  const [confirmationCode, setConfirmationCode] = useState('');

  const dispatch = useDispatch();

  const toastId = React.useRef(null);

  const ToastObjects = {
    pauseOnFocusLoss : false,
    draggable: false,
    pauseOnHover: false,
    autoClose: 3000,
  }

  const { loading, success, error } = useSelector(
    (state) => state.userEmailConfirmation
  );

  const confirmEmailHandler = async () => {
    try {
        // Dispatch the confirmation action
        await dispatch(confirmEmail(email, confirmationCode));
  
        // Notify the user with a success toast
        toast.success('Email confirmed successfully', ToastObjects);
      } catch (err) {
        // Notify the user with an error toast
        toast.error('Please enter the correct OTP', ToastObjects);
    }
  };

  const generateRandomCode = () => {
    return Math.floor(100000 + Math.random() * 900000).toString();
  };

  const regenerateCode = () => {
    setConfirmationCode(generateRandomCode());
  };

  React.useEffect(() => {
    // Generate the initial code when the component mounts
    regenerateCode();
  }, []);

  return (
    <div className="form-register mail-code">
      <h4 className='heading'>Verify Email</h4>
      <p className='mb-5'>
        A short code was sent to your email address "mail here" copy and paste
        the code to verify your account
      </p>
      <form className="form-me">
        <div className="fullname-input-container">
          <label htmlFor="account-confirm-pass">Enter Code</label>
          <Link className="how-it-works" to={"/how-it-works"}>
            Need Help ?
          </Link>
          <input
            required
            type="text"
            placeholder="Enter code"
            autoComplete="text"
            value={confirmationCode}
            onChange={(e) => setConfirmationCode(e.target.value)}
          />
        </div>
        <button
          className="register-button"
          type="button"
          onClick={confirmEmailHandler}
          disabled={loading}
        >
          {loading ? <SpinnerLoading /> : 'Verify'}
        </button>
        <div className='return-resend'>
          <Link className="return-to-login" to={"/login"}>
            Return to login
          </Link>
          <Link className="resend-otp">
            resend OTP
          </Link>
        </div>
      </form>
    </div>
  );
};

export default MailCode;
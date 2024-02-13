import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { confirmEmail } from '../../redux/actions/userActions';
import { SpinnerLoading } from '../LoadingError/Loading';
import Message from '../LoadingError/Error';

const ConfirmEmail = () => {
  const [otp, setOtp] = useState('');

  const navigate = useNavigate(); 
  const dispatch = useDispatch();

  const userRegister = useSelector((state) => state.userRegister);
  const { userInfo } = userRegister;

  const { loading, error } = useSelector((state) => state.userEmailConfirmation);

  const handleConfirmation = async (e) => {
    e.preventDefault();
    
    await dispatch(confirmEmail(userInfo?.email, otp))
    .then(() => {
      if (!error) {
        navigate('/landing-page');
      }
    });
  }

  return (
    <div className="form-confirm mail-code">
      <h4 className='heading'>Verify Email</h4>
      <form className="form-me">
        {error && <Message variant="alert-danger">{error}</Message>}
        <p className='mb-5'>
          A short code was sent to your email address <a href={`mailto:${userInfo.email}`} target="_blank" rel='noreferrer' style={{ color: 'blue' }}>{userInfo.email}</a>. Enter the code to verify your account.
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
          disabled={!otp} // Disable button if otp field is empty
          style={{ opacity: !otp ? '0.5' : '1' }} // Adjust opacity based on whether the otp field is empty
        >
          {loading ? <SpinnerLoading /> : 'Verify'}
        </button>
        <div className='return-resend'>
          <span className="return-to-login">Return to login</span>
          <span className="resend-otp">Resend OTP</span>
        </div>
      </form>
    </div>
  );
};

export default ConfirmEmail;

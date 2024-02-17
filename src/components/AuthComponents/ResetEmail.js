import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { SpinnerLoading } from '../LoadingError/Loading';
import Message from '../LoadingError/Error';
import { sendPasswordResetMail } from '../../redux/actions/userActions';

const ResetEmail = ({ loading, error, onEmailChange }) => {
    const [email, setEmail] = useState('');
    const dispatch = useDispatch();

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
        onEmailChange(e.target.value);
    };

    const handleSendResetCode = async () => {
        try {
            dispatch(sendPasswordResetMail(email));
        } catch (error) {
            console.error('Error sending OTP:', error);
        }
    };

  return (
    <>
        <div className="form-reset">
            <h4 className='heading'>Reset password</h4>
            {error && <Message variant="alert-danger">{error}</Message>}
            <form className="form-me">
                <p className='mb-5'>If you forgot your password, well, then we’ll email you a code to reset your password</p>
                <Link className="how-it-works" to={"/how-it-works"}>
                    Need Help ?
                </Link>
                <div className="fullname-input-container">
                    <label htmlFor="account-confirm-pass">Email</label>
                    <input
                        type="email"
                        placeholder="Enter your Email Address"
                        value={email}
                        onChange={handleEmailChange}
                    />
                </div>
                <button
                    className="register-button"
                    type="button"
                    disabled={!email || loading} 
                    style={{ opacity: !email || loading ? '0.5' : '1' }} 
                    onClick={handleSendResetCode} 
                >
                    {loading ? <SpinnerLoading /> : 'Send Reset Code'}
                </button>
                <p>
                    <Link to="/login">Return To Login</Link>
                </p>
            </form>
      </div>
    </>
  );
};

export default ResetEmail;

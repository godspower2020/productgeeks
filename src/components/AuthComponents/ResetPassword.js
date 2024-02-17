import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import PasswordValidation from './PasswordValidation'
import { SpinnerLoading } from '../LoadingError/Loading'
import Message from '../LoadingError/Error'
import { resetPassword } from '../../redux/actions/userActions'
import { useDispatch } from 'react-redux'

const ResetPassword = ({email, loading, error}) => {
    const [otp, setOtp] = useState("")
    const [newPassword, setNewPassword] = useState("")
    const [showPassword, setShowPassword] = useState(false);
    const [passwordFocused, setPasswordFocused] = useState(false);
    const [isFormValid, setIsFormValid] = useState(true);
    const [validationResults, setValidationResults] = useState({
        minLength: false,
        uppercase: false,
        lowercase: false,
        number: false,
        specialChar: false,
    });

    const dispatch = useDispatch();
    
const handleShowPassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
};

const handlePasswordFocus = () => {
    setPasswordFocused(true);
};

const handlePasswordChange = (e) => {
    const newPassword = e.target.value;

    const hasMinLength = newPassword.length >= 8;
    const hasUppercase = /[A-Z]/.test(newPassword);
    const hasLowercase = /[a-z]/.test(newPassword);
    const hasNumber = /\d/.test(newPassword);
    const hasSpecialChar = /[!@#$%^_&*(),.?":{}|<>]/.test(newPassword);

    setValidationResults({
        minLength: hasMinLength,
        uppercase: hasUppercase,
        lowercase: hasLowercase,
        number: hasNumber,
        specialChar: hasSpecialChar,
    });

    const isValidationPassed = Object.values(validationResults).every(result => result);
    setIsFormValid(isValidationPassed);

    setNewPassword(newPassword);
};

useEffect(() => {
    const isValidationPassed = Object.values(validationResults).every(result => result);
    setIsFormValid(isValidationPassed);
}, [validationResults]);

const handleResetPassword = (e) => {
    e.preventDefault();
    
    dispatch(resetPassword(email, otp, newPassword))
}

  return (
    <>
        <div className="form-reset">
            <h4 className='heading'>Reset password</h4>
            {error && <Message variant="alert-danger">{error}</Message>}
            <form className="form-me">
                <p>Please enter your new password, make sure it is something you can remeber</p>
                <p>use the code sent to your email address you provided. Check your spam or junk folder if you don’t see the email in your inbox.</p>
                <p className='mb-2'>If you no longer have access to this your account, please <Link to="/contact">contact us</Link></p>
                <div className="fullname-input-container">
                    <input
                        required
                        type="text"
                        placeholder="Enter code"
                        value={otp}
                        onChange={(e) => setOtp(e.target.value)}
                    />
                </div>
                {passwordFocused && <PasswordValidation validationResults={validationResults} focused={passwordFocused} />}
                <div className="password-input-container">
                    <input 
                        required
                        type={showPassword ? 'text' : 'password'}
                        placeholder="New Password"
                        value={newPassword}
                        onChange={handlePasswordChange}
                        onFocus={handlePasswordFocus}
                    />
                    {newPassword && (
                        <i
                        className={`password-toggle ${showPassword ? 'fa fa-eye' : 'fa fa-eye-slash'}`}
                        aria-hidden="true"
                        onClick={handleShowPassword}
                        ></i>
                    )}  
                </div>
                <button
                    onClick={handleResetPassword} 
                    className="register-button"
                    type="submit" 
                    disabled={!otp || !isFormValid || loading}
                    style={{ opacity: !otp || !isFormValid || loading ? '0.5' : '1' }} 
                  >
                    {loading ? <SpinnerLoading /> : "Reset Password"}
                </button>
            </form>
      </div>
    </>
  )
}

export default ResetPassword
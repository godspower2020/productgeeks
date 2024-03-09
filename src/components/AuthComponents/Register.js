import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation, useNavigate } from "react-router-dom";
import { getGoogleUser, register } from '../../redux/actions/userActions';
import Message from '../LoadingError/Error';
import { SpinnerLoading } from '../LoadingError/Loading';
import PasswordValidation from './PasswordValidation';
import { USER_LOGIN_SUCCESS } from '../../redux/constants/UserConstants';

const Register = ({onEmailChange}) => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [passwordMatch, setPasswordMatch] = useState(true);
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
  const navigate = useNavigate(); 
  const location = useLocation(); 

  const redirect = location.search ? location.search.split("=")[1]:"/landing-page";

  const userRegister = useSelector((state) => state.userRegister)
  const {error, loading} = userRegister;

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo} = userLogin;

  useEffect(() => {
    if (userInfo) {
      navigate(redirect);
    }
  }, [userInfo, navigate, redirect]);

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

    setPassword(newPassword);
  };

  useEffect(() => {
    const isValidationPassed = Object.values(validationResults).every(result => result);
    setIsFormValid(isValidationPassed);
  }, [validationResults]);

  const capitalizeFirstLetter = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };
  
  const handleNameChange = (e) => {
    const newName = e.target.value;
  
    const capitalizedName = newName
      .split(" ")
      .map((word) => capitalizeFirstLetter(word))
      .join(" ");
  
    setName(capitalizedName);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    onEmailChange(e.target.value);
};

  const submitHandler = (e) => {
    e.preventDefault();

   dispatch(register(name, email, password, confirmPassword));
  };

  const googleLoginHandler = async (e) => {
    e.preventDefault();
    const serverUrl = process.env.NODE_ENV === 'production' ? process.env.REACT_APP_SERVER_URL_PRO : process.env.REACT_APP_SERVER_URL_DEV;
    const googleAuthUrl = `${serverUrl}/auth/google/callback`;
    
    window.open(googleAuthUrl, "_self");
  }; 

  return (
    <div className="form-register">
      <h4 className="heading">Register</h4>
      {error && <Message variant="alert-danger">{error}</Message>}
      <form className="form-me">
        <div className="fullname-input-container">
          <input
            required
            type="name" 
            placeholder="First & Last Name" 
            autoComplete="name"
            value={name} 
            onChange={handleNameChange} 
           />
        </div>
        <div className="email-input-container">
          <input
            required
            type="email" 
            placeholder="Email" 
            autoComplete="email"
            value={email} 
            onChange={handleEmailChange}  
           />
        </div>
        {passwordFocused && <PasswordValidation validationResults={validationResults} focused={passwordFocused} />}
        <div className="password-input-container">
          <input 
            required
            type={showPassword ? 'text' : 'password'}
            placeholder="Password"
            value={password}
            onChange={handlePasswordChange}
            onFocus={handlePasswordFocus}
          />
          {password && (
            <i
              className={`password-toggle ${showPassword ? 'fa fa-eye' : 'fa fa-eye-slash'}`}
              aria-hidden="true"
              onClick={handleShowPassword}
            ></i>
          )}  
        </div>
        <div className="confirmpassword-input-container">
          <input 
            required
            type={showPassword ? 'text' : 'password'}
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => {
              setConfirmPassword(e.target.value);
              setPasswordMatch(password === e.target.value);
            }}
          />
          {!passwordMatch && (
            <span className="error-message">Passwords do not match</span>
          )}
        </div>

        <button 
          onClick={submitHandler}
          className='register-button' 
          type="submit" 
          disabled={!isFormValid || loading}
          style={{ opacity: !isFormValid || loading ? '0.5' : '1' }}
        >
          {loading ? <SpinnerLoading /> : "Register"}
        </button>

        <button onClick={googleLoginHandler} className='google-button'>
          sign in with google 
        </button>

        <p>
          Already have an account?
          <Link className='mx-3' to={redirect ? `/login?redirect=${redirect}` : "/login"}>Login</Link>
        </p>
      </form>
    </div>
  )
}

export default Register
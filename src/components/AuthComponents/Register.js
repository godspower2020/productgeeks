import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation } from "react-router-dom";
import { register } from '../../redux/actions/userActions';
import Message from '../LoadingError/Error';
import { SpinnerLoading } from '../LoadingError/Loading';
import PasswordValidation from './PasswordValidation';

const Register = () => {
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
  const location = useLocation(); 

  const redirect = location.search ? location.search.split("=")[1]:"/landing-page";

  const userRegister = useSelector((state) => state.userRegister)
  const {error, loading} = userRegister;

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

  const submitHandler = (e) => {
    e.preventDefault();

   dispatch(register(name, email, password, confirmPassword));
  };

  return (
    <div className="form-register">
      <h4 className="heading">Register</h4>
      <form className="form-me" onSubmit={submitHandler}>
        {error && <Message variant="alert-danger">{error}</Message>}
        <Link className="how-it-works" to={"/how-it-works"}>
          Need Help ?
        </Link>
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
            onChange={(e) => setEmail(e.target.value)}  
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
          className='register-button' 
          type="submit" 
          disabled={!isFormValid}
        >
          {loading ? <SpinnerLoading /> : "Register"}
        </button>

        <button className='google-button'>
          <span className='mx-3'>
            <img className="" alt="googlelogo" src="/img/google.png" />
          </span>
          Continue with Google
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
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useLocation  } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { googleLogin, login } from '../../redux/actions/userActions';
import Message from '../LoadingError/Error';
import { SpinnerLoading } from '../LoadingError/Loading';

const Login = ({ headingText, useParagraphTag }) => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false);
  const [keepLoggedIn, setKeepLoggedIn] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate(); 
  const location = useLocation ();  

  const redirect = location.search ? location.search.split("=")[1]:"/landing-page";

  const userLogin = useSelector((state) => state.userLogin)
  const {error, loading, userInfo} = userLogin;

  useEffect(() => {
    if (userInfo) {
      navigate(redirect);
    }
  }, [userInfo, navigate, redirect]);

  const handleShowPassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const handleCheckboxChange = (e) => {
    setKeepLoggedIn(e.target.checked);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(login(email, password, keepLoggedIn))
  }

  const googleLoginHandler = async (userData) => {
    window.open("http://localhost:5000/auth/google/callback", "_self")
    try {
  
      dispatch(googleLogin(userData));
    } catch (error) {
      console.error("Error handling Google OAuth callback:", error);
    }
  };  

  const HeadingTag = useParagraphTag ? "p" : "h4";
  
  return (
    <div className="form-login">
      <HeadingTag className="heading">{headingText}</HeadingTag>
      {error && <Message variant="alert-danger">{error}</Message>}
      <form className="form-me">
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
        <div className="password-input-container">
          <input
            required
            type={showPassword ? 'text' : 'password'}
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {password && (
            <i
              className={`password-toggle ${showPassword ? 'fa fa-eye' : 'fa fa-eye-slash'}`}
              aria-hidden="true"
              onClick={handleShowPassword}
            ></i>
          )}   
        </div>

        <div className='persist-reset mt-4'>
          <div className='persist'>
            <label className="custom-checkbox">
              <input
                className='m-0'
                type="checkbox"
                checked={keepLoggedIn}
                onChange={handleCheckboxChange}
              />
              <span className="checkmark" />
              Keep me logged in
            </label>
          </div>
          <div>
            <p className='m-0'>
              <Link to="/reset-password">Forgot Password?</Link>
            </p>
          </div>
        </div>

        <button onClick={submitHandler} className='login-button' type="submit">{loading ? <SpinnerLoading /> : "Login"}</button>

        <button onClick={googleLoginHandler} className='google-button'>
          sign in with google
        </button>

        <p>
          Don't have an account?
          <Link 
            className='mx-3' 
            to={redirect ? `/register?redirect=${redirect}` : "/register"}>
              Create Account
          </Link>
        </p>
      </form> 
    </div>
  )
}

export default Login
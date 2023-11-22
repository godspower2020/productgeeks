import React, { useState } from 'react'
import { Link } from "react-router-dom";

const Login = () => {
  const [isSignin, setIsSignin] = useState(false)
  
  return (
    <div className="form-login">
      { isSignin ? 
      <p className='prompt-text'>Log in or sign up <br />
      to continue browsing apps</p> :
      <><h4>Log In</h4></> } 
      <form className="form-me">
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />

        <div className='persist-reset mt-4'>
          <div className='persist'>
            <label className="custom-checkbox">
              <input className='m-0' type="checkbox" />
              <span className="checkmark" />
              Keep me logged in
            </label>
          </div>
          <div className='reset'>
            <a href="/">Forgot Password?</a>
          </div>
        </div>

        <button className='login-button' type="submit">Login</button>

        <button className='google-button'>
          <span className='mx-3'>
            <img className="" alt="googlelogo" src="/images/google.png" />
          </span>
          Continue with Google
        </button>

        <p>
          Don't have an account?
          <Link className='mx-3' to={"/register"}>Create Account</Link>
        </p>
      </form> 
    </div>
  )
}

export default Login
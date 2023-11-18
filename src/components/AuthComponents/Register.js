import React from 'react'
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="form-register">
      <h4>Register</h4>
      <form className="form-me">
        <input type="text" placeholder="Username" />
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <input type="password" placeholder="Confirm Password" />

        <button className='register-button' type="submit">Register</button>

        <button className='google-button'>
          <span className='mx-3'>
            <img className="" alt="googlelogo" src="/images/google.png" />
          </span>
          Continue with Google
        </button>

        <p>
          Already have an account?
          <Link className='mx-3' to={"/login"}>Login</Link>
        </p>
      </form>
    </div>
  )
}

export default Register
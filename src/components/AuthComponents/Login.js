import React from 'react'
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="form-login d-flex justify-content-center align-items-center">
        <form className="form-me">
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button type="submit">Login</button>
          <p>
            <Link to={"/register"}>Create Account</Link>
          </p>
        </form> 
    </div>
  )
}

export default Login
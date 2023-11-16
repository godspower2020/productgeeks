import React from 'react'
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="form-register d-flex flex-column justify-content-center align-items-center">
        <form className="form-me">
          <input type="text" placeholder="Username" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />

          <button type="submit">Register</button>
          <p>
            <Link to={"/login"}>
              I Have Account <strong>Login</strong>
            </Link>
          </p>
        </form>
    </div>
  )
}

export default Register
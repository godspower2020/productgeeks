import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [isSignin, setIsSignin] = useState(false)
  const location = useLocation();

  const activeLink = (path) => {
    return location.pathname.startsWith(path);
  };

  return (
    <div>
      <div className="header">
        <div className="container-header">
          <div className="brand order">
          <Link
            className="navbar-brand d-flex align-items-center m-0"
            to="/"
            onClick={() => window.location.href = "/browse/mobile/apps"}
          >
            <img className="m-0" alt="logo" src="/images/logo.png" />
            <div className="navbar-brand-text text-black">
              <h5>product</h5>
              <h5>geeks</h5>
            </div>
          </Link> 
          </div>
          <div className="search-bar d-flex align-items-center order">
            <form className="navbar-search input-group m-0">
              <div className="input-group-prepend">
                <span className="input-group-text">
                  <i className="fa fa-search" aria-hidden="true"></i>
                  <p className="mx-1">search...</p>
                </span>
              </div>
              <input
                type="search"
                className="form-control rounded search"
                placeholder="Search for anything..."
              />
            </form>
          </div>
          <div className="nav order">
            <ul className="navbar-nav">
              <li className={`nav-item ${activeLink("/browse/mobile/apps") && "active"}`}>
                <Link className="nav-link" to="/browse/mobile/apps">Mobile Apps</Link>
              </li>
              <li className={`nav-item ${activeLink("/browse/web/apps") && "active"}`}>
                <Link className="nav-link" to="/browse/web/apps">Web Apps</Link>
              </li>
              <li className={`nav-item ${activeLink("/blog") && "active"}`}>
                <Link className="nav-link" to="/blog">Blog</Link>
              </li>
              <li className={`nav-item ${activeLink("/contact") && "active"}`}>
                <Link className="nav-link" to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
          <div className="login order">
            {isSignin ? 
              <div className="round-cover-avatar">
                <div className="avatar d-flex justify-content-center align-items-center">
                  <p>A</p>
                </div>
              </div>
              : 
              <div className="navbar-Login-Register">
                <Link className="px-3" to="/login">
                  <div className="login-hover-show">
                    Log in
                  </div>
                </Link>
                <Link className="" to="/register">
                  <button type="button" class="btn btn-theme-purple">sign up</button>
                </Link>
              </div>
            }
          </div>  
        </div>
      </div>
    </div>
  );
};

export default Header;

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { logout } from "../redux/actions/userActions";
import { fetchGoogleUserData } from "../utils/FetchGoogleUser";

const Header = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      await fetchGoogleUserData();
    };
    fetchData();
  }, [])

  const location = useLocation();
  const dispatch = useDispatch()

  const activeLink = (path) => {
    return location.pathname.startsWith(path);
  };

  const userLogin = useSelector((state) => state.userLogin)
  const {userInfo} = userLogin;
  
  useEffect(() => {
    const closeDropdown = () => {
      setDropdownOpen(false);
    };
  
    const handleScroll = () => {
      if (dropdownOpen) {
        closeDropdown();
      }
    };
  
    if (dropdownOpen) {
      document.addEventListener("click", closeDropdown);
      window.addEventListener("scroll", handleScroll);
    }
  
    return () => {
      document.removeEventListener("click", closeDropdown);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [dropdownOpen]);
  

  const toggleDropdown = (e) => {
    e.stopPropagation();
    setDropdownOpen(!dropdownOpen);
  };

  const getInitials = (user) => {
    const propertyToUse = user.name; 
  
    if (propertyToUse) {
      const propertyArray = propertyToUse.split(' '); 
      return propertyArray.slice(0, 2).map(word => word[0]).join('').toUpperCase();
    }
  
    return '';
  };  

  const logoutHandler = () => {
    dispatch(logout());
  }

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
              <img className="m-0" alt="logo" src="/img/logo.png" />
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
                  <p className="mx-1">Search...</p>
                </span>
              </div>
              <input
                type="search"
                className="form-control rounded search"
              />
            </form>
          </div>
          <div className="nav order">
            <ul className="navbar-nav">
              <li className={`nav-item ${activeLink("/browse/mobile/apps") && "active"}`}>
                <Link className="nav-link" to="/browse/mobile/apps">Mobile</Link>
              </li>
              <li className={`nav-item ${activeLink("/browse/web/apps") && "active"}`}>
                <Link className="nav-link" to="/browse/web/apps">Web</Link>
              </li>
              <li className={`nav-item ${activeLink("/landing-page") && "active"}`}>
                <Link className="nav-link" to="/landing-page">Landing Page</Link>
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
            {(userInfo) ? 
              <div className="round-cover-avatar" onClick={toggleDropdown}>
                {userInfo && userInfo.profileImage ? (
                    <img src={userInfo.profileImage} alt="Profile" className="profile-image" /> 
                ) : (
                <div className="avatar d-flex justify-content-center align-items-center">
                  <p>{getInitials(userInfo)}</p>
                </div>
                )}
              </div>
              : 
              <div className="navbar-Login-register">
                <Link className="login-button" to="/login">
                  <div className="login-hover-show">
                    Log in
                  </div>
                </Link>
                <Link className="register-button" to="/register">
                  <button type="button" class="btn btn-theme-purple">sign up</button>
                </Link>
              </div> 
            }
          </div>  
        </div>
      </div>
      {dropdownOpen && (userInfo) && (
        <div className="dropdown-container">
          <div className="dropdown-arrow"></div>
          <div className="dropdown">
            {/* User info */}
            <div className="user-info">
              <p className="user-name">{userInfo.name}</p>
              <p className="user-email">{userInfo.email}</p>
            </div>
            <hr />
            {/* Profile link */}
            <ul>
              <Link to="/profile">
                <li>
                  <i className="fa fa-cog pr-2" aria-hidden="true"></i>
                  Profile
                </li>
              </Link>
            </ul>
            <hr />
            {/* Logout */}
            <div className="logout" to="#" onClick={logoutHandler}>
              <p>
                <i className="fa fa-sign-out" aria-hidden="true"></i>
                Logout
              </p>
            </div>
            <hr />
            {/* Dropdown links */}
            <div className="dropdown-links d-flex justify-content-between align-items-center">
              <Link className="" to="/privacy">
                Privacy
              </Link>
              <Link className="" to="/terms">
                Terms
              </Link>
              <Link className="" to="/copyright">
                Copyright
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;